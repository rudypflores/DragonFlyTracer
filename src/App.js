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
	    	</div>
	    	<div className="google-maps">
	    		<GeoCode/>
	    	</div>
	    	<div className="description">
	    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	    		 Mauris pulvinar mauris nulla, quis vestibulum neque feugiat
	    		  placerat. Maecenas at facilisis lorem. Etiam ac cursus ligula.
	    		   Vestibulum sed placerat nulla. Praesent viverra erat in 
	    		   pretium lacinia. Suspendisse potenti. Nam orci ipsum,
	    		    feugiat id commodo vel, rutrum in orci.

				Nullam sed lectus sed nulla volutpat ornare eget pulvinar leo. 
				Sed nec quam vitae sapien volutpat pharetra a in eros. Sed vitae
				 vestibulum velit, ut porta elit. Maecenas at erat eros. Cras 
				 euismod mauris ac pulvinar consectetur. Pellentesque non neque 
				 ligula. Cras vel eleifend purus. Sed iaculis ullamcorper elit et 
				 accumsan. Sed erat metus, sodales nec pretium non, auctor sit amet
				  nulla.</p>
	    	</div>
	    	<div className="contributors">
	    		<p>Rudy Flores | Tommy Bart | Sean | Hunter</p>
	    	</div>
    	</div>
    );
  }
}

export default App;
