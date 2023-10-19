import { useState } from 'react';
import { PLANS, Plan } from '../../constants/plans';
import getIcon from '../../utils/getIcon';

import styles from './PlanCard.module.scss';
const PlanCard = () => {
  const [plansList, setPlansList] = useState<Plan[]>(PLANS);

  const handleSelectPlan = (planId: number) => {
    const updatedPlansList = plansList.map((plan) =>
      plan.id === planId
        ? { ...plan, selected: true }
        : { ...plan, selected: false },
    );
    setPlansList(updatedPlansList);
  };

  return (
    <div className={styles.cards}>
      {plansList.map((plan) => {
        return (
          <div
            key={plan.id}
            role='button'
            className={
              plan.selected
                ? `${styles['plan-card']} ${styles.selected}`
                : `${styles['plan-card']}`
            }
            onClick={() => handleSelectPlan(plan.id)}
          >
            <img
              className={styles['plan-icon']}
              src={getIcon(plan.planIcon)}
              alt={`${plan.planName} icon`}
            />
            <div className={styles['text-content']}>
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

export default PlanCard;
