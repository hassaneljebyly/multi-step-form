/* eslint-disable react/prop-types */
import { useFormContext } from './../hooks/useFormContext';

export default function TextInput({ id, label, type, placeHolder }) {
  const { handleChange, formState } = useFormContext();
  const { errorInputID, message } = formState.textFieldErrors || {};
  return (
    <div className="TextInput">
      <label className="TextInput__label" htmlFor={id}>
        {label.replace('-', ' ')}
      </label>
      <span className="TextInput__error" id={id + '-errorMessage'} aria-hidden={errorInputID != id}>
        {message}
      </span>
      <input className="TextInput__controls" type={type} id={id} name={id} placeholder={placeHolder} aria-describedby={id + '-errorMessage'} aria-required="true" value={formState[id]} onChange={handleChange} />
    </div>
  );
}
