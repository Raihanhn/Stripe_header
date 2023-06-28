import React from 'react'
import {Fragment, useRef} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {AiFillShopping,AiOutlineReload } from 'react-icons/ai'
import {MdStore,MdMenu } from 'react-icons/md'
import {BsStack,BsFillLightbulbFill,BsBookFill } from 'react-icons/bs'


export default function Header() {

  const useCases = [
    { title:"Ecommerce", icon:AiFillShopping, description:"Unified only in-person payment", href:'#' },
    { title:"SaaS", icon:AiOutlineReload, description:"Manage reccuring payments and subscriptions", href:'#' },
    { title:"Marketplaces", icon:MdStore, description:"Sell your products and services on your marketplace", href:'#' },
    { title:"Platforms", icon:BsStack, description:"Let customers accepts payments within the platforms", href:'#' },
    { title:"Creator Economy", icon:BsFillLightbulbFill, description:"Facilite on-platforms payment and pays creator globaly", href:'#' },
  ]

  const lofys = [
    { title:"Ecommerce", icon:AiFillShopping, description:"Unified only in-person payment", href:'#' },
    { title:"SaaS", icon:AiOutlineReload, description:"Manage reccuring payments and subscriptions", href:'#' },
    { title:"Marketplaces", icon:MdStore, description:"Sell your products and services on your marketplace", href:'#' },
  ]

  const devs = [
    {
      title: "GET STARTED", items: [
        "Prebuild Checkout",
        "Libraires and SDKs",
        "Plugins",
        "Code sample"
      ]
    },

    {
      title: "GUIDES", items: [
        "Accepts online payments",
        "Manage subscriptions",
        "Send Payment",
        "Prebuild checkout"
      ]
    },

  ]


  let usecaseRef = useRef(null);
  let devRef = useRef(null);
  let lofyRef = useRef(null);

  return (
    <Popover className='relative w-full bg-black' >
      <div className=" max-w-6xl px-4 py-4 mx-auto md:px-6 ">
        <div className=" flex items-center justify-between ">
          <p className=" text-white text-xl font-bold ">Unshift</p>
          <div className=" -my-2 -mr-2 sm:hidden ">
            <Popover.Button className=' inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-sm ' >
              <span className=" sr-only ">Open Menu</span>
             <MdMenu className=' w-6 h-6 ' aria-hidden='true'  />
            </Popover.Button>
          </div>
          <div className=" hidden w-3/4 md:flex md:w-3/4 xl:w-2/4 ">
            <Popover.Group as='nav' className=' flex w-full justify-evenly '>
              <a href="#" className=' font-bold text-white text-base  ' >Products</a>
              <Popover>
                {({open, close}) => (
                  <>
                   <Popover.Button ref={usecaseRef} onMouseEnter={() => usecaseRef.current.click()}
                      className=' inline-flex items-center text-base font-medium rounded-sm '>
                      <span className=' text-white font-bold ring-0 ' >Use Case</span>
                   </Popover.Button>
                      <Transition
                       as={Fragment}
                       enter="transition duration-100 ease-out"
                       enterFrom="transform scale-95 opacity-0"
                       enterTo="transform scale-100 opacity-100"
                       leave="transition duration-75 ease-out"
                       leaveFrom="transform scale-100 opacity-100"
                       leaveTo="transform scale-95 opacity-0"
                      >
                        <Popover.Panel
                         onMouseLeave={close}
                         className=' absolute z-10 w-screen max-w-md px-2 mt-8 -ml-4 transform sm:px-0 lg:ml-0 lg:-translate-x-1/2 '
                        >
                          <div className=" overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                            <div className=" relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 ">
                              {useCases.map((usecase, index) =>(
                                <a href={usecase.href} key={index} className=" flex items-start p-2 -m-3 rounded-lg ">
                                  <usecase.icon className=' w-6 h-6 text-slate-500 ' />
                                  <div className=" ml-4 ">
                                    <p className=' text-md text-gray-800 font-semibold ' > {usecase.title} </p>
                                    <p className=' text-base text-gray-800 font-medium ' > {usecase.description} </p>
                                  </div>
                                </a>
                              ) ) }
                            </div>
                          </div>

                        </Popover.Panel>
                   </Transition>
                  </>
                ) }
              </Popover>

              <Popover>
                {({open, close}) => (
                  <>
                   <Popover.Button ref={lofyRef} onMouseEnter={() => lofyRef.current.click()}
                      className=' inline-flex items-center text-base font-medium rounded-sm '>
                      <span className=' text-white font-bold ring-0 ' >Company</span>
                   </Popover.Button>
                      <Transition
                       as={Fragment}
                       enter="transition duration-100 ease-out"
                       enterFrom="transform scale-95 opacity-0"
                       enterTo="transform scale-100 opacity-100"
                       leave="transition duration-75 ease-out"
                       leaveFrom="transform scale-100 opacity-100"
                       leaveTo="transform scale-95 opacity-0"
                      >
                        <Popover.Panel
                         onMouseLeave={close}
                         className=' absolute z-10 w-screen max-w-md px-2 mt-8 -ml-4 transform sm:px-0 lg:ml-0 lg:-translate-x-1/2 '
                        >
                          <div className=" overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                            <div className=" relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 ">
                              {lofys.map((lofy, index) =>(
                                <a href={lofy.href} key={index} className=" flex items-start p-2 -m-3 rounded-lg ">
                                  <lofy.icon className=' w-6 h-6 text-slate-500 ' />
                                  <div className=" ml-4 ">
                                    <p className=' text-md text-gray-800 font-semibold ' >{lofy.title}</p>
                                    <p className=' text-base text-gray-800 font-medium ' >{lofy.description}</p>
                                  </div>
                                </a>
                              ) ) }
                            </div>
                          </div>

                        </Popover.Panel>
                   </Transition>
                  </>
                ) }
              </Popover>

              <Popover>
                {({open, close}) => (
                  <>
                   <Popover.Button ref={devRef} onMouseEnter={() => devRef.current.click()}
                      className=' inline-flex items-center text-base font-medium rounded-sm '>
                      <span className=' text-white font-bold ring-0 ' >Developers</span>
                   </Popover.Button>
                      <Transition
                       as={Fragment}
                       enter="transition duration-100 ease-out"
                       enterFrom="transform scale-95 opacity-0"
                       enterTo="transform scale-100 opacity-100"
                       leave="transition duration-75 ease-out"
                       leaveFrom="transform scale-100 opacity-100"
                       leaveTo="transform scale-95 opacity-0"
                      >
                        <Popover.Panel
                         onMouseLeave={close}
                         className=' absolute z-10 w-screen max-w-md px-2 mt-8 -ml-4 transform sm:px-0 lg:ml-0 lg:-translate-x-1/2 '
                        >
                          <div className=" overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                            <div className=" relative grid gap-4 px-5 py-6 bg-white sm:gap-8 sm:p-8 ">
                              <a href="#" className=" flex items-start p-2 -m-3 rounded-lg ">
                                <BsBookFill className=' w-6 h-6 text-slate-500 ' />
                                  <div className=" ml-4 ">
                                    <p className=' text-md text-gray-800 font-semibold ' > Documentation </p>
                                    <p className=' text-base text-gray-800 font-medium ' > Start integrating Unshift products abd tools </p>
                                  </div>
                              </a>

                              <div className=" grid grid-cols-2 gap-4 px-1 ">
                               {devs.map((dev, index) =>(
                                <div className="" key={index} >
                                  <p className=' font-semibold text-gray-800 text-md ' > {dev.title} </p>
                                  {dev.items.map((item, index) => (
                                    <a href="#" key={index} className=" font-normal text-gray-600 text-md "> {item} </a>
                                  ))}
                                </div>
                               ) ) }
                              </div>

                            </div>
                          </div>

                        </Popover.Panel>
                   </Transition>
                  </>
                ) }
              </Popover>

              <a href="#" className=" text-base font-bold text-white ">Companyss</a>
              <a href="#" className=" text-base font-bold text-white ">Pricing</a>

            </Popover.Group>
          </div>

          <div className=" items-center justify-end hidden md:flex  ">
            <a href="#" className=" text-base font-bold text-white ">Sign in</a>
          </div>

        </div>
      </div>
    </Popover>
  )
}
