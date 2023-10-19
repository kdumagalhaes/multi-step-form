import PlanCard from '../../PlanCard/PlanCard';
import Toggle from '../../Toggle';

import styles from './ContentSelectPlan.module.scss';
const ContentSelectPlan = () => {
  return (
    <div className={styles.container}>
      <PlanCard />
      <Toggle />
    </div>
  );
};

export default ContentSelectPlan;
