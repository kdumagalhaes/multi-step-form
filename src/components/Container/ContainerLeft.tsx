import { ReactNode } from "react";

interface ContainerLeftProps {
  children: ReactNode;
}
const ContainerLeft = ({ children }: ContainerLeftProps) => {
  return <div>{children}</div>;
};

export default ContainerLeft;
