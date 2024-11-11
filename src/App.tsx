import { useState } from "react";
import "./App.css";
import PatientsOverview from "./components/PatientsOverview";
import PatientDetail from "./components/PatientDetail";
import { fhirR4 } from "@smile-cdr/fhirts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import useFetchPatientData from "./services/useFetchPatientData";
import ErrorToast from "./components/ErrorToast";

function App() {
  const { patientData, isLoading, error, refetch } = useFetchPatientData();
  const [selectedPatient, setSelectedPatient] = useState<fhirR4.Patient>();
  const [showPatientDetailData, setShowPatientDetailData] = useState(false);

  return (
    <>
      <Navbar className="pink-bg p-4 mb-4">
        <h1 className="text-white">Patient Management Interface</h1>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <PatientsOverview
              patientData={patientData}
              onPatientClick={(patient: fhirR4.Patient) => {
                setSelectedPatient(patient);
                setShowPatientDetailData(true);
              }}
              onRefetchPatientsClick={() => {
                refetch();
                setShowPatientDetailData(false);
              }}
              loading={isLoading}
            />
          </Col>
          <Col>
            {showPatientDetailData && (
              <PatientDetail
                patientDetailData={selectedPatient}
                onPatientDetailCloseClick={() =>
                  setShowPatientDetailData(false)
                }
              />
            )}
          </Col>
        </Row>
      </Container>
      {error && <ErrorToast errorMessage={error} />}
    </>
  );
}

export default App;
