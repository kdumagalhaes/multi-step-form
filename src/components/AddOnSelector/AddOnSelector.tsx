import { useState } from "react";
import { AddOn } from "../../constants/addOns";
import { PlansModes } from "../../constants/plans";
import styles from "./AddOnSelector.module.scss";

interface AddOnSelectorProps extends AddOn {
  planMode: PlansModes;
  selectAddOn: (id: string) => void
}
const AddOnSelector = ({
  planMode,
  id,
  title,
  description,
  yearPrice,
  monthPrice,
  selectAddOn
}: AddOnSelectorProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAddOnClick = (id: string) => {
    setIsChecked(!isChecked);
    selectAddOn(id);
  };

  return (
    <div
      onClick={() => handleAddOnClick(id)}
      key={id}
      className={isChecked ? `${styles.selector} ${styles.selected}` : `${styles.selector}`}
    >
      <input
        className={styles.input}
        type="checkbox"
        name={title}
        id={title}
        checked={isChecked}
        readOnly
      />
      <div className={styles["text-content"]}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {planMode === "monthly" ? (
        <p className={styles["plan-price"]}>{monthPrice}</p>
      ) : (
        <p className={styles["plan-price"]}>{yearPrice}</p>
      )}
    </div>
  );
};

export default AddOnSelector;
