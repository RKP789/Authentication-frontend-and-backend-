import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

       try {
        const res = await axios.post('http://localhost:3000/api/auth/signin', {email, password}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        alert(res.data.message);
        
        if (res.status == 200) {
            navigate("/user/getuser");
        }
       } catch(err) {
        console.log(err.message);
       }
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='p-4 border border-white flex flex-col justify-center items-center rounded-lg text-white'>
                <span className='m-3 text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Create Account</span>
                <form className='flex flex-col gap-4'>
                    <h3 className='text-2xl'>Email</h3>
                    <input onChange={(e) => {setEmail(e.target.value)}} className='px-2 py-1 w-[18rem] outline-none border border-gray-400 rounded-md focus:border-gray-300' type='email' placeholder='email' name='email' value={email}/>
                    <h3 className='text-2xl'>Password</h3>
                    <input onChange={(e) => {setPassword(e.target.value)}} className='px-2 py-1 w-[18rem] outline-none border border-gray-400 rounded-md focus:border-gray-300' type='password' placeholder='password' name='password' value={password}/>
                    <div className='flex justify-center'>
                        <div className='bg-gradient-to-r from-purple-500 to-red-500 p-1 rounded-lg mt-2 active:scale-95'>
                            <button onClick={submitHandler} className='text-xl bg-gray-400 rounded-md px-2 py-1 hover:bg-transparent'>Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;