import { useContactsForm } from "@/shared/hooks/useContactsForm";
import { Email } from "@/shared/icons/Email";
import { Github } from "@/shared/icons/Github";
import { Telegramm } from "@/shared/icons/Telegramm";
import { Button } from "@/shared/ui/Button";
import axios from "axios";
import { useTranslations } from "next-intl";
import { FormEvent, forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Contacts = forwardRef<HTMLElement>((_, ref) => {
  const {
    email,
    message,
    name,
    onChange,
    setEmail,
    setMessage,
    setName,
    resetForm,
  } = useContactsForm();

  const t = useTranslations("Contacts");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/email", {
        name,
        message,
        email,
      });

      resetForm();

      console.log(res.data.message);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <section ref={ref} className="pt-16">
      <h2 className="second-level-title text">{t("contacts")}</h2>

      <div className="flex gap-8 pt-4">
        <div className="flex items-center gap-4">
          <a href="/">
            <Telegramm className="h-8 w-8 text-icons-light dark:text-icons-dark" />
          </a>

          <span className="text">TG</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="/">
            <Email className="h-8 w-8 text-icons-light dark:text-icons-dark" />
          </a>

          <span className="text">Email</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="/">
            <Github className="h-8 w-8 text-icons-light dark:text-icons-dark" />
          </a>

          <span className="text">Github</span>
        </div>
      </div>

      <div className="pt-10 md:pl-2">
        <h3 className="third-level-title text">{t("form-name")}</h3>

        <form
          onSubmit={onSubmit}
          className="flex max-w-[550px] flex-col gap-4 pt-6"
        >
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="text font-bold">{t("name")}</span>

              <input
                type="text"
                onChange={(e) => onChange(e, setName)}
                value={name}
                placeholder={t("your-name")}
                className="input h-[40px]"
              />
            </label>
          </div>

          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="text font-bold">{t("email")}</span>

              <input
                type="email"
                onChange={(e) => onChange(e, setEmail)}
                value={email}
                placeholder={t("your-email")}
                className="input h-[40px]"
              />
            </label>
          </div>

          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="text font-bold">{t("message")}</span>

              <textarea
                onChange={(e) => onChange(e, setMessage)}
                value={message}
                placeholder={t("your-message")}
                className="input h-[250px]"
              />
            </label>
          </div>

          <Button className="text my-4 w-full rounded-[8px] bg-icons-light p-2 transition-all delay-75 hover:text-white-light dark:bg-icons-dark">
            {t("send")}
          </Button>
        </form>
      </div>
    </section>
  );
});

export { Contacts };
