export const INCREMENT_COUNTER = 'INCREMENT COUNTER BY 1';
export const DECREMENT_COUNTER = 'DECREMENT COUNTER BY 1';

export function increment(){
	return {
		type:INCREMENT_COUNTER
	};
}

export function decrement(){
	return {
		type:DECREMENT_COUNTER
	};
}
