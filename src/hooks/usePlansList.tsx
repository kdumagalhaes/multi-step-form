import { useCallback, useEffect, useState } from "react";
import { localStorageKey } from "../constants/localStorageKeys";
import { DEFAULT_SELECTED_PLAN_TYPE_ID, PLANS, Plan } from "../constants/plans";

const usePlansList = () => {
  const currentSelectedPlanID = localStorage.getItem(localStorageKey.PLAN_TYPE_ID);
  const [plansList, setPlansList] = useState<Plan[]>(PLANS);

  const updatePlansList = useCallback((planID: string) => {
    const updatedPlansList = plansList.map((plan) => 
    plan.id === planID ? { ...plan, selected: true } : { ...plan, selected: false });
    setPlansList(updatedPlansList);
    localStorage.setItem(localStorageKey.PLAN_TYPE_ID, planID);
  }, [plansList]);

  useEffect(() => {
    currentSelectedPlanID 
    ? updatePlansList(currentSelectedPlanID)
    : updatePlansList(DEFAULT_SELECTED_PLAN_TYPE_ID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSelectedPlanID]);

  return {
    updatePlansList,
    plansList
  };
};

export default usePlansList;