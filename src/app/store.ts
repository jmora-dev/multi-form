import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { multiFormReducer } from "../features/multiForm/reducer/multiFormReducer";

export const store = configureStore({
  reducer: {
    multiForm: multiFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
