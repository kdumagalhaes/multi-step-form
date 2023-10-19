import { useState } from 'react';
import PlanCard from '../../PlanCard/PlanCard';
import Toggle from '../../Toggle';

import styles from './ContentSelectPlan.module.scss';
const ContentSelectPlan = () => {
  const [isClicked, setIsClicked] = useState(false)
  
  return (
    <div className={styles.container}>
      <PlanCard />
      <Toggle onClick={setIsClicked} toggled={isClicked} />
    </div>
  );
};

export default ContentSelectPlan;
