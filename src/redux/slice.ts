import { initialState } from "./initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incrementUserMoney(state, action: PayloadAction<number>) {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        user.money += 10;
      }
    },
    decrementGameMoney(state, action: PayloadAction<number>): void {
      state.gameMoney -= action.payload;
    },
    setSelectedId(state, action: PayloadAction<number>): void {
      state.selectedId = action.payload;
    },
    setClickedGo(state, action: PayloadAction<boolean>): void {
      state.clickedGo = action.payload;
    },
    setTimeOut(state, action: PayloadAction<number>): void {
      state.timeOut = action.payload;
    },
  },
});

export const { incrementUserMoney, decrementGameMoney, setSelectedId, setClickedGo, setTimeOut } = gameSlice.actions;

export default gameSlice;
