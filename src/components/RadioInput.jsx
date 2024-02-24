/* eslint-disable react/prop-types */

export default function RadioInput({ id, icon, billingCycle, billingCycleFee }) {
  return (
    <div className="RadioInput flow">
      <img className="RadioInput__icon" src={icon} alt="" />
      <label className="RadioInput__label" htmlFor={id}>
        {id.replace('-', ' ')}
      </label>
      <span className="RadioInput__helper-text billing-cycle">{`${billingCycleFee}/${billingCycle}`}</span>
      <span className="RadioInput__helper-text bonus">2 months free</span>
      <input className="RadioInput__controls" type="radio" name="plan" id={id} />
    </div>
  );
}
