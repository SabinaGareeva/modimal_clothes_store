import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./ProductSlice";

// Создание Redux Store
export default configureStore({
  // объект reducer содержит все редукторы приложения, он один и доступен по ключу todos
  reducer: { user: userReducer },
});
