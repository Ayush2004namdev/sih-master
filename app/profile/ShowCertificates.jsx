import axios from 'axios'
import React, { useState } from 'react'
import { DotLoader } from 'react-spinners'

const ShowCertificates = ({data,name}) => {
  const [isLoadingcertificate,setIsLoadingCertificate] = useState(false)

  const handleCertificateClick = async() => {
    try{
      setIsLoadingCertificate(true)
      const response = await axios.post('/api/getCertificate',{userId:name,title:data})
      console.log(response)
      const base64Url = response.data.uri;
        console.log(base64Url)
        const byteCharacters = atob(base64Url.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });
  
        const pdfObjectUrl = URL.createObjectURL(blob);
        await axios.post('/api/storeToDb',{userName:name,data})
        setIsLoadingCertificate(false)
        window.open(pdfObjectUrl, '_blank');
      }
        catch(err){
          console.error('error while creating pdf' , err)
        }
  }



  return (
    <div onClick={handleCertificateClick} className="border relative pr-2 pb-4 border-t-0 rounded-lg border-black">
      <div onClick={handleCertificateClick} className="inset-0 absolute cursor-pointer z-20 h-full w-full"></div>
      {isLoadingcertificate ? (<div className="inset-0 absolute z-10 flex items-center justify-center top-0">
          <DotLoader className='h-20 w-20' color='red' size={50} />
          </div>) : ''} 
  <div className='w-full relative cursor-pointer items-center flex flex-col justify-between bg-white py-4 my-2 mx-1 rounded-xl' style={{backgroundImage:`url(data:image/jpeg;base64,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)`,backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
      <div onClick={() => handleSomeClick(id)} className="w-50 md:h-32 h-24">
      
     
      </div>


  </div>
      <h1 className='text-black text-center text-xl'>Title : {data}</h1>
</div>
  
  )
}

export default ShowCertificates