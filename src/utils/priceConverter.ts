import { PlansModes } from "../constants/plans";

const priceConverter = (price: number, planMode: PlansModes) => {
  switch (planMode) {
    case PlansModes.MONTHLY:
      return `$${price}/mo`;
    case PlansModes.YEARLY:
    return `$${price}/yr`;
    default:
      break;
  }
};

export default priceConverter;