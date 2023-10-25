import { createSlice } from '@reduxjs/toolkit';

interface ValidationState {
  isButtonDisabled: boolean;
}

const initialState: ValidationState = {
  isButtonDisabled: true,
};

export const ValidationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    setSubmitValidation: (state, action) => {
      state.isButtonDisabled = action.payload;
    },
  },
});

export default ValidationSlice.reducer;
export const { setSubmitValidation } = ValidationSlice.actions;
