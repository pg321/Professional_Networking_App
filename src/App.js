import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Widgets from './Widgets';


function App() {
 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL, 
        })
      );
      } else {
        dispatch(logout());
        }
    });
  }, [])

  return (
    <div className="app">
      <Header />
    <Router>
    {!user ? (
      <Login /> 
    ) : (
      <div className="app__body">
        
        <Sidebar /> 
        <Feed />
        <Widgets />
      </div>
    )}
    </Router>
    </div> 
  );
}

export default App;
