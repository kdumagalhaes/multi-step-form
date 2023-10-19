import { useState } from 'react';
import styles from './Toggle.module.scss';

interface ToggleProps {
  onClick: (isToggled: boolean) => void;
  toggled: boolean;
}
const Toggle = ({ onClick, toggled }: ToggleProps) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
    onClick(!isToggled);
  };

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
          onClick={handleToggleClick}
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
