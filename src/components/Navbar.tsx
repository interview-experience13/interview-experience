import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-10'>
      <ul className='flex gap-5 text-xl'>
        <li>HOME</li>
        <li>BLOGS</li>
        <li>CONTACT</li>
      </ul>
      <div className='text-xl'>
        LOGO
      </div>
      <ul className='flex gap-5 text-xl'>
        <li>SIGN IN</li>
        <li>SIGN UP</li>
      </ul>
    </div>
  )
}

export default Navbar