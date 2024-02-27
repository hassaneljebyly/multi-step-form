/* eslint-disable react/prop-types */
import { useFormContext } from './../hooks/useFormContext';

export default function RadioInput({ id, icon }) {
  const { formState, handleChange } = useFormContext();
  const [monthlyPrice, yearlyPrice] = formState.planPrices[id];
  const price = formState.billingCycle === 'monthly' ? monthlyPrice : yearlyPrice;
  const billingCycle = formState.billingCycle === 'monthly' ? 'mo' : 'yr';
  return (
    <div className="RadioInput flow">
      <img className="RadioInput__icon" src={icon} alt="" />
      <label className="RadioInput__label" htmlFor={id}>
        {id.replace('-', ' ')}
      </label>
      <span className="RadioInput__helper-text billing-cycle">{`$${price}/${billingCycle}`}</span>
      <span className="RadioInput__helper-text bonus">{formState.billingCycle === 'yearly' ? '2 free months' : ''}</span>
      <input className="RadioInput__controls" type="radio" name="plan" value={id} id={id} onChange={handleChange} checked={formState.plan === id} />
    </div>
  );
}
