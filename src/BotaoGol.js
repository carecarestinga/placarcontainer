import React, { Component } from 'react';

export default class BotaoGol extends Component {


	handleClick(event) {

		event.preventDefault();

		this.props.marcarGol();

	}


    render() {

        return (           
<div>


<button onClick={ this.handleClick.bind(this) } >Gol</button>


</div>
        );
    }
}