"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface BurgerProviderContextProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerProviderContext = createContext(
  {} as BurgerProviderContextProps,
);

const BurgerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <BurgerProviderContext.Provider value={{ open, setOpen }}>
      {children}
    </BurgerProviderContext.Provider>
  );
};

export { BurgerProvider };
