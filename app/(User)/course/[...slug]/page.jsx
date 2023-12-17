'use client'
import Navbar from '@/Components/NavbarForOthers'
import Script from 'next/script'
import React from 'react'

const page = (req) => {
    const id = req.params.slug
    const src=`https://dragline-center.h5p.com/content/${id}/embed`
  return (
    <>
    <Navbar/>
    <div className="flex w-full  bg-black bg-opacity-90   justify-center">
    <div className="w-[39%] object-contain">
    <iframe src={src} aria-label="मूल्यांकन" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><Script src="https://dragline-center.h5p.com/js/h5p-resizer.js" charset="UTF-8"></Script>
    </div>
    </div>
    </>
  )
}

export default page