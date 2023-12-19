'use client'
import React from 'react'
import CourseCard from './CourseCard'
import Navbar from '@/Components/NavbarForOthers'
import { useEffect } from 'react'
import Cookies from 'js-cookie';
import Script from 'next/script'

const links = [
  {
    link:`src="https://dragline-center.h5p.com/content/1292137498347389477/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292137498347389477/embed',
    title:'Interactive Video',
    id:'1292137498347389477',
    duration:39000,
    bgImg:'https://www.videotile.co.uk/wp-content/uploads/2018/10/Interactive-Video-01.png'
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292138406209022767/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292138406209022767/embed',
    title:'Study Material',
    id:'1292138406209022767',
    duration:39000,
    bgImg:'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/23163856/MBA-Study-Material.jpg'
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292141871901139227" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292141871901139227/embed',
    title:'Dragline labelings',
    id:'1292141871901139227',
    duration:10000,
    bgImg:'https://www.shutterstock.com/image-vector/quarry-mining-machines-bucket-wheel-600nw-2194808931.jpg'
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292142026794442427/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292142026794442427/embed',
    title:'Study Material Question 1',
    id:'1292142026794442427',
    duration:10000,
    bgImg:'data:image/jpeg;base64,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'
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292142044467212597/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292142044467212597/embed',
    title:'Image and 360 View',
    id:'1292142044467212597',
    duration:10000,
    bgImg:'https://i.ytimg.com/vi/M5CSaVU0RH8/sddefault.jpg'
  },
  
]


const Home = () => {

  useEffect(() => {
    const something = Cookies.get('token')
    if(!something){
      window.location.href='/login'
    }
  },[])

  return (
    <>
    <Navbar/>
    <div className="bg-white pt-12 px-4 min-h-screen overflow-x-hidden">
    <div className="grid grid-cols-4 gap-8">
    {links.map((data) => {
      return (<>
      <CourseCard {...data}/>
      </>
      )
    })}
    </div>
    </div>
    <Script src="https://dragline-center.h5p.com/js/h5p-resizer.js" charset="UTF-8"></Script>
    </>
  )
}

export default Home