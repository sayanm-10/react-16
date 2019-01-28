import TYPE from "../actions/type";

export default (state=null, action) => {
  switch (action.type) {
      case TYPE.ADD_DAY:
          return action.payload;
      default:
          return state;
  }  
};