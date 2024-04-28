import { IconsList } from "@/shared/icons/Stack/IconsList";
import { Locale } from "@/shared/types/locale";
import { useLocale, useTranslations } from "next-intl";

const skills = [
  {
    ru: {
      title: "Из основных навыков (По Frontend части) хотел бы выделить:",

      skill: [
        "Уверенное знание React, Next JS, TS. Разработка как SSR, так и SPA приложений.",
        "Есть опыт работы как с чистым CSS, так и с SASS, SASS Module, Tailwind",
        "Знание Axios, React Query, RTK Query",
        "Знание стейтменеджеров - Redux Toolkit, zustend, mobX, effector",
        "Опыт написания RTL, JEST тестов",
        "Документирование UI в Storybook",
        "Понимание архитектуры FSD при разработке больших фронтенд приложений",
        "Понимание концепции как react lazy",
        "Знание CI/CD, eslint, prettier",
      ],
    },

    en: {
      title:
        "Of the main skills (according to the Frontend part) I would like to highlight:",

      skill: [
        "Confident knowledge React, Next js, ts.Development of both SSR and SPA applications.",
        "There is experience with pure CSS and SASS, SASS MODULE, TAILWIND",
        "Knowledge of Axios, React Query, RTK Query",
        "Knowledge of the consumers - Redux Toolkit, Zustend, Mobx, Effector",
        "Experience in writing RTL, jest tests",
        "Documentation UI in Storybook",
        "Understanding FSD architecture in the development of large front -end applications",
        "Understanding the concept as React Lazy",
        "Knowledge CI/CD, Eslint, Prettier",
      ],
    },
  },

  {
    ru: {
      title:
        "Из дополнительных навыков (По серверной части) хотел бы выделить:",

      skill: [
        "Умение работать Node JS",
        "Умение работать с Nest JS",
        "Умение работать с VPS серверами, настраивать NGINX, проксировать запросы",
        "Знание ORM таких как - Prisma и TypeORM",
      ],
    },

    en: {
      title:
        "From additional skills (according to the server part) I would like to highlight:",

      skill: [
        "Ability to work node js",
        "Ability to work with NEST JS",
        "Ability to work with VPS servers, configure nginx, proxy requests",
        "Knowledge of ORM such as PRISMA and TYPEORM",
      ],
    },
  },
];

const Skills = () => {
  const locale = useLocale() as Locale;

  const t = useTranslations("Skills");

  return (
    <section className="pt-5 max-lg:pt-10">
      <h2 className="second-level-title text">{t("title")}</h2>

      <div className="flex w-full flex-col gap-4">
        {skills.map((el, i) => (
          <ul className="pt-5" key={i}>
            <h3 className="third-level-title text pb-[10px]">
              {el[locale].title}
            </h3>

            {el[locale].skill.map((ol, idxOl) => (
              <ol key={idxOl} className="text text-[14px]">
                - {ol}
              </ol>
            ))}
          </ul>
        ))}
      </div>

      <IconsList classNames="mt-11" />
    </section>
  );
};

export { Skills };
