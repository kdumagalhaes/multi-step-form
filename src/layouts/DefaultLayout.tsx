import { Outlet, useLocation } from 'react-router-dom';
import { Container } from '../components/Container';
import { Navigation } from '../components/Navigation';
import Step from '../components/Step';
import { Path } from '../constants/pages';

const DefaultLayout = () => {
  const { pathname } = useLocation();

  return (
    <Container.Root>
      <Container.Left>
        <Navigation.Bar>
          <Step
            stepInfo='Your info'
            stepNumber='1'
            isActive={pathname === Path.USER_INFO || pathname === '/'}
          />
          <Step
            stepInfo='Select plan'
            stepNumber='2'
            isActive={pathname === Path.SELECT_PLAN}
          />
          <Step
            stepInfo='Add-ons'
            stepNumber='3'
            isActive={pathname === Path.ADD_ONS}
          />
          <Step
            stepInfo='Summary'
            stepNumber='4'
            isActive={pathname === Path.SUMMARY}
          />
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
