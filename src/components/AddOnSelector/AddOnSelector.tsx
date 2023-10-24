import { useState } from 'react';
import { AddOns } from '../../constants/addOns';
import { PlansModes } from '../../constants/plans';
import styles from './AddOnSelector.module.scss';

interface AddOnSelectorProps extends AddOns {
  planMode: PlansModes;
}
const AddOnSelector = ({
  planMode,
  id,
  title,
  description,
  yearPrice,
  monthPrice,
}: AddOnSelectorProps) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div key={id} className={styles.selector}>
      <input onClick={() => setIsChecked(!isChecked)} type='checkbox' name={title} id={title} checked={isChecked} />
      <h3>{title}</h3>
      <p>{description}</p>
      {planMode === 'monthly' ? (
        <p className={styles['plan-price']}>{monthPrice}</p>
      ) : (
        <p className={styles['plan-price']}>{yearPrice}</p>
      )}
    </div>
  );
};

export default AddOnSelector;
