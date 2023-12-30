import { useCallback, useState } from "react";
import { ADD_ONS } from "../../../constants/addOns";
import { localStorageKey } from "../../../constants/localStorageKeys";
import { PlansModes } from "../../../constants/plans";
import AddOnSelector from "../../AddOnSelector";

const ContentAddOns = () => {
  const selectedPlan = localStorage.getItem(localStorageKey.PLAN_MODE) as PlansModes;
  
  const [updatedAddOnsIDList, setUpdatedAddOnsIDList] = useState<string[]>([]);

  const isAddOnIDincluded = (list: string[],id: string) => {
    return list.includes(id);
  };

  const handleSelectAddOns = useCallback( (addOnID: string) => {
    const updatedIDList = isAddOnIDincluded(updatedAddOnsIDList, addOnID) 
    ? updatedAddOnsIDList.filter((id) => id !== addOnID) 
    :  [...updatedAddOnsIDList, addOnID];

    setUpdatedAddOnsIDList(updatedIDList);
    localStorage.setItem(localStorageKey.ADD_ONS, JSON.stringify(updatedIDList));
  }, [updatedAddOnsIDList]);


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
            selectAddOn={handleSelectAddOns}
          />
        );
      })}
    </div>
  );
};

export default ContentAddOns;
