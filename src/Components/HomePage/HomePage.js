import { Container, Button } from 'react-bootstrap';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Container>
        <div className="header">
          <h1>Welcome to HomeSkills</h1>
          <p>Find and hire the best home service professionals near you.</p>
          <Button variant="primary">Get Started</Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;