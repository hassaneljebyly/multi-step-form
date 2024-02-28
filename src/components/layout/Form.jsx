import { useFormContext } from './../../hooks/useFormContext';
import PersonalInfo from './PersonalInfo';
import PlanSelection from './PlanSelection';
import AddOnsSelection from './AddOnsSelection';
import FinishingUp from './FinishingUp';
import { content, steps } from './../../formContent';

export default function Form() {
  const {
    formState: { currentStep },
    handleStepNext,
    handleStepBack,
  } = useFormContext();
  let showBackButton = currentStep > 1;
  let showConfirm = currentStep === steps.length;

  function setStepFieldSet(currentStep) {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;

      case 2:
        return <PlanSelection />;

      case 3:
        return <AddOnsSelection />;

      case 4:
        return <FinishingUp />;

      default:
        break;
    }
  }

  return (
    <form className="Form" action="">
      <div className="Form__fieldset-group">{setStepFieldSet(currentStep, content)}</div>
      <div className="Form__button-group">
        {showBackButton && (
          <button className="CtaButton CtaButton--text" onClick={handleStepBack}>
            go back
          </button>
        )}
        <button className="CtaButton CtaButton--contained" onClick={handleStepNext}>
          {showConfirm ? 'confirm' : 'next step'}
        </button>
      </div>
    </form>
  );
}
