import { PLANS } from '../../../constants/plans';
import getIcon from '../../../utils/getIcon';

import styles from './ContentSelectPlan.module.scss';
const ContentSelectPlan = () => {
  return (
    <div className={styles.container}>
      {PLANS.map((plan) => {
        return (
          <div
            key={plan.id}
            role='button'
            className={
              plan.selected
                ? `${styles['plan-card']} ${styles.selected}`
                : `${styles['plan-card']}`
            }
          >
            <img src={getIcon(plan.planIcon)} alt={`${plan.planName} icon`} />
            <p>{plan.planName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSelectPlan;
