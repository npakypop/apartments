import { auth } from "firebase.config";
import { signOut } from "firebase/auth";

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("logout");
  } catch (error) {
    console.log(error.message);
  }
};
