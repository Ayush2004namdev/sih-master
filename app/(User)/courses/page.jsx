'use client'
import React from 'react'
import CourseCard from './CourseCard'
import Navbar from '@/Components/NavbarForOthers'
import { useEffect } from 'react'
import Cookies from 'js-cookie';
import Script from 'next/script'

const links = [
  {
    link:`src="https://dragline-center.h5p.com/content/1292138406209022767/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292137498347389477/embed',
    title:'अध्ययन सामग्री',
    id:'1292137498347389477',
    duration:39000,
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292138406209022767/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292138406209022767/embed',
    title:'अध्ययन सामग्री',
    id:'1292138406209022767',
    duration:39000,
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292138406209022767/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292137498347389477/embed',
    title:'अध्ययन सामग्री',
    id:'1292138406209022767',
    duration:39000,
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292138406209022767/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292138406209022767/embed',
    title:'अध्ययन सामग्री',
    id:'1292138406209022767',
    duration:39000,
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292142026794442427/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292142026794442427/embed',
    title:'अध्ययन सामग्री प्रशन 1',
    id:'1292142026794442427',
    duration:39000,
  },
  {
    link:`src="https://dragline-center.h5p.com/content/1292142044467212597/embed" aria-label="अध्ययन सामग्री" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"`,
    src:'https://dragline-center.h5p.com/content/1292142044467212597/embed',
    title:'view',
    id:'1292142044467212597',
    duration:39000,
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
    <div className="bg-slate-300 min-h-screen overflow-x-hidden">
    <div className="grid grid-cols-3 gap-4">
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