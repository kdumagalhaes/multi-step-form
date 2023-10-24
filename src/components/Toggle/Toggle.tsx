import { useEffect, useState } from 'react';
import styles from './Toggle.module.scss';
import { useAppDispatch } from '../../redux/store';
import { setTogglePlan } from '../../redux/reducers/plan';

interface ToggleProps {
  onClick: (isToggled: boolean) => void;
  toggled: boolean;
}
const Toggle = ({ onClick, toggled }: ToggleProps) => {
  const dispatch = useAppDispatch()
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
    onClick(!isToggled);
  };

  useEffect(() => {
     isToggled 
     ? dispatch(setTogglePlan("yearly")) 
     : dispatch(setTogglePlan("monthly"))
  }, [dispatch, isToggled])

  return (
    <div className={styles.toggle}>
      <p
        className={
          isToggled ? `${styles.plans} ${styles.selected}` : `${styles.plans}`
        }
      >
        Monthly
      </p>
      <label>
        <input
          type='checkbox'
          defaultChecked={isToggled}
          onChange={handleToggleClick}
        />
        <span />
      </label>
      <p
        className={
          isToggled ? `${styles.plans}` : `${styles.plans} ${styles.selected}`
        }
      >
        Yearly
      </p>
    </div>
  );
};

export default Toggle;
