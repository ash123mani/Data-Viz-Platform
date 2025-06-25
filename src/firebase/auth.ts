import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { firebaseApp } from "./setup.ts";

export const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<User> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    return res.user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};
