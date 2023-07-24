import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo.slice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import CounterReducer from "./features/count.slice";
// import ProdutoReducer from "./features/produto.slice";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({
//   count: CounterReducer,
//   produto: ProdutoReducer,
// });

// const persistConfig = {
//   key: "root",
// };

// export const store = configureStore({
//   reducer: {
//     count: CounterReducer,
//     produto: ProdutoReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
