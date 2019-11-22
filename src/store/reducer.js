import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';



const pageReducer = (state = { active: 0, data: [] }, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'INCREAMENT_PAGE':
            return {
                ...state,
                active: (state.active + 1) % state.data.length
            }
        case 'DECREAMENT_PAGE':
            if (state.active === 0)
                return {
                    ...state,
                    active: state.data.length - 1
                }
            return {
                ...state,
                active: state.active - 1
            }

            default:
                return state
    }
    /*if (action.type === 'INCREAMENT_PAGE' && state.active < state.data.length) {
        return (state.active + 1) % dataList.length;
    } else if (action.type === 'DECREAMENT_PAGE') {
        if (state.active === 0)
            return {
                ...state,
                active: state.data.length - 1
            }
        return {
            ...state,
            active: state.active - 1
        }
    }
    return state;*/
}
var store = createStore(pageReducer, compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;