import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/shared/lib/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SMTP_HOST: "smtp.gmail.com",
    SMTP_USER: "firulvv@gmail.com",
    SMTP_PASS: "nvld mtsc vrgo yhzt",
  },
};

export default withNextIntl(nextConfig);
