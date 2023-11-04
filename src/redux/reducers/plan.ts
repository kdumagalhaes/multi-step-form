import { createSlice } from '@reduxjs/toolkit';
import { PlansModes } from '../../constants/plans';
interface PlanState {
  planMode: PlansModes;
}

const initialState: PlanState = {
  planMode: PlansModes.MONTHLY,
};

export const PlanSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setTogglePlan: (state, action) => {
      state.planMode = action.payload;
      localStorage.setItem('planMode', action.payload);
    },
  },
});

export default PlanSlice.reducer;
export const { setTogglePlan } = PlanSlice.actions;
