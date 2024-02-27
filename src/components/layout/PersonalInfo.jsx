import Fieldset from './Fieldset';
import TextInput from './../TextInput';
import { textInputs } from '../../formContent';

export default function PersonalInfo() {
  return (
    <Fieldset>
      <div className="Fieldset__text-input flow">
        {textInputs.map((input) => {
          return <TextInput key={input.id} {...input} />;
        })}
      </div>
    </Fieldset>
  );
}
