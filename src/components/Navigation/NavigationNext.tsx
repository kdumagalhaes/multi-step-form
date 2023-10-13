import { useNavigate, useLocation } from 'react-router-dom';
import { Path } from '../../constants/pages';
import styles from './NavigationNext.module.scss';

interface NextPathMap {
  [key: string]: Path | string;
}
const NavigationNext = () => {
  const { pathname } = useLocation();
  const navigateTo = useNavigate();

  const nextPathMap: NextPathMap = {
    '/': Path.SELECT_PLAN,
    '/add-ons': Path.SUMMARY,
    '/select-plan': Path.ADD_ONS,
    '/summary': '/',
    '/user-info': Path.SELECT_PLAN,
  };

  return (
    <button
      onClick={() => navigateTo(nextPathMap[pathname])}
      className={styles.next}
    >
      Next Step
    </button>
  );
};

export default NavigationNext;
