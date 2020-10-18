const initialState = {
  input: "",
  output: ""
};

const codeioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT':
      return action.payload;
    case 'OUTPUT':
      return action.payload;
    default:
      return state;
  }
};

export default codeioReducer;