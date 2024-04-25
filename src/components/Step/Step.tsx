import { memo } from "react";
import styles from "./Step.module.scss";

interface StepProps {
  stepNumber: string;
  stepInfo: string;
  isActive?: boolean;
}
const Step = memo(({ stepNumber, stepInfo, isActive = false }: StepProps) => {
  return (
    <div className={styles.step}>
      <div 
        data-testid="step-number" 
        className={isActive ? 
          `${styles.number} ${styles["number-active"]}` 
          : styles.number}
      >
        {stepNumber}
      </div>
      <div className={styles["text-container"]}>
        <p data-testid="step-indication" className={styles.indication}>step {stepNumber}</p>
        <p data-testid="step-info" className={styles.info}>{stepInfo}</p>
      </div>
    </div>
  );
});

export default Step;
