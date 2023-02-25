import Form from "components/Form/Form";
import { auth } from "firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "firebase.config";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { db } from "firebase.config";

function SignUp() {
  const register = async (data) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredentials.user;
      const storageRef = ref(storage, `images/${data.email}`);
      const uploadTask = uploadBytesResumable(storageRef, data.file);

      uploadTask.on(
        (error) => {
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //upd user profile
            await updateProfile(user, {
              displayName: data.username,
              photoURL: downloadURL,
            });
            //store user data in firestore database
            // const dbuser = await addDoc(collection(db, "users", user.uid), {
            const dbuser = await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayNmae: data.username,
              email: data.email,
              photoURL: downloadURL,
            });
            console.log("dbuser", dbuser);
          });
        }
      );
      console.log("user", user);
      //   return userCredentials.user;
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
      file: form.elements.file.files[0],
    };
    console.log(data.username);
    console.log(data.file);
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
