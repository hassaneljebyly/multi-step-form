import { useEffect, useState } from 'react';
import { initialFormValues } from '../formContent';
import * as yup from 'yup';

// schema for yup validation
const schema = yup.object().shape({
  nameInput: yup.string().required('this field is required'),
  emailInput: yup.string().email('must be a valid email').required('this field is required'),
  phoneInput: yup.string().max(15).required('this field is required'),
});

const useFormState = () => {
  const initialFormState = JSON.parse(localStorage.getItem('initialFormValues')) || initialFormValues;

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    localStorage.setItem('initialFormValues', JSON.stringify(formState));
  }, [formState]);

  function handleEditPlan(e) {
    e.preventDefault();
    setFormState({
      ...formState,
      currentStep: 2,
    });
  }
  function handleStepBack(e) {
    e.preventDefault();
    formState.currentStep > 1
      ? setFormState({
          ...formState,
          currentStep: formState.currentStep - 1,
        })
      : '';
  }
  function handleStepNext(e) {
    e.preventDefault();
    // data object that need to be validated
    const data = {
      nameInput: formState.nameInput,
      emailInput: formState.emailInput,
      phoneInput: formState.phoneInput,
    };

    // trigger validation rule
    schema
      .validate(data)
      .then(() => {
        formState.currentStep <= 4
          ? setFormState({
              ...formState,
              textFieldErrors: null,
              currentStep: formState.currentStep + 1,
            })
          : '';
      })
      .catch((error) => {
        setFormState({
          ...formState,
          textFieldErrors: { errorInputID: error.params.path, message: error.errors[0] },
        });
      });
  }

  function handleChange(e) {
    if (formState.currentStep === 3) {
      setFormState({
        ...formState,
        selectedAddOns: { ...formState.selectedAddOns, [e.target.name]: !formState.selectedAddOns[e.target.name] },
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  }

  return {
    formState,
    handleChange,
    handleStepNext,
    handleStepBack,
    handleEditPlan,
  };
};

export default useFormState;
