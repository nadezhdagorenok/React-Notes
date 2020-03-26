import  React  from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import './inputs.css';

const errors={
    isRequired: 'This field is required',
    wrongSymbols: 'Type correct symbols',
    serverError: 'Server error'
}

export const TextInput = ({value, onChange, isValid, placeholder, type, max}) => {

//   const errorMessage = (
//     <ErrorMessage
//       title={!value ? errors.isRequired : errors.wrongSymbols}
//     />
//   );

  return (
      <div className="inputBlock">
           {
            !isValid && (
                <ErrorMessage
                  title={!value ? errors.isRequired : errors.wrongSymbols}
                />
              )
        }
        <input
          className="input"
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={max}
          type={type}
        />
      </div>
  )
};
