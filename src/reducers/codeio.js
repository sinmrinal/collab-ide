const initialState = {
  input: "",
  output: ""
};

const codeioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'input':
      return action.payload;
    case 'output':
      return action.payload;
    default:
      return state;
  }
};

export default codeioReducer;