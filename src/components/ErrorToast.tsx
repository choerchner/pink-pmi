import { useState } from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

interface Props {
  errorMessage?: string;
}

const ErrorToast = ({ errorMessage }: Props) => {
  const [showToast, setShowToast] = useState(true);

  const toggleShow = () => setShowToast(!setShowToast);
  return (
    <ToastContainer
      className="p-3"
      position="bottom-center"
      style={{ zIndex: 1 }}
    >
      <Toast onClose={toggleShow} show={showToast} animation bg="danger">
        <Toast.Header>
          <strong className="me-auto">An Error occured</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{errorMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ErrorToast;
