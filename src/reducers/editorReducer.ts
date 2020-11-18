const initialState = {
  value: "// select language and type your code here",
  theme: "dracula",
  mode: "python",
  fontSize: 16
};

const editorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'MODE':
      return { ...state, mode: action.payload };
    case 'THEME':
      return { ...state, theme: action.payload };
    case 'VALUE':
      return { ...state, value: action.payload };
    case 'FONT_SIZE':
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};

export default editorReducer;