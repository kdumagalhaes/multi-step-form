import styles from './NavigationBack.module.scss';
const NavigationBack = () => {
  return (
    <a onClick={() => console.info("Go back")} className={styles.back} href='#'>
      Go Back
    </a>
  );
};

export default NavigationBack;
