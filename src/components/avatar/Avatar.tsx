import { memo } from "react";
import style from "./avatar.module.css";
import cn from "classnames";

interface IAvatar {
  img: string;
}

const Avatar = memo(
  ({ img }: IAvatar) => {
    return <img className={cn(style.avatar)} src={img} alt="avatar" />;
  },
  (prev, next) => prev.img === next.img
);

export default Avatar;
