
import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'


const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Log In</h1>
          <div className='my-2'>
            <Label >Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="abc@gmail.com"
            />
          </div>
          <div className='my-2'>
            <Label >Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="abc..."
            />
          </div>
          <Button type="submit" className="w-full my-4">Login</Button>
          <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-500 '>Signup</Link></span>
        </form>

      </div>
    </div>
  )
}

export default Login