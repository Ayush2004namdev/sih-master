import Link from 'next/link'
import React from 'react'

const CourseCard = (props) => {
    const {title,src,id,duration} = props
    const handleSomeClick = (id) => {
        window.location.href=`/course/${id}?duration=${duration}`
    }

  return (<>
    <Link href={`/course/${id}?duration=${duration}&title=${title}`}>
    <div className='w-full relative cursor-pointer items-center flex flex-col justify-between bg-white py-4 my-2 mx-1 rounded-xl'>
    
     <div className="absolute inset-0"></div>
        <div onClick={() => handleSomeClick(id)} className="w-50 md:h-96 h-24 overflow-y-scroll">
        
            <iframe src={src}></iframe>
       
        </div>

        <h1>Title : {title}</h1>
    {/* <script src="https://dragline-center.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script> */}

    </div>
    </Link>
  </>
  )
}

export default CourseCard