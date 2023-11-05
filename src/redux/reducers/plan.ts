import { createSlice } from '@reduxjs/toolkit';
import { PlansModes, Plan, PlansNames } from '../../constants/plans';
import { AddOns } from '../../constants/addOns';

interface PlanState {
  planMode: PlansModes;
  selectedPlan: Plan;
  selectedAddOns: AddOns[];
}

const initialState: PlanState = {
  planMode: PlansModes.MONTHLY,
  selectedPlan: {
    id: 1,
    planName: PlansNames.ARCADE,
    planIcon: PlansNames.ARCADE,
    yearPrice: 90,
    monthPrice: 9,
    selected: true,
  },
  selectedAddOns: [],
};

export const PlanSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setTogglePlan: (state, action) => {
      state.planMode = action.payload;
      localStorage.setItem('planMode', action.payload);
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = { ...action.payload };
      localStorage.setItem('selectedPlan', JSON.stringify(action.payload));
    },
    setSelectedAddOns: (state, action) => {
      state.selectedAddOns = action.payload;
      localStorage.setItem('selectedAddOns', action.payload);
    },
  },
});

export default PlanSlice.reducer;
export const { setTogglePlan, setSelectedPlan } = PlanSlice.actions;
