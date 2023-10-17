import { PLANS } from '../../../constants/plans';
import getIcon from '../../../utils/getIcon';

import styles from './ContentSelectPlan.module.scss';
const ContentSelectPlan = () => {
  return (
    <div className={styles.container}>
      {PLANS.map((plan) => {
        return (
          <div key={plan.id} role='button' className={styles['plan-card']}>
            <img src={getIcon(plan.planIcon)} alt='arcade icon' />
            <p>{plan.planName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSelectPlan;
