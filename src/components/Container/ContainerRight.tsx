import { ReactNode } from 'react';
import styles from './ContainerRight.module.scss';

interface ContainerRightProps {
  children: ReactNode;
}
const ContainerRight = ({ children }: ContainerRightProps) => {
  return <div className={styles['container-right']}>{children}</div>;
};

export default ContainerRight;
