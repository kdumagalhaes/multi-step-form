import { Content } from '../../components/Content';
import Title from '../../components/Title';

const Summary = () => {
  return (
    <>
      <Title
        primaryTitle='Finishing up'
        secondaryTitle='Check everything looks OK before confirming.'
      />
      <Content.Root>
        <Content.Summary />
      </Content.Root>
    </>
  );
};

export default Summary;
