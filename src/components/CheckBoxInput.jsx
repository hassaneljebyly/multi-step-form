/* eslint-disable react/prop-types */
import { useFormContext } from './../hooks/useFormContext';

function CheckBoxInput({ id, label, description }) {
  const { formState, handleChange } = useFormContext();
  const [monthlyPrice, yearlyPrice] = formState.AddOnsPrices[id];
  const price = formState.billingCycle === 'monthly' ? monthlyPrice : yearlyPrice;
  const billingCycle = formState.billingCycle === 'monthly' ? 'mo' : 'yr';
  return (
    <label className="CheckBoxInput">
      <input className="CheckBoxInput__controls" type="checkbox" name={id} id={id} onChange={handleChange} checked={formState.selectedAddOns[id]} />
      <span className="CheckBoxInput__label">{label}</span>
      <span className="CheckBoxInput__description">{description}</span>
      <span className="CheckBoxInput__price">{`+$${price}/${billingCycle}`}</span>
    </label>
  );
}

export default CheckBoxInput;
