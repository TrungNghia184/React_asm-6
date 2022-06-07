import { createSlice } from "@reduxjs/toolkit";
import { object } from "yup";

const innitialState = {
  taskList: [],
  randomID: "",
  cocktailList: {},
  cartList: [],
  drinkInfo: {},
  loginState: false,
  loadingState: false,
};
let latestTaskList = [];
const globalSlice = createSlice({
  name: "globalSlice",
  initialState: innitialState,
  reducers: {
    getTaskList(state, action) {
      state.taskList = [...state.taskList, action.payload];
      latestTaskList = state.taskList;
    },
    deleteFromTaskList(state, action) {
      let taskNeededToDelete = latestTaskList.filter((task) => {
        return task.id == action.payload;
      });
      console.log(state.GlobalReducer.taskList);
    },
    getCockTailList(state, action) {
      state.cockTailList = action.payload;
    },
    getCartList(state, action) {
        let checkMatched = state.cartList.findIndex(cartItem => cartItem.idDrink == action.payload.idDrink)
        if (checkMatched >= 0) {
            state.cartList.splice(checkMatched, 1, action.payload);
        } else {
            state.cartList = [...state.cartList, action.payload];
        }
    },
    storeDrinkInfo(state, action) {
        state.drinkInfo = action.payload;
    },
    setGlobalLoading(state, action) {
        state.loadingState = action.payload;
    },
    setLoginState(state, action) {
        state.loginState = action.payload;
    }
  },
});

export const { action, reducer } = globalSlice;
export { action as GlobalActions, reducer as GlobalReducer };
export const { getTaskList } = globalSlice.actions;
export const { deleteFromTaskList } = globalSlice.actions;
export const { getCockTailList } = globalSlice.actions;
export const { getCartList } = globalSlice.actions;
export const { storeDrinkInfo, setGlobalLoading, setLoginState } = globalSlice.actions;
export default globalSlice.reducer;
