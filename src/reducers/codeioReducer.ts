const initialState = {
  input: "",
  output: "",
  language: "",
};

const codeioReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, input: action.payload };
    case 'OUTPUT':
      return { ...state, output: action.payload };
    case 'LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default codeioReducer;