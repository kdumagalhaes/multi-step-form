import { ADD_ONS } from "../../../constants/addOns";
import { PlansModes } from "../../../constants/plans";
import AddOnSelector from "../../AddOnSelector";

const ContentAddOns = () => {
  const selectedPlan = localStorage.getItem("planMode") as PlansModes;

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
