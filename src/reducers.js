import * as types from './actionTypes';

const initialState = {
    count: 0
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case types.INCREMENT_COUNTER:
            return { count: state.count + 1 }
        case types.DECREMENT_COUNTER:
            return { count: state.count - 1 }
        default:
            return state
    }
};

export default reducer;