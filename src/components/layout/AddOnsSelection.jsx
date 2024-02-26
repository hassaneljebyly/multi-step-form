import Fieldset from './Fieldset';
import CheckBoxInput from './../CheckBoxInput';

let checkBoxInputs = [
  { id: 'online-services', description: 'access to multiplayer games', price: '$1' },
  { id: 'larger-storage', description: 'extra 1TB of cloud save', price: '$2' },
  { id: 'customizable-profile', description: 'custom theme on your profile', price: '$2' },
];

export default function AddOnsSelection() {
  return (
    <Fieldset>
      <div className="Fieldset__checkbox-input flow">
        {checkBoxInputs.map((input) => {
          return <CheckBoxInput key={input.id} {...input} />;
        })}
      </div>
    </Fieldset>
  );
}
