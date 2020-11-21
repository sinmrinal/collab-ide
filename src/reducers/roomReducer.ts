const initialState = {
  isCreated: false,
  id: "",
  name: "",
  username: "",
  created_by: "",
  active_users: [],
};

const roomReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'IS_CREATED':
      return { ...state, isCreated: action.payload };
    case 'ID':
      return { ...state, id: action.payload };
    case 'NAME':
      return { ...state, name: action.payload };
    case 'USERNAME':
      return { ...state, username: action.payload };
    case 'CREATED_BY':
      return { ...state, created_by: action.payload };
    case 'ACTIVE_USERS':
      return { ...state, active_users: action.payload };
    default:
      return state;
  }
};

export default roomReducer;