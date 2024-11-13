import React, { useState } from "react";

export const appContext = React.createContext({
  getState: (a) => {},
  setState: () => {},
});

export function AppContextProvider(prop) {
  const [tt, setTT] = useState({
    isLogin: false,
    showLogin: "hidden",
    showSignUp: "hidden",
    search: {
      city: "",
      countRoom: 0,
      maxPeople: 0,
    },
    detail: null,
    email: "",
    userId: "",
  });
  function setState(select) {
    const ee = { ...tt };
    select(ee);
    setTT(ee);
  }
  function getState() {
    return tt;
  }
  const value = { getState, setState };
  return (
    <appContext.Provider value={value}>{prop.children}</appContext.Provider>
  );
}
