import { createSlice } from "@reduxjs/toolkit";
import { PlansModes } from "../../constants/plans";
import { localStorageKey } from "../../constants/localStorageKeys";
interface PlanState {
  planMode: PlansModes;
}

const initialState: PlanState = {
  planMode: PlansModes.MONTHLY
};

export const PlanSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setTogglePlan: (state, action) => {
      state.planMode = action.payload;
      localStorage.setItem(localStorageKey.PLAN_MODE, action.payload);
    }
  }
});

export default PlanSlice.reducer;
export const { setTogglePlan } = PlanSlice.actions;

