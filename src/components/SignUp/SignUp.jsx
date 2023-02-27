import Form from "components/Form/Form";
import { auth } from "firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db } from "firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "redux/auth/authSlice";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { storage } from "firebase.config";

function SignUp() {
  const dispatch = useDispatch();

  const register = async (data) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: data.username,
      });
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: data.username,
        email: data.email,
      });
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          userName: user.displayName,
        })
      );
    } catch (error) {
      alert("something went wrong");
      console.log(error.message);
    }
  };

  const onSignUp = (event) => {
    event.preventDefault();
    //   isLoading(true)
    const form = event.currentTarget;
    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
      username: form.elements.username.value,
    };
    register(data);
    form.reset();
  };

  return (
    <div>
      <Form title="signup" onClick={onSignUp} />
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default SignUp;

//! код ниже для того что бы еще загружать в профиль фотографию при регистрации
//   const storageRef = ref(storage, `images/${data.username}`);
//   const uploadTask = uploadBytesResumable(storageRef, data.file);

//   uploadTask.on(
//     (error) => {
//       console.log(error.message);
//       alert(error.message);
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//         //upd user profile
//         await updateProfile(user, {
//           displayName: data.username,
//           photoURL: downloadURL,
//         });
//         //store user data in firestore database
//         await setDoc(doc(db, "users", user.uid), {
//           uid: user.uid,
//           displayNmae: data.username,
//           email: data.email,
//         //   photoURL: downloadURL,
//         });
//       });
//     }
//   );
