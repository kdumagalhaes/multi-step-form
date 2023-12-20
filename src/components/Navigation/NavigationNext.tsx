import { useNavigate, useLocation } from "react-router-dom";
import { Path } from "../../constants/pages";
import { useAppSelector } from "../../redux/store";
import styles from "./NavigationNext.module.scss";

interface NextPathMap {
  [key: string]: Path | string;
}
const NavigationNext = () => {
  const isButtonDisabled = useAppSelector((state) => state.validation.isButtonDisabled);
  const { pathname } = useLocation();
  const navigateTo = useNavigate();

  const nextPathMap: NextPathMap = {
    "/": Path.SELECT_PLAN,
    "/add-ons": Path.SUMMARY,
    "/select-plan": Path.ADD_ONS,
    "/summary": Path.ORDER_PLACED,
    "/user-info": Path.SELECT_PLAN
  };

  return (
    <button
      onClick={() => navigateTo(nextPathMap[pathname])}
      className={isButtonDisabled ? `${styles.next} ${styles.disabled}` : styles.next}
      disabled={isButtonDisabled}
    >
      {pathname === "/summary" ? "Confirm" : "Next Step"}
    </button>
  );
};

export default NavigationNext;
