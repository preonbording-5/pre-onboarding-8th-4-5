import { RootState } from './index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createMode } from '../constants/constants';

interface ModeState {
  mode: string;
  currentItemData: {};
}

const initialState: ModeState = { mode: createMode, currentItemData: {} };

const modeSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ModeState>) => {
      state.mode = action.payload.mode;
      state.currentItemData = action.payload.currentItemData;
    },
  },
});

export const { setMode } = modeSlice.actions;
export const mode = (state: RootState) => state.modeSlice.mode;
export const updateCommentData = (state: RootState) =>
  state.modeSlice.currentItemData;
export default modeSlice.reducer;
