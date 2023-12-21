import { useState } from "react";
import Toggle from "../../Toggle";
import PlanCard from "../../PlanCard";
import { PLANS, Plan } from "../../../constants/plans";
import { useAppSelector } from "../../../redux/store";
import { localStorageKey } from "../../../constants/localStorageKeys";

import styles from "./ContentSelectPlan.module.scss";

const ContentSelectPlan = () => {
  const selectedPlanMode = useAppSelector((state) => state.plan.planMode);

  const planMode = localStorage.getItem(localStorageKey.PLAN_MODE);

  const [plansList, setPlansList] = useState<Plan[]>(PLANS);
  const [isClicked, setIsClicked] = useState(planMode === "yearly");

  const handleSelectPlan = (planID: string) => {
    const updatedPlansList = plansList.map((plan) =>
      plan.id === planID  ? { ...plan, selected: true } : { ...plan, selected: false }
    );
    setPlansList(updatedPlansList);
    localStorage.setItem(localStorageKey.PLAN_TYPE_ID, planID);
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
              handleSelectPlan={() => handleSelectPlan(plan.id)}
            />
          );
        })}
      </div>
      <Toggle onClick={setIsClicked} toggled={isClicked} />
    </div>
  );
};

export default ContentSelectPlan;
