import React, { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import firebaseApp from "../firebase/initFirebase";

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UserContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = React.createContext<UserContextValue>(
  {} as UserContextValue
);

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const authentication = getAuth(firebaseApp);

    const unsubscribe = onAuthStateChanged(authentication, (loginedUser) => {
      console.log(
        loginedUser
          ? `${loginedUser.email}로 로그인했습니다.`
          : "로그인한 이메일이 없습니다."
      );
      setUser(loginedUser);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
