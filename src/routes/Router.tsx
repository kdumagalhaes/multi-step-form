import { Route, Routes, useNavigate } from "react-router-dom";
import { Path } from "../constants/pages";
import { useAppSelector } from "../redux/store";
import { useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import UserInfo from "../pages/UserInfo";
import SelectPlan from "../pages/SelectPlan";
import AddOns from "../pages/AddOns";
import Summary from "../pages/Summary/Summary";
import OrderPlaced from "../pages/OrderPlaced/OrderPlaced";
export function Router() {
  const isUserInvalid = useAppSelector((state) => state.validation.isButtonDisabled);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserInvalid) {
      navigate("/", { replace: true });
    }
  }, [isUserInvalid, navigate]);

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<UserInfo />} />
        <Route path={Path.USER_INFO} element={<UserInfo />} />
        <Route path={Path.SELECT_PLAN} element={<SelectPlan />} />
        <Route path={Path.ADD_ONS} element={<AddOns />} />
        <Route path={Path.SUMMARY} element={<Summary />} />
        <Route path={Path.ORDER_PLACED} element={<OrderPlaced />} />
      </Route>
    </Routes>
  );
}
