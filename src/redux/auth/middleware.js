// import { getAuth } from "firebase/auth";
// import { setUser } from "./authSlice";

// export const watchAuthState = () => (dispatch) => {
//   const auth = getAuth();
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       dispatch(
//         setUser({
//           uid: user.uid,
//           email: user.email,
//         })
//       );
//     } else {
//       dispatch(setUser(null));
//     }
//   });
// };
