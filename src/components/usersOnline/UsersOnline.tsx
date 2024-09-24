import { memo } from "react";

interface IUsersOnline {
  usersOnline: number;
}

const UsersOnline = memo(
  ({ usersOnline }: IUsersOnline) => {
    return <span>Сейчас пользователей онлайн: {usersOnline}</span>;
  },
  (prev, next) => prev.usersOnline === next.usersOnline
);

export default UsersOnline;
