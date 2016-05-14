import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions';

import {combineReducers} from 'redux';

const INITIAL_STATE = {value:0}

function counterReducer(state = INITIAL_STATE, action){
	console.log(action);
	switch (action.type){
		case INCREMENT_COUNTER : return {value:state.value+1};
		case DECREMENT_COUNTER : return {value:state.value-1};
	}

	return state;
} 

export default combineReducers({
	counter:counterReducer
});