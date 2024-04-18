import Confetti from "react-confetti";
import ThankYouIcon from "../../../assets/icons/icon-thank-you.svg";
import styles from "./ContentOrderPlaced.module.scss";
import { useEffect } from "react";
const ContentOrderPlaced = () => {

  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  return (
    <>
      <Confetti recycle={false}/>
      <div className={styles["order-placed"]}>
        <img className={styles["icon-thank-you"]} src={ThankYouIcon} alt="Red check icon" />
        <h2 className={styles.title}>Thank you!</h2>
        <p className={styles.text}>
          Thanks for confirming your subscription! We hope you have fun using our plaftorm. If you
          ever need support, please feel free to email us at support@loremgaming.com
        </p>
      </div>
    </>
  );
};

export default ContentOrderPlaced;
