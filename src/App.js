import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'; 
import Feed from './Feed';
import { selectUser } from  './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import Widgets from './Widgets';


function App() {

  const user= useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        })
        );
      }
      else{
            dispatch(logout());
      }
    });
  }, []);
  
  return (
    <div className="app">
      {/* Header */}
        <Header />
        

        {!user ? (
        <Login /> 
        ): (
         
        <div 
          className= "app__body">
        
          <Sidebar />
     
          <Feed /> 
        {/* Widgets */}
          <Widgets />

        </div>
       )} 
    </div>
  );
}

export default App;
