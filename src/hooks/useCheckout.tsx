import { useCallback, useEffect, useState } from "react";
import { ADD_ONS } from "../constants/addOns";
import { PLANS, PlansModes, PlansNames } from "../constants/plans";
import { localStorageKey } from "../constants/localStorageKeys";
import { useAppSelector } from "../redux/store";

interface SelectedAddOns {
  id: string
  price: number,
  title: string
}

interface PlanInfo {
  planName: PlansNames,
  planPrice: number
}
const useCheckout = () => {
  const selectedPlan = useAppSelector((state) => state.plan.planMode);

  const [planInfo, setPlanInfo] = useState<PlanInfo>({
    planName: PlansNames.ADVANCED,
    planPrice: 0
  });
  const [addOnsList, setAddOnsList] = useState<SelectedAddOns[] | []>([]);
  const [orderTotal, setOrderTotal] = useState(0);

  const handleCheckout = useCallback((planTypeID: string, addOnsIDsList: string[]) => {
    const selectedPlanDetails = PLANS.find((plan) => plan?.id === planTypeID);

    if (!selectedPlanDetails) {
      console.error("Selected plan details not found");
      return;
    }

    const filteredAddOns = ADD_ONS.filter((addOn) => addOnsIDsList.includes(addOn.id));

    let planPrice;
    switch (selectedPlan) {
      case PlansModes.MONTHLY:
        planPrice = selectedPlanDetails.monthPrice;
        break;
      case PlansModes.YEARLY:
        planPrice = selectedPlanDetails.yearPrice;
        break;
      default:
        console.error("Invalid plan mode");
        return;
    }

    setPlanInfo({
      planPrice,
      planName: selectedPlanDetails.planName as PlansNames
    });

    setAddOnsList(
      filteredAddOns.map(({ id, monthPrice, yearPrice, title }) => {
        const price = selectedPlan === PlansModes.MONTHLY ? monthPrice : yearPrice;
        return { id, price, title };
      })
    );
  }, [selectedPlan]);
  

  useEffect(() => {
    const storedPlanID = localStorage.getItem(localStorageKey.PLAN_TYPE_ID) as string;
    const currentSelectedAddOnsIDs = localStorage.getItem(localStorageKey.ADD_ONS);
    const storedAddOnsIDs = currentSelectedAddOnsIDs ? JSON.parse(currentSelectedAddOnsIDs) : [];

    handleCheckout(storedPlanID, storedAddOnsIDs);
  }, [handleCheckout]);

  useEffect(() => {
    const addOnsTotal = addOnsList.reduce((acc, addOn) => acc + addOn.price, 0);
    setOrderTotal(planInfo.planPrice + addOnsTotal);
  }, [planInfo.planPrice, addOnsList]);

  return {
    orderTotal,
    selectedPlan,
    addOnsList,
    planInfo
  };
};

export default useCheckout;