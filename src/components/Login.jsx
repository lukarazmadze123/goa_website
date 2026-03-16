import React, { useState } from 'react';
import Auras from './Auras';
import { Link } from 'react-router-dom';
export default function PasswordSystem() {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const correctPassword = "შვილთაშვილი";

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert("ნუ მაიმუნობ თუ პაროლი არ იცი !!!!!");
    }
  };

  if (isLoggedIn) {
    return <Auras />;
  }

  return (
    <div className="flex justify-center items-center bg-gray-900  h-[100vh] ">
      <div className="bg-gray-950 shadow-lg border-[1px] max-sm:w-[400px] w-[500px] h-[400px] flex justify-center items-center  text-white border-indigo-500/100 p-[20px] rounded-[10px] flex flex-col items-center gap-[10px] ">
        <Link to='/gela' className='w-full flex flex-start items-start cursor-pointer hover:underline hover:text-green-600 duration-900 ease-in-out'>«go back</Link>
        <h1 className='text-[70px] '><b>Log in</b></h1>
        <input type="password"value={password}onChange={(e) => setPassword(e.target.value)}placeholder="Enter Password..."className="p-[2px] rounded-[10px] max-sm:text-[20px] text-[40px] pt-[0px] pb-[0px] border-[1px]  focus:border-[0px] "/>
        <button onClick={handleLogin}className="border max-sm:text-[20px] text-[40px] max-sm:pl-[25px] pl-[50px] hover:border-[3px] max-sm:pr-[25px] pr-[50px] rounded-[7px] flex justify-center text-center cursor-pointer hover:text-black hover:bg-white hover:border-indigo-500/100 duration-300  ">Log in</button>
        
      </div>
    </div>
  );
}