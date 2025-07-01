import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = false // Change to false to simulate logged-out state

  return (
    <div className='bg-white shadow-sm'>
      <div className='flex items-center justify-between max-w-7xl mx-auto h-16 px-4'>

        {/* Logo */}
        <h1 className='text-2xl font-bold tracking-wide'>
          Neighbor<span className='text-blue-500'>Fit</span>
        </h1>

        {/* Navigation + Avatar/Login */}
        <div className='flex items-center gap-10'>
          <ul className='flex items-center gap-6 font-medium text-gray-700'>
            <li className='cursor-pointer hover:text-blue-500 transition'>Home</li>
            <li className='cursor-pointer hover:text-blue-500 transition'>Match</li>
            <li className='cursor-pointer hover:text-blue-500 transition'>Explore</li>
            <li className='cursor-pointer hover:text-blue-500 transition'>About</li>
          </ul>

          {!user ? (
            <div className='flex items-center gap-3'>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
                >
                  Login
                </Button>
              </Link>
              <Link to="signup">
                <Button
                  variant="default"
                  className="bg-blue-500 hover:bg-blue-600 transition"
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className='w-72'>
                <div className='flex gap-4 items-center mb-3'>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                  </Avatar>
                  <div>
                    <h4 className='font-medium text-base'>Ranjeet Kumar</h4>
                    <p className='text-sm text-muted-foreground'>Neighborhood Explorer</p>
                  </div>
                </div>

                <div className='flex flex-col gap-2 text-sm text-gray-700'>
                  <Button variant="ghost" className="flex items-center gap-2 justify-start text-gray-600 hover:text-black">
                    <User2 size={18} />
                    View Profile
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 justify-start text-gray-600 hover:text-black">
                    <LogOut size={18} />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
