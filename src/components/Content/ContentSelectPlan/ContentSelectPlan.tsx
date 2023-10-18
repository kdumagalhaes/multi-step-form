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
            <img className={styles['plan-icon']} src={getIcon(plan.planIcon)} alt={`${plan.planName} icon`} />
            <div className='text-content'>
              <p className={styles['plan-name']}>{plan.planName}</p>
              <p className={styles['plan-price']}>{plan.monthPrice}</p>
              <p className={styles['plan-promotion']}>2 months free</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSelectPlan;
