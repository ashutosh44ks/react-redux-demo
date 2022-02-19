import { useSelector, useDispatch } from "react-redux";
import { buyChocos } from "../redux";
import { useState } from "react";

const ChocoHookContainer = () => {
  const numOfChocos = useSelector((state) => state.chocolate.numOfChocos);
  const dispatch = useDispatch();

  let [num, setNum] = useState(1);

  return (
    <>
      <h2>numOfChocos - {numOfChocos}</h2>
      <button onClick={() => dispatch(buyChocos())}>Buy Choco</button>
      <div>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        ></input>
        <button onClick={() => dispatch(buyChocos(num))}>Buy {num} chocos</button>
      </div>
    </>
  );
};

export default ChocoHookContainer;
