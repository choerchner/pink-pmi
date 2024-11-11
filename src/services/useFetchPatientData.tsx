import { useCallback, useEffect, useState } from "react";
import FHIR from "fhirclient";
import { fhirR4 } from "@smile-cdr/fhirts";
import config from "../config/config.json";

export default function useFetchPatientData() {
  const [patientData = [], setPatientData] = useState<fhirR4.Patient[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchPatientData = useCallback(async () => {
    const fhirclient = FHIR.client({
      serverUrl: config.FHIR_API_URL,
    });
    setIsLoading(true);
    setError(null);
    if (fhirclient) {
      try {
        const fhirResponse: fhirR4.Patient[] = await fhirclient.request(
          `Patient`,
          {
            flat: true,
            pageLimit: config.FHIR_API_PAGE_LIMIT,
          },
        );
        setPatientData(fhirResponse);
      } catch (error) {
        if (error) {
          const errorParsed: Error = error as Error;
          setError(errorParsed.message);
          console.log(errorParsed);
        }
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    handleFetchPatientData();
  }, [handleFetchPatientData]);

  return { patientData, isLoading, error, refetch: handleFetchPatientData };
}
