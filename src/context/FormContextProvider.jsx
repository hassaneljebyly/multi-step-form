/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  function handleStepBack(e) {
    e.preventDefault();
    currentStep > 1 ? setCurrentStep(currentStep - 1) : '';
  }
  function handleStepNext(e) {
    e.preventDefault();
    currentStep < 4 ? setCurrentStep(currentStep + 1) : '';
  }
  return <FormContext.Provider value={{ currentStep, handleStepNext, handleStepBack }}>{children}</FormContext.Provider>;
};
export { FormContext };
export default FormContextProvider;
