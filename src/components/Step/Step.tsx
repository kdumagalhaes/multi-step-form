import styles from './Step.module.scss';

interface StepProps {
  stepNumber: string;
  stepInfo: string;
  isActive?: boolean;
}
const Step = ({ stepNumber, stepInfo, isActive = false }: StepProps) => {
  return (
    <div className={styles.step}>
      <div
        className={
          isActive
            ? `${styles.number} ${styles['number-active']}`
            : styles.number
        }
      >
        {stepNumber}
      </div>
      <div className={styles['text-container']}>
        <p className={styles.indication}>step {stepNumber}</p>
        <p className={styles.info}>{stepInfo}</p>
      </div>
    </div>
  );
};

export default Step;
