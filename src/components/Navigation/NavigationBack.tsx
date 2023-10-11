import { useLocation, useNavigate } from 'react-router-dom';
import styles from './NavigationBack.module.scss';
import { Path } from '../../constants/pages';
const NavigationBack = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <a
      onClick={() => navigate(-1)}
      className={
        pathname === '/' || pathname === Path.USER_INFO
          ? styles.hidden
          : styles.back
      }
      href='#'
    >
      Go Back
    </a>
  );
};

export default NavigationBack;
