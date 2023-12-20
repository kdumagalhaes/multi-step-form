import { ReactNode } from "react";
import styles from "./NavigationBar.module.scss";

interface NavigationBarProps {
  children: ReactNode;
}
const NavigationBar = ({ children }: NavigationBarProps) => {
  return <nav className={styles.bar}>{children}</nav>;
};

export default NavigationBar;
