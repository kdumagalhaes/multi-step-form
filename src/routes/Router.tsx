import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import UserInfo from '../pages/UserInfo';
import SelectPlan from '../pages/SelectPlan';
import AddOns from '../pages/AddOns';
import Summary from '../pages/Summary/Summary';
export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<UserInfo />} />
        <Route path='/user-info' element={<UserInfo />} />
        <Route path='/select-plan' element={<SelectPlan />} />
        <Route path='/add-ons' element={<AddOns />} />
        <Route path='/summary' element={<Summary />} />
      </Route>
    </Routes>
  );
}
