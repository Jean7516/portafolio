import { contactDetails, navLinks, socialLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Footer = () => {
  return (
    <footer className='py-10 border-t border-peach max-width'>
      <div className='flex items-center justify-between'>
        <Link href={'/'} className='text-purple text-xl font-semibold'>Yann</Link>
        <nav className='flex gap-12 max-tablet:hidden'>
          <ul className='flex items-center gap-8'>
            {navLinks.map((link,index)=>(
              <li key={index}>
                <NavLink href={link.url} label={link.label}/>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex gap-3'>
        {socialLinks.map((link,index)=>(
              <a key={index} href={link.url} target="_blank" className='w-10 h-10 bg-purple text-peach flex items-center justify-center rounded'>
                <link.icon strokeWidth={0} fill="white"/>
              </a>
            ))}
        </div>
      </div>
      <div className='w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center rounded-lg mt-5'>
      {contactDetails.map((details,index)=>(
              <div key={index} className='flex grap-3 text-purple'>
                <details.icon size={20}/>
                <p></p>
                <p className='text-gray-600'> &nbsp;{details.text}</p>
              </div>
            ))}
      </div>
      <p className='mt-8 text-gray-600 text-center text-sm'>
        Copyright @{new Date().getFullYear()} Yann. All right reseved
      </p>
    </footer>
  )
}

export default Footer