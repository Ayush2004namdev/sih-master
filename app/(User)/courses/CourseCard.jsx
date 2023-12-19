import Link from 'next/link'
import React from 'react'

const CourseCard = (props) => {
    const {title,src,id,duration,bgImg} = props
    const handleSomeClick = (id) => {
        window.location.href=`/course/${id}?duration=${duration}`
    }

  return (<>
    <Link href={`/course/${id}?duration=${duration}&title=${title}`}>
      <div className="pr-8 pl-4 pb-6 pt-2 rounded-lg mnmn">

    <div className='w-full relative cursor-pointer items-center flex flex-col justify-between bg-white py-4 my-2 mx-1 rounded-xl' style={{backgroundImage:`url(${bgImg})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
        <div onClick={() => handleSomeClick(id)} className="w-50 md:h-32 h-24">
        
       
        </div>


    </div>
        <h1 className='text-black text-center text-xl'>Title : {title}</h1>
  </div>
    </Link>
  </>
  )
}

export default CourseCard