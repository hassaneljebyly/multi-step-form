/* eslint-disable react/prop-types */
function CheckBoxInput({ id, description, price }) {
  return (
    <label className="CheckBoxInput">
      <input className="CheckBoxInput__controls" type="checkbox" name={id} id={id} />
      <span className="CheckBoxInput__label">{id.replace('-', ' ')}</span>
      <span className="CheckBoxInput__description">{description}</span>
      <span className="CheckBoxInput__price">{`+${price}/mo`}</span>
    </label>
  );
}

export default CheckBoxInput;
