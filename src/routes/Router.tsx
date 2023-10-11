import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import UserInfo from '../pages/UserInfo';
import SelectPlan from '../pages/SelectPlan';
import AddOns from '../pages/AddOns';
import Summary from '../pages/Summary/Summary';
import { Path } from '../constants/pages';
export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<UserInfo />} />
        <Route path={Path.USER_INFO} element={<UserInfo />} />
        <Route path={Path.SELECT_PLAN} element={<SelectPlan />} />
        <Route path={Path.ADD_ONS} element={<AddOns />} />
        <Route path={Path.SUMMARY} element={<Summary />} />
      </Route>
    </Routes>
  );
}
