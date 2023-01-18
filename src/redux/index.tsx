import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import CommentSlice from './CommentSlice';
import modeSlice from './modeSlice';
import PageSlice from './PageSlice';

const store = configureStore({
  reducer: {
    pageSlice: PageSlice,
    commentSlice: CommentSlice,
    modeSlice: modeSlice,
  },
  middleware: (gdm) => gdm().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
