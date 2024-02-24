export default function ToggleSwitchInput() {
  return (
    <label className="ToggleSwitchInput">
      <span className="ToggleSwitchInput__label sr-only">choose a monthly or yearly billing cycle</span>
      <span className="ToggleSwitchInput__left-choice">Monthly</span>
      <input className="ToggleSwitchInput__controls" type="checkbox" role="switch" name="billing-cycle" id="switch-toggle" />
      <span className="ToggleSwitchInput__right-choice">Yearly</span>
    </label>
  );
}
