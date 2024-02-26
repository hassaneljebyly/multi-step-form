import Fieldset from './Fieldset';
import TextInput from './../TextInput';

let textInputs = [
  { id: 'name', type: 'text', errorMessage: 'required', placeHolder: 'e.g. Stephen King' },
  { id: 'email-address', type: 'text', errorMessage: 'required', placeHolder: 'e.g. stephenking@lorem.com' },
  { id: 'phone-number', type: 'number', errorMessage: 'required', placeHolder: 'e.g. +1 234 567 890' },
];

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
