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
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      onClick={() => setIsChecked(!isChecked)}
      key={id}
      className={
        isChecked
          ? `${styles.selector} ${styles.selected}`
          : `${styles.selector}`
      }
    >
      <input
        className={styles.input}
        type='checkbox'
        name={title}
        id={title}
        checked={isChecked}
      />
      <div className={styles['text-content']}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {planMode === 'monthly' ? (
        <p className={styles['plan-price']}>{monthPrice}</p>
      ) : (
        <p className={styles['plan-price']}>{yearPrice}</p>
      )}
    </div>
  );
};

export default AddOnSelector;
