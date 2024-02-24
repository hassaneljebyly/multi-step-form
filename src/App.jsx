import arcadeSVG from './assets/images/icon-arcade.svg';
import advancedSVG from '././assets/images/icon-advanced.svg';
import proSVG from '././assets/images/icon-pro.svg';
import TextInput from './components/TextInput';
import RadioInput from './components/RadioInput';
import ToggleSwitchInput from './components/ToggleSwitchInput';
import CheckBoxInput from './components/CheckBoxInput';
import Summary from './components/Summary';
import ThankYou from './components/ThankYou';
import CtaButton from './components/CtaButton';
import StepIndicator from './components/StepIndicator';

let textInputs = [
  { id: 'name', type: 'text', errorMessage: 'required', placeHolder: 'e.g. Stephen King' },
  { id: 'email-address', type: 'text', errorMessage: 'required', placeHolder: 'e.g. stephenking@lorem.com' },
  { id: 'phone-number', type: 'number', errorMessage: 'required', placeHolder: 'e.g. +1 234 567 890' },
];

let radioInputs = [
  { id: 'arcade', icon: arcadeSVG, billingCycle: 'mo', billingCycleFee: '$9' },
  { id: 'advanced', icon: advancedSVG, billingCycle: 'mo', billingCycleFee: '$12' },
  { id: 'pro', icon: proSVG, billingCycle: 'mo', billingCycleFee: '$15' },
];
let checkBoxInputs = [
  { id: 'online-services', description: 'access to multiplayer games', price: '$1' },
  { id: 'larger-storage', description: 'extra 1TB of cloud save', price: '$2' },
  { id: 'customizable-profile', description: 'custom theme on your profile', price: '$2' },
];

function App() {
  return (
    <>
      <h1># Components</h1>
      <h2>## input</h2>
      {/* <p>text input</p> */}
      {/* <p>radio input</p> */}
      {/* <p>switch input (select input)</p> */}
      {/* <p>select input</p> */}
      <h2>## ctas and buttons</h2>
      <p>confirm/next step (contained button)</p>
      <p>go back (text button)</p>
      {textInputs.map((input) => {
        return <TextInput key={input.id} {...input} />;
      })}
      {radioInputs.map((input) => {
        return <RadioInput key={input.id} {...input} />;
      })}
      <ToggleSwitchInput />
      {checkBoxInputs.map((input) => {
        return <CheckBoxInput key={input.id} {...input} />;
      })}
      <Summary />
      <ThankYou />
      <CtaButton />
      <StepIndicator />
    </>
  );
}

export default App;
