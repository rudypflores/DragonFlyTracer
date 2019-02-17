import React, { Component } from 'react';
import {GeoCode} from './components/GoogleMaps/GeoCode';
import './App.css';

//Place what will be rendered here
class App extends Component {
  render() {
    return (
    	<div>
	    	<div className="title">
	    		<p>DragonFlyTracer</p>
	    		<p className="sub">The tweet location tracker</p>
	    	</div>
	    	<div className="google-maps">
	    		<GeoCode/>
	    	</div>
	    	<div className="description">
	    		<p>This Web Application was developed with <i>React.js</i>, 
	    		we provide our Google Maps user location placement feature through
	    		the <i>Google Maps API</i>. </p>
	    	</div>
	    	<div className="contributors">
	    		<p className="sub-title">- A collaborative project between -</p>
	    		<p>Rudy Flores | Tommy Bart | Sean | Hunter</p>
	    	</div>
    	</div>
    );
  }
}

export default App;
