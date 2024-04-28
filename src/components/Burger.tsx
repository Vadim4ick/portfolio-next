import { BurgerProviderContext } from "@/shared/providers/BurgerProvider";
import clsx from "clsx";
import { useContext } from "react";

const Burger = () => {
  const { open, setOpen } = useContext(BurgerProviderContext);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="fixed right-6 top-5 z-20 h-6 w-6 cursor-pointer"
    >
      <div
        className={clsx(
          "absolute right-0 top-1/4 h-0.5 w-7 bg-accent-light transition-transform dark:bg-accent-dark",
          {
            "rotate-45": open,
          },
        )}
      ></div>
      <div
        className={clsx(
          "absolute right-0 top-1/2 h-0.5 w-5 bg-accent-light transition-transform dark:bg-accent-dark",
          {
            "top-[6.5px] w-[1.75rem] -rotate-45": open,
          },
        )}
      ></div>
    </div>
  );
};

export { Burger };
