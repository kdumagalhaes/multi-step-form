import { Navigation } from './components/Navigation';
import Step from './components/Step';

function App() {
  return (
    <>
    <Navigation.Bar >
      <Step stepInfo='Your info' stepNumber='1' isActive />
      <Step stepInfo='Select plan' stepNumber='2' isActive={false} />
      <Step stepInfo='Add-ons' stepNumber='3' isActive={false} />
      <Step stepInfo='Summary' stepNumber='4' isActive={false} />
     </Navigation.Bar> 
      <Navigation.Back />
      <Navigation.Next />
    </>
  );
}

export default App;
