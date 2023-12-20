import { ReactNode } from "react";
import styles from "./NavigationButtons.module.scss";

interface NavigationButtonsProps {
  children: ReactNode;
}

const NavigationButtons = ({ children }: NavigationButtonsProps) => {
  return <div className={styles.buttons}>{children}</div>;
};

export default NavigationButtons;
