export const initialState = {
    name: '',
    email: '',
    note: '',
    emailIsValid: true,
    noteIsValid: true,
    nameIsValid: true,
    isValidForm: true,
    isSuccessForm: false
  };
  
 export const reducer = (state, action) => {
    switch (action.type) {
      case 'changeEmail':
        return {
          ...state,
          email: action.text,
          emailIsValid: action.isValid,
        };
        case 'changeName':
        return {
          ...state,
          name: action.text,
          nameIsValid: action.isValid,
        };
        case 'changeNote':
            return {
              ...state,
              note: action.text,
              nameIsValid: action.isValid,
            };
      case 'isValidForm':
        return {
          ...state,
          isValidForm: action.isValid,
        };
  
      case 'resetForm':
        return {
          ...state,
          name: '',
          email: '',
          note: '',
          isSuccessForm: true,
        };
  
      default:
        throw new Error();
    }
  };
    