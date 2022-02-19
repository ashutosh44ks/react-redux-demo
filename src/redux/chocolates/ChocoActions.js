import { BUY_CHOCO } from "./ChocoTypes";

export const buyChocos = (num = 1) => {
  return {
    type: BUY_CHOCO,
    payload: num
  };
};

