export default (state = null, action) => {
  console.log(action);

  switch (action.type){
    case "SELECT_LIBRARY":
      if(action.payload === state){
        return null;
      }
      return action.payload;
    default:
      return state;
  }
}
