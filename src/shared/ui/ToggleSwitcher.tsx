import { useToggleSwitcher } from "../hooks/useToggleSwitcher";
import { Button } from "./Button";

const ToggleSwitcher = () => {
  const { locale, toggleLocale } = useToggleSwitcher();

  return (
    <Button className="font-medium" onClick={toggleLocale} variant="reset">
      {locale === "en" ? "EN" : "RU"}
    </Button>
  );
};

export { ToggleSwitcher };
