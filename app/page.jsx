'use client'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import Example from '@/Components/example';
import Navbar from '@/Components/Navbar';



const Home = () => {
  const [name,setName] =useState('')

  useEffect(() => {
    try{
      const something = Cookies.get('token')
      if(something){
        const parts = something.split('.');
        const decodedPayload = atob(parts[1]);
    const payloadObject = JSON.parse(decodedPayload);
    
    const username = payloadObject.userName;

    setName(username)
      }
    }catch(e){
      console.log(e)
    }


  },[])
  
  return (
    <>
    <Navbar userName={name}/>
    <div className="h-screen w-full">
    <Example/>
    </div>
    </>
  )
}

export default Home;