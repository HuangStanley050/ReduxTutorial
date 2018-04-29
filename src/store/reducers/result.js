import * as actionTypes from "../action.js";


const initialState = {

    results: []
}

const reducer = (state = initialState, action) => {


    if (action.type === actionTypes.STORE_RESULT) {
        //console.log(state.results);
        return {
            ...state,
            results: state.results.concat({ id: new Date(), value: action.result })
        }
    }
    if (action.type === actionTypes.DELETE_RESULT) {
        const updatedArray = state.results.filter(result => result.id !== action.id);
        return {
            ...state,
            results: updatedArray

        }
    }
    return state;
}

export default reducer;
