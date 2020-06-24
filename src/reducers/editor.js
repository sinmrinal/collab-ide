const initialState = {
  value: "// select language and type your code here",
  theme: "monokai",
  mode: "",
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  fontSize: 16,
  showGutter: true,
  showPrintMargin: true,
  highlightActiveLine: true,
  enableSnippets: false,
  showLineNumbers: true
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LANGUAGE':
      return { ...state, mode: action.payload };
    case 'THEME':
      return { ...state, theme: action.payload };
    case 'VALUE':
      return { ...state, value: action.payload };
    case 'ENABLE_BASIC_AUTOCOMPLETION':
      return { ...state, enableBasicAutocompletion: action.payload };
    case 'ENABLE_LIVE_AUTOCOMPLETION':
      return { ...state, enableLiveAutocompletion: action.payload };
    case 'FONT_SIZE':
      return { ...state, fontSize: action.payload };
    case 'SHOW_GUTTER':
      return { ...state, showGutter: action.payload };
    case 'SHOW_PRINT_MARGIN':
      return { ...state, showPrintMargin: action.payload };
    case 'HIGHLIGHT_ACTIVE_LINE':
      return { ...state, highlightActiveLine: action.payload };
    case 'ENABLE_SNIPPETS':
      return { ...state, enableSnippets: action.payload };
    case 'SHOW_LINE_NUMBERS':
      return { ...state, showLineNumbers: action.payload };
    default:
      return state;
  }
};

export default editorReducer;