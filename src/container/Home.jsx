import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate ,state } from 'react-router-dom';
import { client } from '../client';


import firebase from "firebase/compat/app";
const Home = ({user}) => {

  useEffect(() => {
    user.providerData.forEach((userInfo) => {
      console.log('User info for provider: ', userInfo.uid); 
        
      
 
      const doc = {
        _id: userInfo.uid,
        _type: 'user',
        userName: user.displayName,
        image: user.photoURL,
      };
     
        client.createIfNotExists(doc);
      }) 
    }), [] 

  
  return (
<div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <h1> hhl</h1>
    </div>
  )
  }

export default Home ;