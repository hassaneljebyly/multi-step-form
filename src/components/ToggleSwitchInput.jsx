import { useFormContext } from './../hooks/useFormContext';
export default function ToggleSwitchInput() {
  const { formState, handleChange } = useFormContext();
  return (
    <label className="ToggleSwitchInput">
      <span className="ToggleSwitchInput__label sr-only">choose a monthly or yearly billing cycle</span>
      <span className="ToggleSwitchInput__left-choice">Monthly</span>
      <input
        className="ToggleSwitchInput__controls"
        type="checkbox"
        role="switch"
        value={formState.billingCycle}
        name="billingCycle"
        id="switch-toggle"
        onChange={(e) => {
          e.target.defaultChecked = !e.target.defaultChecked;
          e.target.value = e.target.defaultChecked ? 'yearly' : 'monthly';
          handleChange(e);
        }}
        checked={formState.billingCycle === 'yearly'}
      />
      <span className="ToggleSwitchInput__right-choice">Yearly</span>
    </label>
  );
}
