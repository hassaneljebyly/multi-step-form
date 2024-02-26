import { useFormContext } from './../hooks/useFormContext';

let steps = [
  { id: 1, title: 'your info' },
  { id: 2, title: 'select plan' },
  { id: 3, title: 'add-ons' },
  { id: 4, title: 'summary' },
];

/* eslint-disable react/prop-types */
function StepIndicator({ id, title }) {
  const { currentStep } = useFormContext();
  return (
    <li className={`StepIndicator ${id === currentStep && 'StepIndicator--active'}`}>
      <span className="StepIndicator__icon">{id}</span>
      <span className="StepIndicator__number">Step {id}</span>
      <span className="StepIndicator__title">{title}</span>
    </li>
  );
}

function StepsList() {
  return (
    <ul className="StepsList flow">
      {steps.map((step) => (
        <StepIndicator key={step.id} {...step} />
      ))}
    </ul>
  );
}

export default StepsList;
