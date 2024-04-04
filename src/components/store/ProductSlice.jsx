import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";
// Файл используется для описания редукторов

// Получение id авторизованного user
const getUserId = async () => {
  const session = await getSession();
  const autorizedUserId = session.user.id;
  return autorizedUserId;
};

// Получение всех данных авторизованного user
export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async function (_, { rejectWithValue }) {
    try {
      const userId = await getUserId();
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      if (!response.ok) {
        throw new Error("Server error");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
// Получение всех users
const getAllUsers =async()=>{
  const response = await fetch(`http://localhost:3000/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const allUsers = await response.json();
  return allUsers
}

// функция добавления продукта в корзину
export const addProductInBasket = createAsyncThunk(
  "users/addProductInBasket ",
  async function (product, { rejectWithValue, dispatch }) {
    try {
      const userId = await getUserId();
      const users =await getAllUsers()
      // Находим авторизованного пользователя
      const user = users.find((user) => user.id === userId);
      if (!user) {
        throw new Error("User not found");
      }

      const prevOrders = user.orders;
      const updatedOrders = [...prevOrders, product];
      const updateUserResponse = await fetch(
        `http://localhost:3000/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orders: updatedOrders }),
        }
      );
      if (!updateUserResponse.ok) {
        throw new Error("Failed to update user's orders");
      }
      const updatedUserData = await updateUserResponse.json();
 
      dispatch(addProduct(updatedUserData));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const deleteProductInBasket = createAsyncThunk(
  "users/deleteProductInBasket",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const userId = await getUserId();
      const users =await getAllUsers()
        // Находим авторизованного пользователя
      const user = users.find((user) => user.id === userId);

      if (!user) {
        throw new Error("User not found");
      }
      const updatedOrders = user.orders.filter((product) => product.id !== id);
      const updateUserResponse = await fetch(
        `http://localhost:3000/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orders: updatedOrders }),
        }
      );
      if (!updateUserResponse.ok) {
        throw new Error("Failed to update user's orders");
      }
      const updatedUserData = await updateUserResponse.json();
      // dispatch(removeProduct({id}));
      dispatch(removeUser(updatedUserData));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: null,
    error: null,
  },
  reducers: {
    addProduct(state, action) {
      // state.user.orders.push(action.payload);
      state.user=action.payload;
    },
    removeProduct(state, action) {
      // state.user = state.user.orders.filter(
      //   (elem) => elem.id !== action.payload.id
      // );
      state.user=action.payload;
    },
    
  },
  // Меняю статус initialState и в state user попадает полученный массив с сервера
  extraReducers: (buildier) => {
    buildier
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, setError)
    .addCase(deleteProductInBasket.rejected, setError)
    .addCase(addProductInBasket.rejected, setError);
  },
});

export default usersSlice.reducer;






// Пример на списке дел
// export const fetchTodos = createAsyncThunk(
//   "todos/fetchTodos",
//   async function (_, { rejectWithValue }) {
//     try {
//       const response = await fetch(
//         "http://jsonplaceholder.typicode.com/todos?_limit=10"
//       );
//       if (!response.ok) {
//         throw new Error("Server error");
//       }
//       const data = await response.json();
//       return data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteTodo = createAsyncThunk(
//   "todos/deleteTodo",
//   async function (id, { rejectWithValue, dispatch }) {
//     try {
//       const response = await fetch(
//         `http://jsonplaceholder.typicode.com/todos/${id}`,
//         { method: "DELETE" }
//       );
//       if (!response.ok) {
//         throw new Error("Delete error");
//       }
//       dispatch(removeTodo({ id }));
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
// export const addNewTodo = createAsyncThunk(
//   "todos/addNewTodo",
//   async function (text, { rejectWithValue, dispatch }) {
//     try {
//       const todo = {
//         userId: 1,
//         title: text,
//         completed: false,
//       };
//       const response = await fetch(
//         "http://jsonplaceholder.typicode.com/todos",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(todo),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Add task error");
//       }
//       const data = await response.json();
//       dispatch(addTodo(data));
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
// const productSlice = createSlice({
//   name: "todos",
//   initialState: {
//     todos: [],
//     status: null,
//     error: null,
//   },
//   reducers: {
//     addTodo(state, action) {
//       console.log(state);
//       console.log(action);
//       state.todos.push(
//         action.payload
//         //   {
//         //   id: new Date().toISOString(),
//         //   text: action.payload.text,
//         //   completed: false,
//         // }
//       );
//     },
//     removeTodo(state, action) {
//       state.todos = state.todos.filter((elem) => elem.id !== action.payload.id);
//     },
//     toggleTodoComplete(state, action) {},
//   },
//   extraReducers: (buildier) => {
//     buildier
//       .addCase(fetchTodos.pending, (state, action) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         state.status = "resolved";
//         state.todos = action.payload;
//       })
//       .addCase(fetchTodos.rejected, setError);
//     // .addCase(deleteTodo.rejected, setError);
//   },
// });
// const { addTodo, removeTodo, toggleTodoComplete } = productSlice.actions;
// export default productSlice.reducer;
