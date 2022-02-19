import { useSelector, useDispatch } from "react-redux";
import { buyIceCreams } from "../redux";

const IceCreamHookContainer = () => {
  const numOfIceCream = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>NumOfIceCreams - {numOfIceCream}</h3>
      <button onClick={() => dispatch(buyIceCreams())}>Buy Ice Cream</button>
    </div>
  );
};

export default IceCreamHookContainer;
