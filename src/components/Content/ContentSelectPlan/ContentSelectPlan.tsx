import { useState } from 'react';
import Toggle from '../../Toggle';
import PlanCard from '../../PlanCard';

import styles from './ContentSelectPlan.module.scss';
import { PLANS, Plan } from '../../../constants/plans';
const ContentSelectPlan = () => {
  const [isClicked, setIsClicked] = useState(false);
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
    <div className={styles.container}>
      <div className={styles.cards}>
      {plansList.map((plan) => {
        return (
          <PlanCard
            key={plan.id}
            id={plan.id}
            monthPrice={plan.monthPrice}
            planIcon={plan.planIcon}
            planName={plan.planName}
            selected={plan.selected}
            yearPrice={plan.yearPrice}
            handleSelectPlan={handleSelectPlan}
          />
        );
      })}
      </div>
      <Toggle onClick={setIsClicked} toggled={isClicked} />
    </div>
  );
};

export default ContentSelectPlan;
