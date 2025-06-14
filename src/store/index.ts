import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@/store/userSlice';

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Tắt kiểm tra non-serializable
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
