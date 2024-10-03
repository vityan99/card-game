interface IUser {
  id: number;
  name: string;
  avatar: string;
  money: number;
  online: boolean;
}

type UsersType = IUser[];

interface IInitialState {
  users: UsersType;
  gameMoney: number;
  selectedId: number;
  clickedGo: boolean;
  timeOut: number;
}

export const initialState: IInitialState = {
  users: [
    {
      id: 1,
      name: "Jack",
      avatar: "https://cdn0.iconfinder.com/data/icons/team-work-and-organization-2/128/78-1024.png",
      money: 0,
      online: true,
    },
    {
      id: 2,
      name: "Mark",
      avatar: "https://i.pinimg.com/originals/f4/f3/dd/f4f3dd7acfd64b16aa51027159a6f5e8.png",
      money: 0,
      online: true,
    },
  ],
  gameMoney: 100,
  selectedId: -1,
  clickedGo: false,
  timeOut: 0,
};
