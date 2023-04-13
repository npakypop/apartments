import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase.config";

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
