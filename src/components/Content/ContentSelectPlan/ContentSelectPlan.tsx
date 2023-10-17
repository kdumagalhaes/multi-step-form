import IconAdvanced from '../../../assets/icons/icon-advanced.svg';
import IconArcade from '../../../assets/icons/icon-arcade.svg';
import IconPro from '../../../assets/icons/icon-pro.svg';

import styles from './ContentSelectPlan.module.scss';
const ContentSelectPlan = () => {
  return (
    <div className={styles.container}>
      <div role='button' className={styles['plan-card']}>
        <img src={IconArcade} alt='arcade icon' />
        select plan
      </div>
      <div role='button' className={styles['plan-card']}>
        <img src={IconAdvanced} alt='advanced icon' />
        select plan
      </div>
      <div role='button' className={styles['plan-card']}>
        <img src={IconPro} alt='pro icon' />
        select plan
      </div>
    </div>
  );
};

export default ContentSelectPlan;
