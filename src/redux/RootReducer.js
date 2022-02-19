import cakeReducer from "./cakes/CakeReducer";
import iceCreamReducer from "./icecreams/IceCreamReducer";
import chocoReducer from "./chocolates/ChocoReducer";
import userReducer from "./users/userReducer";

import { combineReducers } from "redux";

const RootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  chocolate: chocoReducer,
  user: userReducer
});
export default RootReducer;
