import styles from './ContentSummary.module.scss';

const ContentSummary = () => {
  return (
    <>
      <div className={styles.summary}>
        <div className={styles['selected-plan']}>
          <div className={styles['plan-title']}>
            <p className={styles['plan-name']}>Arcade (Monthly)</p>
            <a href='#' className={styles['plan-mode']}>
              Change
            </a>
          </div>
          <p className={styles['plan-price']}>$9/mo</p>
        </div>
        <ul className={styles['item-list']}>
          <li className={styles.item}>
            <p className={styles['item-name']}>Online service</p>
            <p className={styles['item-price']}>+$1/mo</p>
          </li>
          <li className={styles.item}>
            <p className={styles['item-name']}>Online service</p>
            <p className={styles['item-price']}>+$1/mo</p>
          </li>
          <li className={styles.item}>
            <p className={styles['item-name']}>Online service</p>
            <p className={styles['item-price']}>+$1/mo</p>
          </li>
        </ul>
      </div>
      <div className={styles.total}>
        <p className={styles['total-mode']}>Total (per month)</p>
        <p className={styles['total-price']}>+$12/mo</p>
      </div>
    </>
  );
};

export default ContentSummary;
