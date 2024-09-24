import { memo } from "react";
import style from "./button.module.css";

import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

interface IButton {
  title: string;
  use: string;
  arrow?: string;
  size?: string;
  clickHandler: () => void;
  disabled: boolean;
}

const Button = memo(
  ({ title, use, arrow, size, clickHandler, disabled }: IButton) => {
    const sizeModificator = size && size !== "small" ? style[`btn--${size}`] : "";

    return (
      <button
        className={`${style.btn} ${use ? style[`btn--${use}`] : ""}
        ${sizeModificator}`}
        onClick={clickHandler}
        disabled={disabled}
      >
        {arrow && arrow === "left" && <BiArrowToLeft />}
        {title}

        {arrow && arrow !== "left" && <BiArrowToRight />}
      </button>
    );
  },
  (prev, next) => prev.clickHandler === next.clickHandler
);

export default Button;
