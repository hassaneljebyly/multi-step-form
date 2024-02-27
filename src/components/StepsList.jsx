/* eslint-disable react/prop-types */
import { useFormContext } from './../hooks/useFormContext';
import { steps } from '../formContent';

function StepIndicator({ id, title }) {
  const { formState } = useFormContext();
  return (
    <li className={`StepIndicator ${id === formState.currentStep && 'StepIndicator--active'}`}>
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
