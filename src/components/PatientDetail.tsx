import { fhirR4 } from "@smile-cdr/fhirts";
import {
  getAddress,
  getBirthDate,
  getFullNamePatient,
  getGender,
} from "../util/PatientUtils";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
  patientDetailData?: fhirR4.Patient;
  onPatientDetailCloseClick: () => void;
}

const PatientDetail = ({
  patientDetailData,
  onPatientDetailCloseClick,
}: Props) => {
  return (
    <Container>
      {patientDetailData && (
        <>
          <Container>
            <Row className="mb-2 d-flex align-items-center">
              <Col>
                <h3>DETAILS</h3>
              </Col>
              <Col>
                <Container className="d-flex justify-content-end">
                  <Button onClick={onPatientDetailCloseClick}>
                    Close Details
                  </Button>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container>
            <Card className="p-3">
              <Container>
                <Row>
                  <h4>{getFullNamePatient(patientDetailData)}</h4>
                </Row>
                <Row>
                  <hr></hr>
                </Row>
                <Row>
                  <Col className="col-sm-4">
                    <strong>Gender:</strong>
                  </Col>
                  <Col>{getGender(patientDetailData)}</Col>
                </Row>
                <Row>
                  <Col className="col-sm-4">
                    <strong>Birth date:</strong>
                  </Col>
                  <Col>{getBirthDate(patientDetailData)}</Col>
                </Row>
                <Row>
                  <Col className="col-sm-4">
                    <strong>Address:</strong>
                  </Col>
                  <Col>{getAddress(patientDetailData)}</Col>
                </Row>
              </Container>
            </Card>
          </Container>
        </>
      )}
    </Container>
  );
};

export default PatientDetail;
