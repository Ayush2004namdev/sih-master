'use client'
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

import axios from 'axios';
import ShowCertificates from '../ShowCertificates';
import { ClockLoader } from 'react-spinners';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';


const page = (req) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [mobileNo,setMobileNo] = useState('')
  const [certificateIds,setCertificateIds] = useState([])
  const [isLoadingcertificate,setIsLoadingCertificate] = useState(true)

  async function run(name,mobileNo){
    try{
    const response = await axios.post('/api/fetchCertificates',{name,mobileNo})
    console.log(response.data.certificates)
    setCertificateIds((ex) => {
      return [...response.data.certificates]
    })
    // setIsLoadingCertificate(false)
    }catch(e){
      console.error('Error in reciving the data',e)
    }
  }


  useEffect(() => {
    setIsLoadingCertificate(true)
    const something = Cookies.get('token')
    if(something){
      const parts = something.split('.');
      const decodedPayload = atob(parts[1]);
      const payloadObject = JSON.parse(decodedPayload);
      const username = payloadObject.userName;
      const email = payloadObject.email;
      const mobileNo = payloadObject.mobileNo;
      setName(username)
      setEmail(email)
      setMobileNo(mobileNo)
      setIsLoadingCertificate(true)
      run(username,mobileNo)
    }
    else{
      window.location.href='/login'
    }
  },[])

  const handleLogout = () => {
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    window.location.href='/'
}

  return (
    <>
    <div className="h-40 w-full flex items-center bg-red-500 ">
      <div onClick={(e) => window.location.href='/'} className="text-white">
      <ArrowLeftOnRectangleIcon className='h-12 w-12 text-white cursor-pointer' onClick={handleLogout}/>
         Back</div>
      <div className="flex gap-4 items-center grow">
      <div className="rounded-full overflow-hidden ml-12 h-36 w-36 bg-gray-400">
        <img src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg" alt="" />
      </div>
        <div className='text-xl text-white'><p>
              Name : {name} <br />
              Email : {email} <br />
              Phone No : {mobileNo}
            </p>
          </div>
      </div>
      <div className="pr-4 flex gap-2 items-center">
        <p className='text-xl text-white'>Logout</p>
        <ArrowRightOnRectangleIcon className='h-12 w-12 text-white cursor-pointer' onClick={handleLogout}/>
      </div>
    </div>
    <div className=" mt-4 px-8 py-2">
      <h1 className='text-3xl text-center'>Certificates</h1>
      
      <div className="mt-4 grid grid-cols-4 gap-10">
        {certificateIds.map((data,id) => {
          return (<>
          
            <ShowCertificates shsowLoad={isLoadingcertificate} data={data} key={id} name={name} />
            </>
            ) 
        })}
        
      </div>
    </div>
    </>
  )
}

export default page