'use client'
import React from 'react'
import AboutLeftComponent from './AboutLeftComponent'
import AboutRightComponent from './AboutRightComponent'
import Navbar from '@/Components/NavbarForOthers'

const Page = () => {
  return (
<>
    <Navbar/>

    <section class="max-w-screen-xl mx-auto py-20 px-8 lg:px-10">
  <h2 class="text-4xl xl:text-5xl capitalize text-center text-indigo-900 font-bold">Ecosmart Devs</h2>
  <hr class="mx-auto w-12 h-1 outline-0 border-0 bg-green-300 block mt-4 mb-6" />
  <p class="text-center text-xl text-gray-800">Our team consists only of the best talents</p>

  <div class="flex flex-col gap-6 mt-16">
    <AboutLeftComponent name='Tanya Shekhawat' designation='Team Leader' imgUrl={'/images/tanya.jpeg'}/>
    <AboutRightComponent name='Aniket Kajaniya' designation='ML Developer' imgUrl={'/images/aniketProfile.jpeg'}/>
    <AboutLeftComponent name='Prateek Khatri' designation='Software Developer' imgUrl={'/images/pratik.jpeg'}/>
    <AboutRightComponent name='Sumit Choudhary' designation='Web Developer' imgUrl={'/images/sumit.jpg'}/>
    <AboutLeftComponent name='Sanjali Khare' designation='Algorithem Developer' imgUrl={'/images/sanjali.jpeg'}/>
    <AboutRightComponent name='Ayush Namdev' designation='Web developer' imgUrl={'/images/ayush.jpeg'}/>
  </div>
</section>
</>
  )
}

export default Page