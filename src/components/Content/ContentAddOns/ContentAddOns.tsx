import { ADD_ONS } from "../../../constants/addOns";
import { localStorageKey } from "../../../constants/localStorageKeys";
import { PlansModes } from "../../../constants/plans";
import AddOnSelector from "../../AddOnSelector";

const ContentAddOns = () => {
  const selectedPlan = localStorage.getItem(localStorageKey.PLAN_MODE) as PlansModes;

  return (
    <div>
      {ADD_ONS.map((addOn) => {
        return (
          <AddOnSelector
            key={addOn.id}
            title={addOn.title}
            description={addOn.description}
            id={addOn.id}
            monthPrice={addOn.monthPrice}
            yearPrice={addOn.yearPrice}
            planMode={selectedPlan}
          />
        );
      })}
    </div>
  );
};

export default ContentAddOns;
