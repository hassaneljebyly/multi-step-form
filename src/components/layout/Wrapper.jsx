import FormContextProvider from '../../context/FormContextProvider';
import StepsList from '../StepsList';
import Form from './Form';
// import ThankYou from './../ThankYou';

export default function Wrapper() {
  return (
    <div className="container container--full-center">
      <div className="Wrapper">
        <FormContextProvider>
          <div className="Wrapper__side-panel" aria-hidden="true">
            <StepsList />
          </div>
          <div className="Wrapper__form-container">
            <Form />
            {/* <ThankYou /> */}
          </div>
        </FormContextProvider>
      </div>
    </div>
  );
}
