import styles from './NavigationNext.module.scss';
const NavigationNext = () => {
  return <button onClick={() => console.info("Next step")} className={styles.next}>Next Step</button>;
};

export default NavigationNext;
