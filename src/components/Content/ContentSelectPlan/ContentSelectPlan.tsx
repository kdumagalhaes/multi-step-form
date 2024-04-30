import { useState } from "react";
import Toggle from "../../Toggle";
import PlanCard from "../../PlanCard";
import { useAppSelector } from "../../../redux/store";
import usePlansList from "../../../hooks/index";
import { localStorageKey } from "../../../constants/localStorageKeys";

import styles from "./ContentSelectPlan.module.scss";

const ContentSelectPlan = () => {
  const planMode = localStorage.getItem(localStorageKey.PLAN_MODE);
  const selectedPlanMode = useAppSelector((state) => state.plan.planMode);
  const {plansList, updatePlansList} = usePlansList();
  const [isClicked, setIsClicked] = useState(planMode === "yearly");

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
              handleSelectPlan={() => updatePlansList(plan.id)}
            />
          );
        })}
      </div>
      <Toggle onClick={setIsClicked} toggled={isClicked} />
    </div>
  );
};

export default ContentSelectPlan;
