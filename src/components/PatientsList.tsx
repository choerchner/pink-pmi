import { fhirR4 } from "@smile-cdr/fhirts";
import ListGroup from "react-bootstrap/ListGroup";
import { getFullNamePatient } from "../util/PatientUtils";

interface Props {
  patients: fhirR4.Patient[];
  onPatientClick: (patient: fhirR4.Patient) => void;
}

const PatientsList = ({ patients, onPatientClick }: Props) => {
  return (
    <ListGroup className="mb-4">
      {patients.map((patient) => (
        <ListGroup.Item
          action
          key={patient.id}
          onClick={() => {
            onPatientClick(patient);
          }}
        >
          {getFullNamePatient(patient)}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PatientsList;
