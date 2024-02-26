import { useContext } from 'react';
import { FormContext } from './../context/FormContextProvider';

export const useFormContext = () => {
  const formState = useContext(FormContext);
  return formState;
};
