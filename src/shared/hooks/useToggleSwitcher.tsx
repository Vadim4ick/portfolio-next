import { useLocale } from "next-intl";
import { Locale } from "../types/locale";
import { usePathname, useRouter } from "next/navigation";

const useToggleSwitcher = () => {
  const locale = useLocale() as Locale;

  const pathname = usePathname();
  const router = useRouter();

  const redirectPathname = (locale: Locale) => {
    if (!pathname) return "/";

    const segments = pathname.split("/");
    segments[1] = locale;

    return router.push(segments.join("/"));
  };

  const toggleLocale = () => {
    let lang: Locale;

    switch (locale) {
      case "ru":
        lang = "en";
        break;
      case "en":
        lang = "ru";
        break;
    }

    redirectPathname(lang);
  };

  return {
    toggleLocale,
    locale,
  };
};

export { useToggleSwitcher };
