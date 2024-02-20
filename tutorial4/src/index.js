import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './LoginPage';
import ProfileListing from './ProfileListing';
import Profile from './Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/profile-list' element={<ProfileListing/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
    </Routes>   
    </Router>
   </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
