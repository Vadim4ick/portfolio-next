"use client";

import { ToggleTheme } from "@/shared/icons/ToggleTheme";
import { Button } from "@/shared/ui/Button";
import { Navbar } from "./Navbar";
import { useTheme } from "@/shared/hooks/useTheme";
import { ToggleSwitcher } from "@/shared/ui/ToggleSwitcher";
import { useMedia } from "@/shared/hooks/useMedia";
import { useContext } from "react";
import { BurgerProviderContext } from "@/shared/providers/BurgerProvider";
import clsx from "clsx";

export interface AsideLink {
  name: string;
  fn: VoidFunction;
}

interface AsideProps {
  asideMenu: AsideLink[];
}

const Aside = (props: AsideProps) => {
  const { asideMenu } = props;

  const { toggleTheme } = useTheme();

  const isDesktop1200 = useMedia("(max-width: 1280px)");

  const { open } = useContext(BurgerProviderContext);

  if (isDesktop1200.matches) {
    return (
      <aside
        className={clsx(
          "z-20 mt-5 h-max bg-white-light transition-all max-xl:fixed max-xl:right-[25px] max-xl:top-[25px] xl:rounded-3xl dark:border dark:border-white-light dark:bg-white-dark",
          {
            open: !open,
            close: open,
          },
        )}
      >
        <Navbar asideMenu={asideMenu} />

        <div className="flex items-center justify-center gap-2 pb-2">
          <Button onClick={toggleTheme} variant="reset">
            <ToggleTheme className="text-icons-light dark:text-icons-dark" />
          </Button>

          <ToggleSwitcher />
        </div>
      </aside>
    );
  }

  return (
    <aside className="sticky top-2 mt-5 h-max rounded-3xl bg-white-light dark:border-[1px] dark:border-white-light dark:bg-white-dark">
      <Navbar asideMenu={asideMenu} />

      <div className="flex items-center justify-center gap-2 pb-2">
        <Button onClick={toggleTheme} variant="reset">
          <ToggleTheme className="text-icons-light dark:text-icons-dark" />
        </Button>

        <ToggleSwitcher />
      </div>
    </aside>
  );
};

export { Aside };
