import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./shared/const/locale";

export default createMiddleware({
  locales: locales,

  defaultLocale: defaultLocale,
});

export const config = {
  matcher: ["/", "/(ru|en)/:path*"],
};
