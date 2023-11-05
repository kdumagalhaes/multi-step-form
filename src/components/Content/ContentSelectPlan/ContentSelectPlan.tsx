import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { setSelectedPlan } from '../../../redux/reducers/plan';
import { PLANS, Plan, PlansModes } from '../../../constants/plans';
import Toggle from '../../Toggle';
import PlanCard from '../../PlanCard';

import styles from './ContentSelectPlan.module.scss';
const ContentSelectPlan = () => {
  const dispatch = useAppDispatch();
  const selectedPlanMode = useAppSelector((state) => state.plan.planMode);

  const selectedPlan = localStorage.getItem('selectedPlan');
  const planMode = localStorage.getItem('planMode') as PlansModes;

  const formattedSelectedPlan = selectedPlan ? JSON.parse(selectedPlan) : {};

  const updatedPlansList = PLANS.map((plan) => {
    if (plan.id === formattedSelectedPlan.id) {
      return { ...plan, selected: formattedSelectedPlan.selected };
    }
    return plan;
  });

  const [plansList, setPlansList] = useState<Plan[]>(updatedPlansList);
  const [isClicked, setIsClicked] = useState(planMode === 'yearly');

  const handleSelectPlan = (planId: number) => {
    const updatedPlansList = plansList.map((plan) =>
      plan.id === planId
        ? { ...plan, selected: true }
        : { ...plan, selected: false },
    );
    setPlansList(updatedPlansList);
    dispatch(setSelectedPlan(updatedPlansList[planId - 1]));
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
              planMode={selectedPlanMode}
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
