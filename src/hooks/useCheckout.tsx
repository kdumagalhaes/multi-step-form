import { useEffect, useState } from "react";
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
  const [total, setTotal] = useState(0);

  const handleCheckout = (planTypeID: string, addOnsIDsList: string[]) => {
    const filteredAddOns = ADD_ONS.filter((addOn) => addOnsIDsList.includes(addOn.id));

    switch (selectedPlan) {
      case PlansModes.MONTHLY:
        setPlanInfo({
          planPrice: PLANS.find((plan) => plan?.id === planTypeID)?.monthPrice as number,
          planName: PLANS.find((plan) => plan?.id === planTypeID)?.planName as PlansNames
        });
        setAddOnsList(filteredAddOns.map(({ id, monthPrice, title }) => {
          return { id, price: monthPrice, title };
        }));
        break;
      case PlansModes.YEARLY:
        setPlanInfo({
          planPrice: PLANS.find((plan) => plan?.id === planTypeID)?.yearPrice as number,
          planName: PLANS.find((plan) => plan?.id === planTypeID)?.planName as PlansNames
        });
        setAddOnsList(filteredAddOns.map(({ id, yearPrice, title }) => {
          return { id, price: yearPrice, title };
        }));
      break;
      default:
        break;
    }
  };

  useEffect(() => {
    const storedPlanID = localStorage.getItem(localStorageKey.PLAN_TYPE_ID) as string;
    const currentSelectedAddOnsIDs = localStorage.getItem(localStorageKey.ADD_ONS);
    const storedAddOnsIDs = currentSelectedAddOnsIDs 
    ? JSON.parse(currentSelectedAddOnsIDs) 
    : [];

    handleCheckout(storedPlanID, storedAddOnsIDs);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan]);

  useEffect(() => {
    const addOnsTotal = addOnsList.reduce((acc, addOn) => acc + addOn.price, 0);
    setTotal(planInfo.planPrice + addOnsTotal);
  }, [planInfo.planPrice, addOnsList]);

  return {
    orderTotal: total,
    selectedPlan,
    addOnsList,
    planInfo
  };
};

export default useCheckout;