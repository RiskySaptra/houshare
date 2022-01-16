import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../firebase/config";

const loginWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const loginEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      "riskyexperimental@gmail.com",
      "30second"
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      throw error;
    });
};

export { loginWithGoogle, logout, loginEmailAndPassword };
