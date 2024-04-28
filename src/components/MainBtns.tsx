import { Button } from "@/shared/ui/Button";
import { useTranslations } from "next-intl";

const MainBtns = () => {
  const t = useTranslations("MainBtns");

  return (
    <div className="flex gap-4">
      <Button className="max-md:text-[14px]">{t("connectionBtn")}</Button>

      <Button className="max-md:text-[14px]">{t("saveSummaryBtn")}</Button>
    </div>
  );
};

export { MainBtns };
