import { Plan, PlansModes } from "../../constants/plans";
import getIcon from "../../utils/getIcon";
import priceConverter from "../../utils/priceConverter";

import styles from "./PlanCard.module.scss";

interface PlanCardProps extends Plan {
  handleSelectPlan: (id: string) => void;
  planMode: PlansModes;

}
const PlanCard = ({
  id,
  monthPrice,
  planName,
  planIcon,
  selected,
  yearPrice,
  planMode,
  handleSelectPlan
}: PlanCardProps) => {

  
  return (
    <div className={styles.container}>
      <div
        role="button"
        className={
          selected ? `${styles["plan-card"]} ${styles.selected}` : `${styles["plan-card"]}`
        }
        onClick={() => handleSelectPlan(id)}
      >
        <img className={styles["plan-icon"]} src={getIcon(planIcon)} alt={`${planName} icon`} />
        <div className={styles["text-content"]}>
          <p data-testid="plan-card-name" className={styles["plan-name"]}>{planName}</p>
          {planMode === "monthly" ? (
            <p 
              data-testid="plan-card-monthly-price" 
              className={styles["plan-price"]}>
               {priceConverter(monthPrice, PlansModes.MONTHLY)}
            </p>
          ) : (
            <p 
              data-testid="plan-card-yearly-price" 
              className={styles["plan-price"]}>
                {priceConverter(yearPrice, PlansModes.YEARLY)}
              </p>
          )}
          {planMode === "yearly" 
          && <p 
              data-testid="plan-card-promotion" 
              className={styles["plan-promotion"]}>
                2 months free
             </p>}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
