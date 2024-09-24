import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slice";

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export type storeState = ReturnType<typeof store.getState>;
export default store;
