/* eslint-disable react/prop-types */
import { createContext } from 'react';
import useFormState from '../hooks/useFormState';

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const { formState, handleChange, handleStepNext, handleStepBack, handleEditPlan } = useFormState();

  const providerValue = {
    formState,
    handleStepNext,
    handleStepBack,
    handleChange,
    handleEditPlan,
  };

  return <FormContext.Provider value={providerValue}>{children}</FormContext.Provider>;
};

export { FormContext, FormContextProvider };
