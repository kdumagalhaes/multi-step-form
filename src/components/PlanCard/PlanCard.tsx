import { Plan, PlansModes } from '../../constants/plans';
import convertPrice from '../../utils/convertPrice';
import getIcon from '../../utils/getIcon';

import styles from './PlanCard.module.scss';

interface PlanCardProps extends Plan {
  handleSelectPlan: (id: number) => void;
  planMode: PlansModes;
}
const PlanCard = ({
  id,
  monthPrice,
  planName,
  planIcon,
  selected,
  yearPrice,
  planMode,
  handleSelectPlan,
}: PlanCardProps) => {

  const formattedPlanPrice = planMode === PlansModes.MONTHLY 
  ? convertPrice(monthPrice, PlansModes.MONTHLY) 
  : convertPrice(yearPrice, PlansModes.YEARLY)

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
          <p className={styles['plan-price']}>{formattedPlanPrice}</p>
          {planMode === 'yearly' && (
            <p className={styles['plan-promotion']}>2 months free</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
