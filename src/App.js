import React from "react";
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from "./components/Navbar";
import Booking from "./pages/Booking";
import Reviews from "./pages/Reviews";

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/rooms" component={Rooms} />
			<Route exact path="/rooms/:slug" component={SingleRoom} />
			<Route exact path="/booking" component={Booking} />
			<Route exact path="/reviews" component={Reviews} />
			<Route component={Error} />
		</Switch>
	</div>
  );
}

export default App;
