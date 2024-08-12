"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [unReadCount, setUnReadCount] = useState(0);
  return (
    <GlobalContext.Provider value={{ unReadCount, setUnReadCount }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
