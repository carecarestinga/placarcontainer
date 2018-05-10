import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {

        return (           
<div>

	<h2>{this.props.estadio}</h2>

	<div>

		<span>{this.props.data}</span>
		<span>-</span>
		<span>{this.props.hora}</span>

	</div>


</div>
        );
    }
}