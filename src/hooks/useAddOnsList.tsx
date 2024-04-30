import { useCallback, useEffect, useState } from "react";
import { localStorageKey } from "../constants/localStorageKeys";
import { ADD_ONS, AddOn } from "../constants/addOns";

const useAddOnsList = () => {  
  const [addOnsList, setAddOnsList] = useState<AddOn[]>(ADD_ONS);
  const [updatedAddOnsIDList, setUpdatedAddOnsIDList] = useState<string[]>([]);

  const checkSelectedAddOn = (addOnID: string) => {
    const isAddOnSelected = updatedAddOnsIDList.includes(addOnID);
    return isAddOnSelected;
  };

  const isAddOnIDincluded = (list: string[], id: string) => {
    return list.includes(id);
  };

  const handleSelectAddOns =  useCallback((addOnID: string) => {
    const updatedIDList = isAddOnIDincluded(updatedAddOnsIDList, addOnID) 
    ? updatedAddOnsIDList.filter((id) => id !== addOnID) 
    :  [...updatedAddOnsIDList, addOnID];

    setUpdatedAddOnsIDList(updatedIDList);
    localStorage.setItem(localStorageKey.ADD_ONS, JSON.stringify(updatedIDList));

    const updatedAddOnsList = addOnsList.map((addOn) =>
      addOn.id === addOnID ? { ...addOn, selected: !addOn.selected } : addOn
  );

    setAddOnsList(updatedAddOnsList);
  }, [addOnsList, updatedAddOnsIDList]);

  useEffect(() => {
    const currentSelectedAddOnsIDs = localStorage.getItem(localStorageKey.ADD_ONS);
    const storedAddOns = currentSelectedAddOnsIDs 
    ? JSON.parse(currentSelectedAddOnsIDs) 
    : [];

    setUpdatedAddOnsIDList(storedAddOns);

  }, []);

  return {
    handleSelectAddOns,
    checkSelectedAddOn,
    addOnsList
  };
};

export default useAddOnsList;