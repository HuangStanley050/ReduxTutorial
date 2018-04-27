var redux = require("redux");
var createStore = redux.createStore;

let initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === "INC_COUNTER") {
        var newState = Object.assign(state);
        newState.counter = newState.counter + 1;
        //console.log(newState.counter);
        return newState;
    }

    if (action.type === "ADD_COUNTER") {
        var newState = Object.assign(state);
        newState.counter = newState.counter + action.value;
        //console.log(newState.counter);
        return newState;
    }


    return state;
}



//Store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(() => {
    console.log("[Subscription]", store.getState());
});




//Dispatch an action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
