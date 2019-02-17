import React from 'react';
import GoogleMapReact from 'google-map-react';

const AddMarker = ({ text }) => (
  <div style={{
    color: 'white', 
    background: '#0277bd',
    padding: '15px',
    width: '35px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class MapContainer extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		lat:this.props.latitude,
  		lng:this.props.length
  	};
  }

  static defaultProps = {
    center: {lat: 41.881832, lng: -87.623177},
    zoom: 15
  };

  /*
	The render function:
		-To add more markers for the map, use <AddMarker/>
  */
  render() {
    return (
    	<div style={{ height: '100vh', width: '100%' }}>
       <GoogleMapReact
       	bootstrapURLKeys={{ key: 'AIzaSyAa8YlFzBtsS8LsfVMlnSmhEM6V2MCRqMo'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AddMarker 
          lat={this.state.lat} 
          lng={this.state.lng} 
          text={'Tommy'} 
        />
      </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;