import classNames from "classnames";
import styles from "./button.module.scss";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  border?: "white" | "accent" | "black" | "none";
  textColor?: "white" | "black" | "accent";
  buttonColor?: "transparent" | "accent" | "white" | "black";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  children,
  size,
  border,
  textColor,
  buttonColor,
  ...props
}: ButtonProps) => {
  const sizeClass = size
    ? {
        small: styles.small,
        medium: styles.medium,
        large: styles.large,
      }[size]
    : styles.medium;

  const borderClass = border
    ? {
        white: styles.borderWhite,
        accent: styles.borderAccent,
        black: styles.borderBlack,
        none: styles.borderNone,
      }[border]
    : styles.borderNone;

  const textColorClass = textColor
    ? {
        white: styles.textColorWhite,
        black: styles.textColorBlack,
        accent: styles.textColorAccent,
      }[textColor]
    : styles.textColorBlack;

  const buttonColorClass = buttonColor
    ? {
        transparent: styles.buttonColorTransparent,
        accent: styles.buttonColorAccent,
        white: styles.buttonColorWhite,
        black: styles.buttonColorBlack,
      }[buttonColor]
    : styles.buttonColorTransparent;

  return (
    <button
      className={classNames(
        sizeClass,
        borderClass,
        textColorClass,
        buttonColorClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
