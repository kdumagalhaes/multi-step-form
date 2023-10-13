import styles from "./ContentSelectPlan.module.scss"
const ContentSelectPlan = () => {
  return (
    <div className={styles.container}>
    <div role="button" className={styles['plan-card']}>select plan</div>
    <div role="button" className={styles['plan-card']}>select plan</div>
    <div role="button" className={styles['plan-card']}>select plan</div>
    </div>
  );
};

export default ContentSelectPlan;
