
import React from 'react'
import Navbar from '../shared/Navbar'
import { Form, Link } from 'react-router-dom'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'


const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
          <div className='my-2'>
            <Label className="my-2">Full Name</Label>
            <Input
              type="text"
              placeholder="fullname"
            />
          </div>
          <div className='my-2'>
            <Label >Email</Label>
            <Input
              type="email"
              name="email"

              placeholder="abc@gmail.com"
            />
          </div>
          <div className='my-2'>
            <Label >Phone Number</Label>
            <Input
              type="text"

              name="phoneNumber"

              placeholder="123..."
            />
          </div>
          <div className='my-2'>
            <Label >Password</Label>
            <Input
              type="password"

              name="password"
              placeholder="abc..."
            />
          </div>
          <div className='flex items-center gap-2'>
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              className="cursor-pointer"
            />
          </div>
          <Button type="submit" className="w-full my-4">Signup</Button>
          <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-500 '>Login</Link></span>
        </form>

      </div>
    </div>
  )
}

export default Signup