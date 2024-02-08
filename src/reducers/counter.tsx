interface Action {
  type: string;
}
const counter = (state = 0, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};
export default counter;
