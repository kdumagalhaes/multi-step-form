import { ReactNode } from "react";
import styles from "./ContainerRoot.module.scss";

interface ContainerRootProps {
  children: ReactNode;
}
const ContainerRoot = ({ children }: ContainerRootProps) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};

export default ContainerRoot;
