// import { getAuth } from "firebase/auth";
// import { setCurrentUser } from "./authSlice";

// export const watchAuthState = () => (dispatch) => {
//   const auth = getAuth();
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       dispatch(
//         setCurrentUser({
//           uid: user.uid,
//           email: user.email,
//         })
//       );
//     } else {
//       dispatch(setCurrentUser(null));
//     }
//   });
// };
