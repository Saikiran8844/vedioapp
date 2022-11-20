import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'	
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Notify from './pages/Notify'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';


export default function App() {
	return (
	  <Router>
		<Header/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/pricing" element={<Pricing/>}/>
			<Route path="/sign-in" element={<Signin/>}/>
			<Route path="/sign-up" element={<Signup/>}/>
			<Route path="/notify" element={<Notify/>}/>
			<Route path="/profile" element={<PrivateRoute />}>
            	<Route path="/profile" element={<Profile />} />
          	</Route>
		</Routes>
	  </Router>
	)
  }




