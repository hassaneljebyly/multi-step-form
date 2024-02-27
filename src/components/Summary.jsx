import { checkBox } from '../formContent';
import { useFormContext } from './../hooks/useFormContext';

export default function Summary() {
  const {
    handleEditPlan,
    formState: { plan, billingCycle, planPrices, AddOnsPrices, selectedAddOns },
  } = useFormContext();
  const cycle = billingCycle === 'monthly' ? 'mo' : 'yr';
  const planPrice = planPrices[plan][billingCycle === 'monthly' ? 0 : 1];

  let total = planPrice;

  return (
    <div className="Summary">
      <div className="Summary__section Summary__section--plan">
        <p className="Summary__row Summary__row--big">
          <span className="Summary__item Summary__item--cap">
            {plan} ({billingCycle})
          </span>{' '}
          <span className="Summary__price">
            ${planPrice}/{cycle}
          </span>
        </p>
        <a className="Summary__edit-plan" href="#" onClick={handleEditPlan}>
          change
        </a>
      </div>
      <div className="Summary__section Summary__section--addons flow">
        {checkBox.map(({ id, label }) => {
          if (selectedAddOns[id]) {
            //
            let addOnPrice = AddOnsPrices[id][billingCycle === 'monthly' ? 0 : 1];
            total += addOnPrice;

            return (
              <p key={id} className="Summary__row">
                <span className="Summary__item">{label}</span>{' '}
                <span className="Summary__price">
                  +${addOnPrice}/{cycle}
                </span>
              </p>
            );
          }
        })}
      </div>
      <div className="Summary__section Summary__section--total">
        <p className="Summary__row">
          <span className="Summary__item">total (per year)</span>{' '}
          <span className="Summary__price Summary__price--total">
            ${total}/{cycle}
          </span>
        </p>
      </div>
    </div>
  );
}
