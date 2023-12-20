import { Content } from "../../components/Content";
import Title from "../../components/Title";

const AddOns = () => {
  return (
    <>
      <Title
        primaryTitle="Pick add-ons"
        secondaryTitle="Add-ons help enhance your gaming experience."
      />
      <Content.Root>
        <Content.AddOns />
      </Content.Root>
    </>
  );
};

export default AddOns;
