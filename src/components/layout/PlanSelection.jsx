import Fieldset from './Fieldset';
import RadioInput from './../RadioInput';
import ToggleSwitchInput from './../ToggleSwitchInput';
import { radioInputs } from '../../formContent';

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
