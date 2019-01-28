import TYPE from "../actions/type";

export default (state, action) => {
    switch(action.type) {
        case TYPE.ADD_ERROR:
            return [...state, action.payload];
        case TYPE.CLEAR_ERROR:
            return state.filter((msg) => msg !== action.payload);
        default:
            return state;
    }
};