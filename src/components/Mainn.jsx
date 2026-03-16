import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ContactUs from './ContactUs'
import Login from './Login'
export default function Main() {

  return (
    <div className='bg-gray-900 max-sm:h-[260vh] text-white h-screen flex flex-col gap-[30px]'>
      <header className='flex flex-col items-center '>
        <div className='flex flex-col items-center fixed text-green-600'>
          <h1 className='text'><b>GOA • Goal Oriented Academy</b></h1>
          <hr className='w-[99vw]' />
        </div>
        <div className='pt-7'></div>
        <div className=' bg-gray-950 rounded-b-[10px] w-full flex max-sm:flex-col justify-around max-sm:items-center '>

          <h1 className='flex font-sans '>welcome to GOA <img className='h-[30px]' src="./assets/chad.png" alt="" /></h1>
          <ul className='flex gap-[10px] '>
            <li className='hover:underline hover:text-green-600 duration-700 ease-in-out '><Link to='/contactus'>contact us</Link></li>
            <li className='hover:underline hover:text-green-600 duration-700 ease-in-out '> <Link>leaders</Link></li>
            <li className='hover:underline hover:text-green-600 duration-700 ease-in-out '> <Link>mentors</Link></li>
            <li className='hover:underline hover:text-green-600 duration-700 ease-in-out '><Link to='/login'>auras</Link></li>
          </ul>
        </div>
      </header>
      <main className='flex justify-center w-[99vw] max-sm:w-screen'>
        <div className='grid grid-cols-3 h-[800px] max-sm:h-[2000px] grid-rows-2 gap-[10px] max-sm:gap[30px] max-sm:grid-cols-1 max-sm:grid-rows-6   '>
          <div className='max-sm:w-[400px]  shadow-lg bg-gray-950 rounded-[5px] flex flex-col items-center'>
            <img className='w-[100%] h-[50%] rounded-t-[10px]' src="./assets/nika.jpg" alt="" />
            <h1 className='text-[25px] text-green-700'><b>დამფუძვნებელი</b></h1>
            <p className='text-center'>ბატონმა ნიკა კეშელავამ <br /> დააარსა გოას აკადემია <br /> არა მარტო სასწავლებლად <br /> არამედ ბავშვების ქცევის და <br /> დისციპლინის გამოსასწორებლად</p>
          </div>
          <div className='p-[5px] max-sm:w-[400px]  shadow-lg bg-gray-950  rounded-[5px] flex flex-col items-center gap-[10px]'>
            <h1>აქ შეისწავლით:</h1>
            <div className='grid grid-cols-4'>
              <img className='w-[70px]' src="./assets/icons/html.png" alt="" />
              <img className='w-[70px]' src="./assets/icons/css.png" alt="" />
              <img className='w-[70px]' src="./assets/icons/js.png" alt="" />
              <img className='w-[70px]' src="./assets/icons/git.png" alt="" />
              <img className='w-[70px]' src="./assets/icons/python.png" alt="" />
              <img className='w-[70px]' src="./assets/icons/tcss.png" alt="" />
              <img className='w-[70px]' src="./assets/icons/react.png" alt="" />
              <img className='w-[70px]' src="./assets/icons/vite.png" alt="" />
            </div>
            <p className='text-center'>1.html 2.css 3.js 4.git 5.python <br /> 6.tailwindcss 7.react 8.vite</p>
          </div>

          <div className=' max-sm:w-[400px] w-[400px] shadow-lg bg-gray-950 row-span-2 h-[800px] max-sm:h-[650px] rounded-[5px] flex flex-col items-center overflow-hidden'>
            <h1 className='text-[40px] flex flex-col gap-[10px]'>ლოკაცია:</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d839.4329395982979!2d44.7428455285318!3d41.725751498196175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473004022afad%3A0x5f87f25e8d89efda!2ssenTavus!5e1!3m2!1sen!2sge!4v1773398832997!5m2!1sen!2sge"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GOA Location"
            ></iframe>
          </div>

          <div className=' max-sm:w-[400px] shadow-lg bg-gray-950 max-sm:h-[600px] pt-[10px] col-span-2 rounded-[5px] flex flex-col items-center max-sm:col-span-1 gap-[20px] max-sm:justify-center max-sm:row-span-2'>
            <p className='text-center text-[20px]'>საქართველოში ყველაზე სანდო და ერთადერთი აკადემია, რომელიც <br /> პერსონალურად მოგიდგება და დაგეხმარება ნებისმიერი ცხოვრებისეული <br /> პრობლემის მოგვარებაში. დაგისახავ დიად მიზნებს და ბოლომდე მოგეხმარები <br /> მათ მიღწევაში • GOA-მიზანზე ორიენტირერბული აკადემია</p>
            <img className='h-[250px] w-[820px] rounded-b-[10px]' src="./assets/GOA.jpg" alt="" />
          </div>
        </div>
      </main>
      <footer className='flex justify-center items-center h-full bg-gray-950 rouded-t-[10px]'>
        <h1>©GOA</h1>
      </footer>
    </div>
  )
}