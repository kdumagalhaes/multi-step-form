import { Content } from "../../components/Content";
import Title from "../../components/Title";

const UserInfo = () => {
  return (
    <>
      <Title
        primaryTitle="Personal info"
        secondaryTitle="Please provide name, email address, and phone number."
      />
      <Content.Root>
        <Content.UserInfo />
      </Content.Root>
    </>
  );
};

export default UserInfo;
