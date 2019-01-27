import TYPE from "../actions/type";

const INITIAL_GOAL = 10;

export default (state = INITIAL_GOAL, action) => {
    switch (action) {
        case TYPE.SET_GOAL:
            return parseInt(action.payload);
        default:
            return state;
    }
}