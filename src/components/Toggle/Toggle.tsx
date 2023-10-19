import { useState } from 'react';
import styles from './Toggle.module.scss';

interface ToggleProps {
  onClick: (isToggled: boolean) => void;
  toggled: boolean;
}
const Toggle = ({ onClick, toggled }: ToggleProps) => {
  const [isToggled, toggle] = useState(toggled);

  const handleToggleClick = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className={styles.toggle}>
      <label>
        <input
          type='checkbox'
          defaultChecked={isToggled}
          onClick={handleToggleClick}
        />
        <span />
      </label>
    </div>
  );
};

export default Toggle;
