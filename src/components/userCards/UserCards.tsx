import { useEffect, useMemo, useCallback } from "react";
import style from "./userCards.module.css";
import cn from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { setClickedGo, setSelectedId, setTimeOut } from "../../redux/slice";
import { storeState } from "../../redux/store";

import UsersOnline from "../usersOnline/UsersOnline";
import Card from "../card/Card";
import Button from "../button/Button";

interface IUser {
  id: number;
  name: string;
  avatar: string;
  money: number;
  online: boolean;
}

type UsersType = IUser[];

interface IUserCards {
  users: UsersType;
  gameMoney: number;
  setGameMoneyHandler: (id: number) => void;
}

function UserCards({ users, gameMoney, setGameMoneyHandler }: IUserCards) {
  const dispatch = useDispatch();

  const selectedId = useSelector((state: storeState) => state.game.selectedId);
  const clickedGo = useSelector((state: storeState) => state.game.clickedGo);
  const timeOut = useSelector((state: storeState) => state.game.timeOut);

  const usersOnline = useMemo(() => {
    return users.length;
  }, [users]);

  useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      dispatch(setClickedGo(false));
    }, timeOut);

    return () => clearTimeout(timeoutId);
  }, [clickedGo, timeOut]);

  const startGameHandler = useCallback(() => {
    dispatch(setClickedGo(!clickedGo));
    dispatch(setTimeOut(parseInt((Math.random() * (8 - 2) + 2).toFixed(0)) * 1000));
  }, [selectedId]);

  const setSelectedIdHandler = (id: number): void => {
    selectedId === id ? dispatch(setSelectedId(-1)) : dispatch(setSelectedId(id));
  };

  const gameMoneyHandler = useCallback(() => {
    if (gameMoney > 0) {
      setGameMoneyHandler(selectedId);
    }
  }, [gameMoney, selectedId]);

  return (
    <div className={cn(style["user-cards"])}>
      <div className={cn(style["game-controllers"])}>
        <UsersOnline usersOnline={usersOnline} />
        <span className={cn(style["game-money"])}>{gameMoney} руб.</span>
        <Button title="Начать игру" use="primary" disabled={selectedId === -1 || gameMoney === 0} clickHandler={startGameHandler} />
        {clickedGo && selectedId !== -1 && (
          <Button title="Забрать деньги" use="success" clickHandler={gameMoneyHandler} disabled={gameMoney === 0} />
        )}
      </div>
      <div className={cn(style.users)}>
        {users.map((user) => (
          <Card key={user.id} user={user} selectedId={user.id === selectedId} setSelectedIdHandler={setSelectedIdHandler} />
        ))}
      </div>
    </div>
  );
}

export default UserCards;
