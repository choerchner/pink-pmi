import { useState } from "react";
import { fhirR4 } from "@smile-cdr/fhirts";
import Pagination from "./Pagination";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PatientsList from "./PatientsList";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  patientData: fhirR4.Patient[];
  loading: boolean;
  onPatientClick: (patient: fhirR4.Patient) => void;
  onRefetchPatientsClick: () => void;
}

const PatientsOverview = ({
  patientData,
  loading,
  onPatientClick,
  onRefetchPatientsClick,
}: Props) => {
  // number of Patients displayed per Page
  const [patientsPerPage] = useState(20);

  const [currentPage, setCurrentPage] = useState(1);

  // dynamic calculation for the pagination
  const indexOfLastPatient: number = currentPage * patientsPerPage;
  const indexOfFirstPatient: number = indexOfLastPatient - patientsPerPage;
  const currentPatients: fhirR4.Patient[] = patientData.slice(
    indexOfFirstPatient,
    indexOfLastPatient,
  );

  function handleRefetchPatientsClick() {
    onRefetchPatientsClick();
    setCurrentPage(1);
  }

  return (
    <Container>
      <Container>
        <Row className="mb-2 d-flex align-items-center">
          <Col>
            <h3>PATIENTS</h3>
          </Col>
          <Col>
            <Container className="d-flex justify-content-end">
              <Button
                variant="secondary"
                disabled={loading}
                onClick={() => handleRefetchPatientsClick()}
              >
                {loading ? "Loading ..." : "Reload Patients"}
              </Button>
            </Container>
          </Col>
        </Row>
        <Row>
          <small className="text-muted mb-4">
            select a patient to see details
          </small>
        </Row>
      </Container>
      <Container className="mb-4">
        {loading && <LoadingSpinner />}
        {!loading && (
          <>
            <PatientsList
              patients={currentPatients}
              onPatientClick={onPatientClick}
            />
            <Pagination
              totalItems={patientData.length}
              itemsPerPage={patientsPerPage}
              paginate={(page) => setCurrentPage(page)}
              currentPage={currentPage}
            />
          </>
        )}
      </Container>
    </Container>
  );
};

export default PatientsOverview;
