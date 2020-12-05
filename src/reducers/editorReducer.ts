const initialState = {
    value: "",
    theme: "3024-night",
    mode: "",
    fontSize: 18
};

const editorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'MODE':
            return {...state, mode: action.payload};
        case 'THEME':
            return {...state, theme: action.payload};
        case 'VALUE':
            return {...state, value: action.payload};
        case 'FONT_SIZE':
            return {...state, fontSize: action.payload};
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export default editorReducer;