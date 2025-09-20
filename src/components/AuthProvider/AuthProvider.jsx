import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase.config";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogout = () => {
    signOut(auth);
  };
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)

      return ()=>{
            unsubscribe()
      }
    })
  }, []);

  const authInfo = {
    handleRegister,
    handleLogin,
    handleLogout,
    handleGoogle,
    user
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
