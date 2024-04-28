import { Button } from "@/shared/ui/Button";
import { AsideLink } from "./Aside";
import { useTranslations } from "next-intl";

interface NavbarProps {
  asideMenu: AsideLink[];
}

const Navbar = (props: NavbarProps) => {
  const { asideMenu } = props;

  const t = useTranslations("Aside");

  return (
    <nav>
      <ul className="flex flex-col items-center gap-6 p-5">
        {asideMenu.map((el) => (
          <li key={el.name}>
            <Button
              onClick={() => el.fn()}
              variant="reset"
              className="font-bold"
            >
              {t(el.name)}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
