import React from 'react';
import './AddMarker.css'

export class AddMarker extends React.Component {
	render() {
		return(
			<div className="AddMarker">
				{this.props.text};
			</div>
		);
	}
};