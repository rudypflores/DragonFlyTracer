import React, { Component } from 'react';
import MapContainer from './components/GoogleMaps/MapContainer';
import './App.css';

//Place what will be rendered here
class App extends Component {
  render() {
    return (
    	<div>
	    	<div className="title">
	    		<p>DragonFlyTracer</p>
	    	</div>
	    	<div className="google-maps">
	    		<MapContainer latitude={3} length={5}/>
	    	</div>
	    	<div className="description">
	    		<p>Some description</p>
	    	</div>
    	</div>
    );
  }
}

export default App;
