import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styles from "./NavigationButtons.module.scss";
import { Path } from "../../constants/pages";

interface NavigationButtonsProps {
  children: ReactNode;
}

const NavigationButtons = ({ children }: NavigationButtonsProps) => {
  const { pathname } = useLocation();

  return (
    pathname === Path.ORDER_PLACED 
    ? null 
    : <div className={styles.buttons}>{children}</div>
  );
};

export default NavigationButtons;
