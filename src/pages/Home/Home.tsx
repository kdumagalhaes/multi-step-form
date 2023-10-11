import { Container } from '../../components/Container';
import Title from '../../components/Title';

const Home = () => {
  return (
    <Container.Right>
      <Title
        primaryTitle='Personal info'
        secondaryTitle='Please provide name, email address, and phone number.'
      />
    </Container.Right>
  );
};

export default Home;
