import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//post
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6627a020b625bf088c090cb2.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
///get
export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      "https://6627a020b625bf088c090cb2.mockapi.io/crud",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      const res = await response.json();
      return res;
    } catch (error) {
      return rejectWithValue(error, "error");
    }
  }
);
///del
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6627a020b625bf088c090cb2.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const res = await response.json();
      return res;
    } catch (error) {
      return rejectWithValue(error, "error");
    }
  }
);
///put
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6627a020b625bf088c090cb2.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const res = await response.json();
      return res;
    } catch (error) {
      return rejectWithValue(error, "error");
    }
  }
);
// createSlice
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      ///create
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload); // Используем push для добавления нового пользователя
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Получаем ошибку из payload
      })
      ///show
      .addCase(showUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = [...state.users, ...action.payload]; // Используем оператор расширения для добавления полученных пользователей
      })
      .addCase(showUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Получаем ошибку из payload
      })
      ///delete
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((el) => el.id !== id);
        }
        console.log("delete", action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Получаем ошибку из payload
      })
      //update
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.map((el) =>
          el.id === action.payload.id ? action.payload : el
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Set the error state
      });
  },
});
export default userDetail.reducer;
export const {searchUser} = userDetail.actions