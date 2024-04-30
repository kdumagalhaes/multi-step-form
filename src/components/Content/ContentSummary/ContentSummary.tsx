import { useEffect, useState } from "react";
import { localStorageKey } from "../../../constants/localStorageKeys";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import priceConverter from "../../../utils/priceConverter";
import { PlansModes, PlansNames } from "../../../constants/plans";
import { setTogglePlan } from "../../../redux/reducers/plan";
import { ADD_ONS } from "../../../constants/addOns";
import { PLANS } from "../../../constants/plans";

import styles from "./ContentSummary.module.scss";

interface SelectedAddOns {
  id: string
  price: number,
  title: string
}

interface PlanInfo {
  planName: PlansNames,
  planPrice: number
}

const ContentSummary = () => {
  const dispatch = useAppDispatch();
  const selectedPlan = useAppSelector((state) => state.plan.planMode);
  const [planInfo, setPlanInfo] = useState<PlanInfo>({
    planName: PlansNames.ADVANCED,
    planPrice: 0
  });
  const [addOnsList, setAddOnsList] = useState<SelectedAddOns[] | []>([]);
  const [total, setTotal] = useState(0);

  const planModeName = `${selectedPlan.charAt(0).toUpperCase()}${selectedPlan.slice(1)}`;

  const handleChangePlanModeClick = () => {
    selectedPlan === PlansModes.MONTHLY
      ? dispatch(setTogglePlan(PlansModes.YEARLY))
      : dispatch(setTogglePlan(PlansModes.MONTHLY));
  };

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

  return (
    <>
      <div className={styles.summary}>
        <div className={styles["selected-plan"]}>
          <div className={styles["plan-title"]}>
            <p className={styles["plan-name"]}>{`${planInfo.planName} (${planModeName})`}</p>
            <a onClick={handleChangePlanModeClick} role="button" className={styles["plan-mode"]}>
              Change
            </a>
          </div>
          <p className={styles["plan-price"]}>{priceConverter(planInfo.planPrice, selectedPlan)}</p>
        </div>

        <ul className={styles["item-list"]}>
          {
            addOnsList?.map((addOn) => {
              return (
              <li key={addOn.id} className={styles.item}>
                <p className={styles["item-name"]}>{addOn.title}</p>
                <p className={styles["item-price"]}>+{priceConverter(addOn.price, selectedPlan)}</p>
              </li>
              );
            })
          }
        </ul>
      </div>
      <div className={styles.total}>
        <p className={styles["total-mode"]}>Total (per month)</p>
        <p className={styles["total-price"]}>{priceConverter(total, selectedPlan)}</p>
      </div>
    </>
  );
};

export default ContentSummary;
