/* eslint-disable react/prop-types */
export default function TextInput({ id, type, errorMessage, placeHolder }) {
  return (
    <div className="TextInput">
      <label className="TextInput__label" htmlFor={id}>
        {id.replace('-', ' ')}
      </label>
      <span className="TextInput__error" id="errorMessage" aria-hidden="true">
        {errorMessage}
      </span>
      <input className="TextInput__controls" type={type} id={id} placeholder={placeHolder} aria-describedby="errorMessage" aria-required="true" />
    </div>
  );
}
