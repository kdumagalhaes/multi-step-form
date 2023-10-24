import { ADD_ONS } from '../../../constants/addOns';
import { useAppSelector } from '../../../redux/store';
import AddOnSelector from '../../AddOnSelector';

const ContentAddOns = () => {
  const selectedPlan = useAppSelector((state) => state.plan.planMode)

  return (
    <div>
      {ADD_ONS.map((addOn) => {
        return (
          <AddOnSelector
            title={addOn.title}
            description={addOn.description}
            isChecked={addOn.isChecked}
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
