/* eslint-disable react/prop-types */
import { content } from '../../formContent';
import { useFormContext } from './../../hooks/useFormContext';

export default function Fieldset({ children }) {
  const { formState } = useFormContext();
  const { title, description } = content[formState.currentStep];
  return (
    <fieldset className="Fieldset">
      {/* wrapping legend in span makes legend go inside fieldset borders */}
      <span>
        <legend className="Fieldset__legend">
          <h2 className="Fieldset__title">{title}</h2>
          <p className="Fieldset__description">{description}</p>
        </legend>
      </span>
      {children}
    </fieldset>
  );
}
