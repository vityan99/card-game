import { storeState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { incrementUserMoney, decrementGameMoney } from "../../redux/slice";

import UserCards from "../userCards/UserCards";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: storeState) => state.game.users);
  const gameMoney = useSelector((state: storeState) => state.game.gameMoney);

  const setGameAndUserMoneyHandler = (id: number) => {
    if (gameMoney >= 10) {
      dispatch(decrementGameMoney(10));
      dispatch(incrementUserMoney(id));
    }
  };

  return (
    <>
      <UserCards users={users} gameMoney={gameMoney} setGameMoneyHandler={setGameAndUserMoneyHandler} />
    </>
  );
}

export default App;
