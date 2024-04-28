import clsx from "clsx";
import * as ICONS from "./index";

const IconsList = ({ classNames }: { classNames?: string }) => {
  if (!ICONS) return null;

  const iconsNames = Object.keys(ICONS) as Array<keyof typeof ICONS>;

  return (
    <div
      className={clsx(
        "grid grid-cols-stack gap-5 max-md:grid-cols-stackMobile",
        [classNames],
      )}
    >
      {iconsNames.map((iconName, i) => {
        const Icon = ICONS[iconName];

        return (
          <div
            key={i}
            className="flex flex-row-reverse items-center justify-end gap-2"
          >
            <p className="text font-medium">{iconName}</p>

            <Icon
              width={40}
              height={40}
              className="text-icons-light dark:text-icons-dark"
            />
          </div>
        );
      })}
    </div>
  );
};

export { IconsList };
