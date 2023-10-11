import { Container } from "../../components/Container"
import { Navigation } from "../../components/Navigation"
import Title from "../../components/Title"

const Home = () => {
  return (
    <Container.Right>
      <Title primaryTitle="Personal info" secondaryTitle="Please provide name, email address, and phone number." />
      <Navigation.Buttons>
        <Navigation.Back />
        <Navigation.Next />
      </Navigation.Buttons>
    </Container.Right>
  )
}

export default Home