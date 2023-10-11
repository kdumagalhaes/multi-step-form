import { Content } from '../../components/Content';
import Title from '../../components/Title';

const SelectPlan = () => {
  return (
    <>
      <Title
        primaryTitle='Select your plan'
        secondaryTitle='You have the option of monthly or yearly billing.'
      />
      <Content.Root>
        <Content.SelectPlan />
      </Content.Root>
    </>
  );
};

export default SelectPlan;
