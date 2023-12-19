'use client'
import Navbar from '@/Components/NavbarForOthers'
import Cookies from 'js-cookie';
import axios from 'axios'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

const page = (req) => {
  const {duration,title} = req.searchParams


  const [isCertified,setIsCertified] = useState(false)
  const [name,setName] = useState(null)
  const [show,setShow] = useState(false)
  const [loading,setLoading] = useState(false)
  const id = req.params.slug
  
  useEffect(() => {
    const something = Cookies.get('token')
  
    if(!something){
      window.location.href='/login'
    }
    else{
        const parts = something.split('.');
        const decodedPayload = atob(parts[1]);
        const payloadObject = JSON.parse(decodedPayload);
        let string = payloadObject.userName;
        let username = string.charAt(0).toUpperCase() + string.slice(1);
    setName(username)
    }
  },[])

  if(!isCertified){
    setTimeout(() => {
      setIsCertified(true)
      setShow(true)
    },duration)
  }

  const  handleGetCertificateClick= async(e) => {
    e.stopPropagation();
    setLoading(true)
    try{
    const response = await axios.post('/api/getCertificate',{userId:name,title})
    console.log(response)
    const base64Url = response.data.uri;

      const byteCharacters = atob(base64Url.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      const pdfObjectUrl = URL.createObjectURL(blob);
      await axios.post('/api/storeToDb',{userName:name,title})
      setShow(false)
      setLoading(false)
      window.open(pdfObjectUrl, '_blank');
    }
      catch(err){
        console.error('error while creating pdf' , err)
      }
 }

    const src=`https://dragline-center.h5p.com/content/${id}/embed`
  return (
    <>
    {show && (
    <div onClick={() => setShow(false)} className="inset-0 bg-black fixed flex items-center justify-center top-0 bg-opacity-90">
      <div onClick={(e) => e.stopPropagation()} className="bg-white px-12 py-3 rounded-lg max-w-3xl text-center">
        <h1 className='text-2xl'>Get Certified for Your Progress</h1>
        <button onClick={handleGetCertificateClick} className='bg-gradient-to-r rounded-md to-blue-400 from-cyan-500 px-4 py-1 mt-8'>{loading ? 'Loading...' : 'Get Certificate'}</button>
      </div>
    </div>
    )}
    <Navbar/>
    <div className="flex h-screen w-full bg-black bg-opacity-90 justify-center">
    <div className="w-[39%] object-contain">
    <iframe src={src} aria-label="मूल्यांकन" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><Script src="https://dragline-center.h5p.com/js/h5p-resizer.js" charset="UTF-8"></Script>
    </div>
    </div>
    </>
  )
}

export default page