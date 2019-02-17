import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainerSettings.css';

export class MapContainer extends React.Component {
	state = {
	    showingInfoWindow: false,
	    activeMarker: {},
	    selectedPlace: {},
	};

  	onMarkerClick = (props, marker, e) =>
	    this.setState({
	      selectedPlace: props,
	      activeMarker: marker,
	      showingInfoWindow: true
    });

	onMapClicked = (props) => {
	    if (this.state.showingInfoWindow) {
	      this.setState({
	        showingInfoWindow: false,
	        activeMarker: null
	      })
	    }
	};

	translateToGeocode() {

	}

	//Add more elements with <marker/> tag
  	render() {
    	return (
      		<Map google={window.google}
			    style={{width: '100%', height: '60%'}}
			    className={'map'}
			    zoom={14}>
			  <Marker
			    title={'The marker`s title will appear as a tooltip.'}
			    name={'SOMA'}
			    position={{lat: 37.778519, lng: -122.405640}} />
			  <Marker
			    name={'Dolores park'}
			    position={{lat: 37.759703, lng: -122.428093}} />
			  <Marker />
			  <Marker
			    name={'New York City'}
			    position={{lat:40.7128 , lng: -74.0060}} />
			  <Marker />
			</Map>
    )
  }
}

export default GoogleApiWrapper({
	apiKey:('AIzaSyAa8YlFzBtsS8LsfVMlnSmhEM6V2MCRqMo')
})(MapContainer)