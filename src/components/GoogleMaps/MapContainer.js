import React from 'react';
import GoogleMapReact from 'google-map-react';
import {AddMarker} from './AddMarker';

class MapContainer extends React.Component {

  static defaultProps = {
    center: {lat: 25, lng: 32},
    zoom: 0
  };

  /*
	The render function:
		-To add more markers for the map, use <AddMarker/>
  */


  render() {
    return (
    	<div style={{ height: '70vh', width: '100%' }}>
       <GoogleMapReact
       	bootstrapURLKeys={{ key: 'AIzaSyAa8YlFzBtsS8LsfVMlnSmhEM6V2MCRqMo'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      > 
        {
          this.props.coordinates.map(coordinate => {
            return <AddMarker lat={coordinate.latitude} lng={coordinate.longitude} text={coordinate.name}/>;
          })
        }

      </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;