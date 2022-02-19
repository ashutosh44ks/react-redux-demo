import { BUY_CHOCO } from "./ChocoTypes";

const initialState = {
  numOfChocos: 30,
};
const chocoReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCO:
      return {
        ...state,
        numOfChocos: state.numOfChocos - action.payload,
      };
    default:
      return state;
  }
};

export default chocoReducer;
