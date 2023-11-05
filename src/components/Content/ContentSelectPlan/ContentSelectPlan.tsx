import { useState } from 'react';
import Toggle from '../../Toggle';
import PlanCard from '../../PlanCard';
import { PLANS, Plan, PlansModes } from '../../../constants/plans';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import styles from './ContentSelectPlan.module.scss';
import { setSelectedPlan } from '../../../redux/reducers/plan';
const ContentSelectPlan = () => {
  const dispatch = useAppDispatch();
  const selectedPlanMode = useAppSelector((state) => state.plan.planMode);

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
