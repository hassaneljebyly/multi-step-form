import StepsList from '../StepsList';
import Form from './Form';
import ThankYou from './../ThankYou';
import { useFormContext } from '../../hooks/useFormContext';
import { steps } from '../../formContent';

export default function Wrapper() {
  const {
    formState: { currentStep },
  } = useFormContext();
  const isEnd = currentStep > steps.length;

  return (
    <div className="container container--full-center">
      <div className="Wrapper">
        <div className="Wrapper__side-panel" aria-hidden="true">
          <StepsList />
        </div>
        <div className="Wrapper__form-container">{!isEnd ? <Form /> : <ThankYou />}</div>
      </div>
    </div>
  );
}
