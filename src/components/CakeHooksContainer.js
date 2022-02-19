import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
//useSelector equivalent to mapStateToProps()
//useDispatch is equivalent to mapDispatchToProp()

const CakeHooksContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> NumOfCakes {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default CakeHooksContainer;
