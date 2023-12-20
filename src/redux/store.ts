import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PlanSlice } from "./reducers/plan";
import { ValidationSlice } from "./reducers/validation";

export const store = configureStore({
  reducer: {
    plan: PlanSlice.reducer,
    validation: ValidationSlice.reducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

