import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container';
import { Navigation } from '../components/Navigation';
import Step from '../components/Step';

const DefaultLayout = () => {
  return (
    <Container.Root>
      <Container.Left>
        <Navigation.Bar>
          <Step stepInfo='Your info' stepNumber='1' isActive />
          <Step stepInfo='Select plan' stepNumber='2' isActive={false} />
          <Step stepInfo='Add-ons' stepNumber='3' isActive={false} />
          <Step stepInfo='Summary' stepNumber='4' isActive={false} />
        </Navigation.Bar>
      </Container.Left>
    <Container.Right>
      <Outlet />
      <Navigation.Buttons>
        <Navigation.Back />
        <Navigation.Next />
      </Navigation.Buttons>
      </Container.Right>
    </Container.Root>
  );
};

export default DefaultLayout;