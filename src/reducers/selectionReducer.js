export default (state = [], action) => {
  console.log(action);

  switch (action.type){
    case "SELECT_LIBRARY":
      return action.payload
    default:
      return state;
  }
}
