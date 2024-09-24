import { memo } from "react";
import style from "./card.module.css";
import cn from "classnames";

import Avatar from "../avatar/Avatar";

interface IUser {
  id: number;
  name: string;
  avatar: string;
  money: number;
  online: boolean;
}

interface ICard {
  user: IUser;
  selectedId: boolean;
  setSelectedIdHandler: (id: number) => void;
}

const Card = memo(
  ({ user, selectedId, setSelectedIdHandler }: ICard) => {
    const { id, name, money, avatar, online } = user;

    return (
      <div className={cn(selectedId ? style.card : style["card--not-active"])} onClick={() => setSelectedIdHandler(id)}>
        <div className={cn(style["card__img-wrapper"], online ? style["user--online"] : "")}>
          <Avatar img={avatar} />
        </div>
        <span className={cn(style.card__username)}>{name}</span>
        <span className={cn(style.card__money)}>{money} руб.</span>
      </div>
    );
  },
  (prev, next) => {
    return prev.user === next.user && prev.selectedId === next.selectedId;
  }
);

export default Card;
