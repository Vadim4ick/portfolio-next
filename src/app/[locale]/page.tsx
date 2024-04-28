"use client";

import { Aside } from "@/components/Aside";
import { Burger } from "@/components/Burger";
import { Contacts } from "@/components/Contacts";
import { MainBtns } from "@/components/MainBtns";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { useAsideMenu } from "@/shared/hooks/useAsideMenu";
import { useMedia } from "@/shared/hooks/useMedia";
import { BurgerProviderContext } from "@/shared/providers/BurgerProvider";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const t = useTranslations("Index");

  const { asideMenu, refAbout, refContacts, refProjects } = useAsideMenu();

  const isDesktop1200 = useMedia("(max-width: 1280px)");

  const { open } = useContext(BurgerProviderContext);

  return (
    <>
      <div className="container mx-auto px-5">
        <div className="h-full xl:grid xl:grid-cols-main xl:gap-2 2xl:gap-10">
          {isDesktop1200.matches && <Burger />}

          <div>
            <section
              ref={refAbout}
              className="relative flex items-center justify-between gap-2 max-lg:flex-col-reverse max-lg:gap-8 max-lg:pt-10 lg:min-h-screen"
            >
              <div className="h-max w-full max-w-3xl max-lg:flex max-lg:flex-col max-lg:items-center">
                <h1 className="text main-title mb-7 max-lg:text-center">
                  {t("title")}
                </h1>

                <p className="text mb-9 max-lg:text-center max-md:text-[14px]">
                  {t("description")}
                </p>

                <MainBtns />
              </div>

              <div className="flex-shrink-0 flex-grow-0">
                <div
                  className="absolute inset-0 z-[-1] rounded-full"
                  style={{
                    background:
                      "radial-gradient(57.05% 57.05% at 49.84% 42.95%, rgba(94, 211, 243, 0.2) 0%, rgba(94, 211, 243, 0.132) 7.81%, rgba(94, 211, 243, 0.083) 29.69%, rgba(94, 211, 243, 0.0386) 56.77%, rgba(94, 211, 243, 0.0219) 77.6%, rgba(94, 211, 243, 0) 100%)",
                  }}
                ></div>

                <Image
                  priority={true}
                  width={400}
                  height={400}
                  className="h-[400px] w-[400px] rounded-full object-cover object-left-top max-lg:h-[200px] max-lg:w-[200px]"
                  src={"/vadim.png"}
                  alt="mainImage"
                />
              </div>
            </section>

            <Skills />

            <Projects ref={refProjects} />

            <Contacts ref={refContacts} />
          </div>

          <Aside asideMenu={asideMenu} />
        </div>
      </div>

      <div
        className={clsx(
          "absolute bottom-0 left-0 top-0 z-10 h-full w-full bg-bg-dark opacity-50 transition-all",
          {
            openOpacity: !open,
            closeOpacity: open,
          },
        )}
      />
    </>
  );
}
