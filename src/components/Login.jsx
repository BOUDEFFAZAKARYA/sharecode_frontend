import React, { useEffect, useState } from 'react';
import { useNavigate ,state ,Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { GoogleLogin } from '@react-oauth/google';



import { GoogleOAuthProvider } from '@react-oauth/google';

import { client } from '../client';

import { signInWithGoogle } from '../service/firebase';
import firebase from "firebase/compat/app";



const Login = () => {






  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" />
          </div>

          <Link className="shadow-2xl" to={"/"}>
          <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={signInWithGoogle}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
                
           

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
