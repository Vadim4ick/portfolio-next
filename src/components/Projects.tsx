/* eslint-disable react/display-name */
import { Locale } from "@/shared/types/locale";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { forwardRef } from "react";

const projects = [
  {
    image: {
      url: "/portfolio/portfolio.png",
      width: 1665,
      height: 1050,
    },

    en: {
      title: "Project - 'my portfolio'",
      description:
        "My portfolio is an inspiring front -end application created for creative professionals and developers who want to present their work in an elegant and professional style.",
    },

    ru: {
      title: "Проект - 'Мое портфолио'",
      description:
        "Мое портфолио - это вдохновляющее фронтенд приложение, созданное для творческих профессионалов и разработчиков, которые хотят представить свои работы в элегантном и профессиональном стиле.",
    },
  },
];

const Projects = forwardRef<HTMLElement>((_, ref) => {
  const locale = useLocale() as Locale;

  const t = useTranslations("Projects");

  return (
    <section ref={ref} className="relative pt-16">
      <h2 className="second-level-title text">{t("title")}</h2>

      <div className="flex flex-col gap-[75px] pt-8">
        {projects.map((project, i) => (
          <article key={i} className="flex flex-col items-center gap-4">
            <Image
              src={project.image.url}
              width={project.image.width}
              height={project.image.height}
              alt={project[locale].title}
            />

            <div className="flex flex-col gap-3">
              <h2 className="second-level-title text">
                {project[locale].title}
              </h2>

              <p className="text third-level-title">
                {project[locale].description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

export { Projects };
