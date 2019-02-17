import React from 'react';
import MapContainer from '../GoogleMaps/MapContainer';

let coordinates = [];
let names = ['Rudy', 'Tommy', 'Ian', 'Jose', 'Carlos', 'Maria', 'Tim', 'Erick', 'Oscar', 'Donald', 'Robert', 'Kenneth']; 

export class GeoCode extends React.Component {

	randomLocationGenerator() {

		let chooseName = names[Math.floor(Math.random()*names.length-1)];
		let chooseSignX = Math.random()*2;
		let chooseSignY = Math.random()*2;
		let randX = Math.random()*85;
		let randY = Math.random()*85;

		if(chooseSignX === 1) {
			randX *= -1;
		}

		if(chooseSignY === 0) {
			randY *= -1;
		}

		coordinates.push({
			longitude:randX,
			latitude:randY,
			name:chooseName
		});

	}

	generate(amount) {
		for(let i = 0; i < amount; i++) {
			this.randomLocationGenerator();
		}
		return coordinates;
	}

	render() {
		return(

			<MapContainer coordinates={this.generate(999)}/>
		)
	}
};