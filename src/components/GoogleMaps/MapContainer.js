import React from 'react';
import GoogleMapReact from 'google-map-react';
import {AddMarker} from './AddMarker';

let name = ['johnny', 'rudy', 'john', 'someone', 'Tommy'];

class MapContainer extends React.Component {

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

        <AddMarker lat={this.props.coordinates[0].latitude} lng={this.props.coordinates[0].longitude} text={name[0]}/>
        
        {
          this.props.coordinates.map(coordinate => {
            return <AddMarker lat={coordinate.latitude} lng={coordinate.longitude} text={name[0]}/>;
          })
        }

      </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;