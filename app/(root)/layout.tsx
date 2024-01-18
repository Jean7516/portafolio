import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Particle from "@/components/Particle";

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
     <Header/>
     <main className='min-h-screen'>{children}</main>
     <Particle></Particle>
     <Footer/>
    </>
    )
}

export default layout