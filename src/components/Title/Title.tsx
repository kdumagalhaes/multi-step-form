import styles from "./Title.module.scss";

interface TitleProps {
  primaryTitle: string;
  secondaryTitle: string;
}
const Title = ({ primaryTitle, secondaryTitle }: TitleProps) => {
  return (
    <div className={styles.title}>
      <h1 className={styles.title__primary}>{primaryTitle}</h1>
      <h2 className={styles.title__secondary}>{secondaryTitle}</h2>
    </div>
  );
};

export default Title;
