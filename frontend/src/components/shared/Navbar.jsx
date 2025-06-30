import React, { use } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'

const Navbar = () => {
  const user = true;
  return (
    <div className='bg-white shadow-sm'>
      <div className='flex items-center justify-between max-w-7xl mx-auto h-16 px-4'>
        {/* Logo */}
        <h1 className='text-2xl font-bold'>
          NEIGHBOR <span className='text-blue-500'>FIT</span>
        </h1>

        {/* Nav Links + Avatar */}
        <div className='flex items-center gap-12'>
          <ul className='flex items-center gap-5 font-medium'>
            <li className='cursor-pointer hover:text-blue-500'>Home</li>
            <li className='cursor-pointer hover:text-blue-500'>Jobs</li>
            <li className='cursor-pointer hover:text-blue-500'>Browse</li>
          </ul>
          {/* if there is no user then it show sigin and signup button if user then popover will show */}

          {
            !user ? (
              <div className='flex itmes-center gap-2'>
                <Button
                  variant="outline"
                  className="cursor-pointer border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="cursor-pointer border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
                >
                  Signup
                </Button>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div className='flex gap-4 items-center'>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                    <div>
                      <h4 className='font-medium text-base'>Ranjeet</h4>
                      <p className='text-sm text-muted-foreground'>bio</p>
                    </div>
                  </div>

                  {/*Profile options..*/}
                  <div className='flex flex-col gap-2 text-sm text-gray-700'>
                    <Button variant="link" className="flex items-center gap-2 justify-start text-gary-600 hover:text-black">
                      <User2 size={18} />
                      View Profile
                    </Button>
                    <Button variant="link" className="flex items-center gap-2 justify-start text-gary-600 hover:text-black">
                      <LogOut size={18} />
                      Logout</Button>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar
