import Fieldset from './Fieldset';
import RadioInput from './../RadioInput';
import ToggleSwitchInput from './../ToggleSwitchInput';
import arcadeSVG from '../../assets/images/icon-arcade.svg';
import advancedSVG from '../../assets/images/icon-advanced.svg';
import proSVG from '../../assets/images/icon-pro.svg';

let radioInputs = [
  { id: 'arcade', icon: arcadeSVG, billingCycle: 'mo', billingCycleFee: '$9' },
  { id: 'advanced', icon: advancedSVG, billingCycle: 'mo', billingCycleFee: '$12' },
  { id: 'pro', icon: proSVG, billingCycle: 'mo', billingCycleFee: '$15' },
];

export default function PlanSelection() {
  return (
    <Fieldset>
      <div className="Fieldset__radio-input">
        {radioInputs.map((input) => {
          return <RadioInput key={input.id} {...input} />;
        })}
      </div>
      <div className="Fieldset__switch-input">
        <ToggleSwitchInput />
      </div>
    </Fieldset>
  );
}
