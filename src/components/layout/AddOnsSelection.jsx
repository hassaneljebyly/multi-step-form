import Fieldset from './Fieldset';
import CheckBoxInput from './../CheckBoxInput';
import { checkBox } from '../../formContent';

export default function AddOnsSelection() {
  return (
    <Fieldset>
      <div className="Fieldset__checkbox-input flow">
        {checkBox.map((input) => {
          return <CheckBoxInput key={input.id} {...input} />;
        })}
      </div>
    </Fieldset>
  );
}
