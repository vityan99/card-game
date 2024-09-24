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
      avatar: "https://www.clipartmax.com/png/full/267-2671061_yükle-youssefdibeyoussefdibe-profile-picture-user-male.png",
      money: 0,
      online: true,
    },
  ],
  gameMoney: 100,
  selectedId: -1,
  clickedGo: false,
  timeOut: 0,
};
