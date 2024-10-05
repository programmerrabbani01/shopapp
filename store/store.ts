import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "@/features/Cart/CartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
