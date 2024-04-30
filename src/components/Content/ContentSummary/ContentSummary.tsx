import { useAppDispatch } from "../../../redux/store";
import priceConverter from "../../../utils/priceConverter";
import { PlansModes } from "../../../constants/plans";
import { setTogglePlan } from "../../../redux/reducers/plan";


import styles from "./ContentSummary.module.scss";
import useCheckout from "../../../hooks/useCheckout";


const ContentSummary = () => {
  const dispatch = useAppDispatch();
  const {orderTotal, selectedPlan, addOnsList, planInfo} = useCheckout();
  
  const planModeName = `${selectedPlan.charAt(0).toUpperCase()}${selectedPlan.slice(1)}`;

  const handleChangePlanModeClick = () => {
    selectedPlan === PlansModes.MONTHLY
      ? dispatch(setTogglePlan(PlansModes.YEARLY))
      : dispatch(setTogglePlan(PlansModes.MONTHLY));
  };

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
        <p className={styles["total-price"]}>{priceConverter(orderTotal, selectedPlan)}</p>
      </div>
    </>
  );
};

export default ContentSummary;
