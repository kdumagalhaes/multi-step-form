import { Plan } from '../../constants/plans';
import getIcon from '../../utils/getIcon';

import styles from './PlanCard.module.scss';

interface PlanCardProps extends Plan {
  handleSelectPlan: (id: number) => void
}
const PlanCard = ({
  id,
  monthPrice,
  planName,
  planIcon,
  selected,
  yearPrice,
  handleSelectPlan
}: PlanCardProps) => {
  return (
    <div className={styles.container}>
      <div
        role='button'
        className={
          selected
            ? `${styles['plan-card']} ${styles.selected}`
            : `${styles['plan-card']}`
        }
        onClick={() => handleSelectPlan(id)}
      >
        <img
          className={styles['plan-icon']}
          src={getIcon(planIcon)}
          alt={`${planName} icon`}
        />
        <div className={styles['text-content']}>
          <p className={styles['plan-name']}>{planName}</p>
          <p className={styles['plan-price']}>{monthPrice}</p>
          <p className={styles['plan-price']}>{yearPrice}</p>
          <p className={styles['plan-promotion']}>2 months free</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
