import React from 'react'
import {initialState, reducer} from './reducer.js'
import './form.css'
import {TextInput} from '../Inputs/TextInput'
import {checkIsValidString} from '../../helpers/checkIsValid'
import {emailRegexPattern, textRegexPattern} from '../../helpers/regexPatterns'


export const Form = React.memo(
    ({addNote}) => {
      const [state, dispatch] = React.useReducer(reducer, initialState);
  
      const handleAddNote = (e) => {
        e.preventDefault();
        if (!state.nameIsValid || !state.name || !state.email || !state.note
          || !state.emailIsValid || !state.noteIsValid){ 
          dispatch({
            type: 'isValidForm',
            isValid: false,
          });
          return;
        }
          dispatch({
            type: 'isValidForm',
            isValid: true,
          });
        addNote([{
            name: state.name,
            email: state.email,
            note: state.note
        }])
        dispatch({
            type: 'resetForm',
          });
      };
      return (
        <div
          className="formContainer"
        >
              <div className="formBlock">
                <div className="textInput">
                  <TextInput
                    value={state.name}
                    placeholder="Type your name"
                    type="text"
                    max={90}
                    onChange={e => {
                      let isNameValid;
                        isNameValid = !!e.target.value && checkIsValidString(textRegexPattern, e.target.value);
                      dispatch({
                        type: 'changeName',
                        isValid: isNameValid,
                        text: e.target.value,
                      });
                    }
                    }
                    isValid={state.nameIsValid || state.isValidForm}
                  />
                  <TextInput
                    value={state.email}
                    placeholder="Type your email"
                    type="text"
                    max={90}
                    onChange={e => {
                      let isEmailValid;
                      isEmailValid = !!e.target.value && checkIsValidString(emailRegexPattern, e.target.value);
                     
                      dispatch({
                        type: 'changeEmail',
                        isValid: isEmailValid,
                        text: e.target.value,
                      });
                    }
                    }
                    isValid={state.emailIsValid || state.isValidForm}
                  />
                    <TextInput
                      value={state.note}
                      placeholder="Type your note"
                      type="textarea"
                      max={200}
                      onChange={e => {
                        let isNoteValid = true;
                        if(!state.noteIsValid){
                          isNoteValid = !!e.target.value;
                        }
                      dispatch({
                        type: 'changeNote',
                        isValid: isNoteValid,
                        text: e.target.value,
                      });
                    }
                    }
                    isValid={state.noteIsValid || state.isValidForm}
                  />
                  <button
                    type="button"
                    className="addButton"
                    onClick={handleAddNote}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )
          }
  
      );

  