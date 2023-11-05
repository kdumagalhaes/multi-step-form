import { useState } from 'react';
import Toggle from '../../Toggle';
import PlanCard from '../../PlanCard';
import { PLANS, Plan, PlansModes } from '../../../constants/plans';
import { useAppSelector } from '../../../redux/store';

import styles from './ContentSelectPlan.module.scss';
const ContentSelectPlan = () => {
  const selectedPlan = useAppSelector((state) => state.plan.planMode);

  const planMode = localStorage.getItem('planMode') as PlansModes;
  const [plansList, setPlansList] = useState<Plan[]>(PLANS);
  const [isClicked, setIsClicked] = useState(planMode === 'yearly');

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
              planMode={selectedPlan}
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
