import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase.config";

// // создания пользователя
// export const createUserWithEmailAndPassword = createAsyncThunk(
//   "auth/createUserWithEmailAndPassword",
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const userCredential = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       return userCredential.user;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// //входа пользователя
// export const signInWithEmailAndPassword = createAsyncThunk(
//   "auth/signInWithEmailAndPassword",
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const userCredential = await auth.signInWithEmailAndPassword(
//         email,
//         password
//       );
//       return userCredential.user;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// //выхода пользователя
// export const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
//   try {
//     await auth.signOut();
//     return null;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const checkAuthState = createAsyncThunk(
  "auth/checkAuthState",
  async () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(
        (user) => {
          if (user === null) {
            // Выполнено.
            unsubscribe();
            resolve({
              userName: null,
              token: null,
              isLoggedIn: false,
            });
          } else {
            unsubscribe();
            resolve({
              userName: user.displayName,
              token: user.accessToken,
              isLoggedIn: true,
            });
          }
        },
        (error) => {
          // Ошибка.
          unsubscribe();
          reject(error);
        },
        () => {
          // Ожидание.
        }
      );
    });
  }
);
