import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from '../features/redux-slices/characterSlice';
import dropdownReducer from '../features/redux-slices/dropdownSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    dropdown: dropdownReducer
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
