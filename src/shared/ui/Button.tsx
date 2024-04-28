import clsx from "clsx";

export type VariantBtn = "main" | "reset";

interface ButtonProps {
  variant?: VariantBtn;
}

const Button = (props: ReactTagProps<"button"> & ButtonProps) => {
  const { children, className, variant = "main", ...otherProps } = props;

  return (
    <button
      className={clsx(
        className,
        {
          main: "text rounded-3xl bg-icons-light px-2 py-2 transition-colors delay-75 hover:text-white-light dark:bg-icons-dark",
          reset: "text",
        }[variant],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
