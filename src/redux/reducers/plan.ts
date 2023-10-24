import { createSlice } from "@reduxjs/toolkit";

interface PlanState {
  planMode: 'yearly' | 'monthly';
}

const initialState: PlanState = {
  planMode: "monthly"
}

export const PlanSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setTogglePlan: (state, action) => {
      state.planMode = action.payload
    }
  }
})

export default PlanSlice.reducer;
export const { setTogglePlan } = PlanSlice.actions;