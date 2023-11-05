import { PlansModes } from "../constants/plans";

const convertPrice = (price: number, planMode: PlansModes) => {
  return `$${price}/${planMode === PlansModes.MONTHLY ? 'mo' : 'yr'}`
}

export default convertPrice