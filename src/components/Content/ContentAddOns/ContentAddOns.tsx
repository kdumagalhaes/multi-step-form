import { useEffect, useState } from "react";
import { ADD_ONS, AddOn } from "../../../constants/addOns";
import { localStorageKey } from "../../../constants/localStorageKeys";
import { PlansModes } from "../../../constants/plans";
import AddOnSelector from "../../AddOnSelector";

const ContentAddOns = () => {
  const selectedPlan = localStorage.getItem(localStorageKey.PLAN_MODE) as PlansModes;
  
  const [addOnsList, setAddOnsList] = useState<AddOn[]>(ADD_ONS);
  const [updatedAddOnsIDList, setUpdatedAddOnsIDList] = useState<string[]>([]);

  const isAddOnIDincluded = (list: string[], id: string) => {
    return list.includes(id);
  };

  const handleSelectAddOns =  (addOnID: string) => {
    const updatedIDList = isAddOnIDincluded(updatedAddOnsIDList, addOnID) 
    ? updatedAddOnsIDList.filter((id) => id !== addOnID) 
    :  [...updatedAddOnsIDList, addOnID];

    setUpdatedAddOnsIDList(updatedIDList);
    localStorage.setItem(localStorageKey.ADD_ONS, JSON.stringify(updatedIDList));

    const updatedAddOnsList = addOnsList.map((addOn) =>
      addOn.id === addOnID ? { ...addOn, selected: !addOn.selected } : addOn
  );

    setAddOnsList(updatedAddOnsList);
  };

  useEffect(() => {
    const currentSelectedAddOnsIDs = localStorage.getItem(localStorageKey.ADD_ONS);
    const storedAddOns = currentSelectedAddOnsIDs 
    ? JSON.parse(currentSelectedAddOnsIDs) 
    : [];

    setUpdatedAddOnsIDList(storedAddOns);

  }, []);


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
            selected={updatedAddOnsIDList.includes(addOn.id)}
            selectAddOn={handleSelectAddOns}
          />
        );
      })}
    </div>
  );
};

export default ContentAddOns;
