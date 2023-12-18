import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Cookies from 'js-cookie';
import LogoutButton from './LogoutButton';

import React from 'react'




const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
    const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [name,setName] =useState('')
    const [loggedOut,setLoggedOut] = useState(false);

    useEffect(() => {
        try{
          const something = Cookies.get('token')
          if(something){
            const parts = something.split('.');
            const decodedPayload = atob(parts[1]);
        const payloadObject = JSON.parse(decodedPayload);
        
        const username = payloadObject.email;
    
        setName(username)
          }
        }catch(e){
          console.log(e)
        }
      },[loggedOut])

    const handleLogout = () => {
         document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
         window.location.href='/'
     }

  return (
    <header className="inset-x-0 top-0 z-50 bg-blue-400">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            {name ? (
                <div>
                <Link href={`/profile/${name}`}>
                <div className="w-12 h-12 bg-gray-400 overflow-hidden cursor-pointer rounded-full">
                  <img src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg" alt="" />
                </div>
                </Link>
              {/* <div className="text-sm cursor-pointer font-semibold leading-6 text-white">
              {name} <span aria-hidden="true"></span>
              </div> */}
            </div>
            ) : (<Link href="/login" className="text-sm font-semibold leading-6 text-white">
            {'Login'} <span aria-hidden="true"></span>
          </Link>)}
          <button onClick={handleLogout}>
            <LogoutButton />
          </button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                  />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default Navbar