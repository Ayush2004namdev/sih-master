import React from 'react'

const AboutRightComponent = ({name,designation,imgUrl}) => {
  return (
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src={imgUrl} alt="Hanna Lubin" class="w-full h-full object-cover object-top aspect-video lg:aspect-square" />
      </div>
      <div class="w-full lg:w-9/12 bg-red-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">{name}</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">{designation}</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
  )
}

export default AboutRightComponent