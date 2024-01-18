import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import { Phone } from 'lucide-react'
import MovilMenu from './MovilMenu'

const Header = () => {
  return (
    <header className='flex items-center justify-between h-20 max-width  font-primary' >
        <Link href={"/"}>
            <h5 className='text-gray-50 text-xl '>Web
            <span className='text-amber-600'> Developer</span></h5>
        </Link>
        <nav className='flex items-center gap-12 max-tablet:hidden'>
            <ul className='flex items-center gap-8'>
                {navLinks.map((link, index)=>(
                    <li key={index}>
                        <NavLink href={link.url} label={link.label}/>         
                    </li>
                ))}
            </ul>
            <Link href={"/contact"} className=' '>
                <button className=' btn-primary'><Phone size={24}>Contacto</Phone></button>
                
            </Link>
        </nav>
        <MovilMenu/>
    </header>
  )
}

export default Header



