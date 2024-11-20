// src/services/AuthService.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logoutUser() {
  return signOut(auth);
}
