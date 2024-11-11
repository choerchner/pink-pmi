import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const LoadingSpinner = () => {
  return (
    <Container fluid className="pt-5">
      <Row className="justify-content-center pt-5 mb-4">
        <Spinner />
      </Row>
      <Row className="text-center">
        <h4 className="text-muted">Loading ...</h4>
      </Row>
    </Container>
  );
};

export default LoadingSpinner;
