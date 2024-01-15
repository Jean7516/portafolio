import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image';
import { socialLinks } from '@/constants';
export const metadata:Metadata={title:'contact - Jean'};

const page = () => {
  return (
    <>
        <section className='max-width section-padding'>
            <div className='box text-center flex flex-col items-center gap-3'>
                <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                    <Image src={'/icons/stars.svg'} alt='icon' width={35} height={35}/>
                </div>
                <h2 className='text-grey-700'> llllllsasd</h2>
                <p className='text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci molestias cupiditate itaque. Eius recusandae soluta commodi qui id ab, ipsum, vel eos nihil natus exercitationem laudantium reiciendis iure. Ea!</p>
            </div>
        </section>
        <section className='max-width section-padding flex max-tablet:flex-col gap-16'>
            <div className='tablet:max-w-md w-full'>
                <div className='space-y-4'>
                    <div className='box !p-6'>
                        <p className='text-grey-600'>Puedes enviarme un correo:</p>
                        <h6 className='text-gray-700'>email.@gmail.com</h6>
                    </div>
                    <div className='box !p-6'>
                        <p className='text-grey-600'>Puedes enviarme un correo:</p>
                        <h6 className='text-gray-700'>email.@gmail.com</h6>
                    </div>
                    <div className='box !p-6'>
                        <p className='text-grey-600'>Puedes enviarme un correo:</p>
                        <h6 className='text-gray-700'>email.@gmail.com</h6>
                    </div>
                </div>
                <h6 className='mt-10 text-grey-700 max-tablet:text-center'>Redes sociales</h6>
                <div className='flex gap-3 box !p-6 w-max max-tablet:mx-auto'>
                {socialLinks.map((link,index)=>(
              <a key={index} href={link.url} className='w-10 h-10 bg-purple text-peach flex items-center justify-center rounded'>
                <link.icon strokeWidth={0} fill="white"/>
              </a>
            ))}
                </div>
            </div>
        </section>

    </>
  )
}

export default page