import React from 'react'
import { Link, Outlet } from 'react-router'

const About = () => {
  return (
    <div className='w-full bg-amber-200 text-center'>
      <h1 className='text-3xl font-medium'>this is about section</h1>
      <nav className=''>
        <ul className='flex justify-center gap-5 items-center w-full '>
          <li>
            <Link to="text1">text1</Link>
          </li>
          <li>
            <Link to="text2">text2</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      <footer className='text-center pt-2 border-t border-gray-500'>
        this is footer here
      </footer>
    </div>
  )
}

export default About