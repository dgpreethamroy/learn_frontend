import { createContext, useContext, useState, useEffect } from "react";
import React from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import auth from "../config/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function updateUserProfile(user, profile) {
    return updateProfile(user, profile);
  }

  useEffect(() => {
    console.log("1st Use effect");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log("1st Use effect returned");
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    console.log("2nd Use effect");
  }, []);

  const value = {
    currentUser,
    error,
    setError,
    login,
    register,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
