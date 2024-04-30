import { localStorageKey } from "../../../constants/localStorageKeys";
import { PlansModes } from "../../../constants/plans";
import useAddOnsList from "../../../hooks/useAddOnsList";
import AddOnSelector from "../../AddOnSelector";

const ContentAddOns = () => {
  const selectedPlan = localStorage.getItem(localStorageKey.PLAN_MODE) as PlansModes;
  const {addOnsList, handleSelectAddOns, checkSelectedAddOn} = useAddOnsList();

  return (
    <div>
      {addOnsList.map((addOn) => {
        return (
          <AddOnSelector
            key={addOn.id}
            title={addOn.title}
            description={addOn.description}
            id={addOn.id}
            monthPrice={addOn.monthPrice}
            yearPrice={addOn.yearPrice}
            planMode={selectedPlan}
            selected={checkSelectedAddOn(addOn.id)}
            selectAddOn={handleSelectAddOns}
          />
        );
      })}
    </div>
  );
};

export default ContentAddOns;
