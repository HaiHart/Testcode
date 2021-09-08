import React, { Component } from 'react'


export default class List extends Component {
	render() {
			const { ID, Name } = this.props.who
		return (
			<div className="col-8 mx-auto col-md-6 col-lg-6 text-center text-align-content-center text-capitalize" id="modal">
				<h3>{ID}&nbsp;{Name}</h3>
			</div>
		)
	}
}
