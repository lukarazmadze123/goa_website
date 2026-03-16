import React from 'react'
import ContactUs from './ContactUs'
import Login from './Login'
import { Link } from 'react-router-dom'

export default function Auras() {
  return (
    <div className='bg-gray-900 h-screen  text-white h-schreen flex flex-col gap-[30px]'>
      <header>
        <div className='flex flex-col items-center fixed text-green-600'>
          <h1 className='text'><b>GOA • Goal Oriented Academy</b></h1>
          <hr className='w-[99vw]' />
        </div>
        <div className='pt-7'></div>
        <div className='  bg-gray-950 w-full flex max-sm:flex-col rounded-b-[10px] justify-around max-sm:items-center '>

          <h1 className='flex font-sans '>welcome to GOA <img className='h-[30px]' src="./assets/chad.png" alt="" /></h1>
          <ul className='flex gap-[10px]'>
            <li className='hover:underline hover:text-green-600 duration-700 ease-in-out '><Link to='/gela'>main</Link></li>
            <li className='hover:underline hover:text-green-600 duration-700 ease-in-out '><Link to='/contactus'>contact us</Link></li>
            <li className='hover:underline hover:text-green-600 duration-700 ease-in-out '> <Link>leaders</Link></li>
            <li className='hover:underline hover:text-green-600 duration-700 ease-in-out '> <Link>mentors</Link></li>
          </ul>
        </div>
      </header>
      <main className=' flex justify-center items-center h-full'>
        <div className='w-[800px] bg-gray-950 shadow-lg border-[1px] border-gray-600 rounded-[5px] p-[10px] flex flex-col items-center gap-[2px] max-sm:gap-[2px]  '>

          <div className='flex gap-[100px] text-gray-600  '>
            <h1>სახელი <b className='max-sm:hidden'>↓</b></h1>
            <div className='flex gap-[20px] max-sm:gap-[10px]'>
              <h1>აურა <b className='max-sm:hidden'>↓</b></h1>
              <h1>საკლასო <b className='max-sm:hidden'>↓</b></h1>
              <h1>პასუხები <b className='max-sm:hidden'>↓</b></h1>
              <h1>კამერა <b className='max-sm:hidden'>↓</b></h1>
              <h1>დახმარება <b className='max-sm:hidden'>↓</b></h1>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className=' focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>

              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center focus:border-0 focus:outline-none'>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center focus:border-0 focus:outline-none'>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-[0px] focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>
          </div>
          <hr className=' border-gray-600 w-full' />
          <div className='text-white placeholder:text-white flex max-sm:gap-[10px] '>
            <input type="text" placeholder='სახელი' className='focus:border-0 focus:outline-none' />
            <div className='flex gap-[40px] max-sm:gap-[30px]  justify-center '>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
              <input type="number" className='w-[50px] text-center' placeholder='0'></input>
            </div>

          </div>

        </div>
      </main>
    </div >
  )
}
