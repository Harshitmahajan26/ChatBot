import React, { useState } from 'react'
import { UserData } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Verify = () => {

  const [otp, setOtp] = useState("")

  const {verifyUser, btnLoading} = UserData()

  const navigate = useNavigate()

  const submitHandler = (e) => {
      e.preventDefault()  // form submit hone pr reload na ho
      verifyUser(Number(otp), navigate)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={submitHandler} className='bg-white p-6 rounded shadow-md w-full md:w-[500px] '>
            <h2 className="text-2xl mb-4">Verify</h2>
            <div className="mb-4">
                <label className='block text-gray-700 mb-1 ' htmlFor="otp"> Otp : </label>
            </div>

            <input type="number" id='otp' value={otp} onChange={(e)=>setOtp(e.target.value)} className='border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-500 mb-3' required />

            <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 '>
              {btnLoading ? "Please Wait..." : "Submit"}
            </button>
        </form>
        
    </div>
  )
}

export default Verify
