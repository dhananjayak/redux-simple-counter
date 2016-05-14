import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

class Counter extends Component{
	constructor(props){
		super(props);
	}

	onPlusClick(){
		this.props.increment();
	}

	onMinusClick(){
		this.props.decrement();
	}

	render(){
		return (<div>
					<span>Current Value : {this.props.counter}</span>
					<button onClick={this.onPlusClick.bind(this)}>(+)</button>
					<button onClick={this.onMinusClick.bind(this)}>(-)</button> 
			    </div>);
	}
}

function mapStateToProps(state){
	return {counter:state.counter.value};
}

export default connect(mapStateToProps, {increment, decrement})(Counter);