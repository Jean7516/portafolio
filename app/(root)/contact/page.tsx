import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image';
import { socialLinks } from '@/constants';
export const metadata:Metadata={title:'contact - Jean'};

const page = () => {
  return (
    <> {/* 
        <section className='max-width section-padding'>
            <div className='box text-center flex flex-col items-center gap-3'>
                <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                    <Image src={'/icons/stars.svg'} alt='icon' width={35} height={35}/>
                </div>
                <h2 className='text-grey-700'> llllllsasd</h2>
                <p className='text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci molestias cupiditate itaque. Eius recusandae soluta commodi qui id ab, ipsum, vel eos nihil natus exercitationem laudantium reiciendis iure. Ea!</p>
            </div>
        </section>*/}

        <section className='max-width section-padding flex max-tablet:flex-col gap-16 tablet:w:2/3 font-text' data-aos="zoom-in" data-aos-delay="100">
        <div className='relative  w-full h-[200px] tablet:h-[450px] rounded-b-2xl overflow-hidden tablet:ml-14' >
            <div className='w-full' >
                <div className='space-y-4'>
                    <div className='box !p-6'>
                        <p className='text-grey-7000 font-primary'>Acerca de mi:</p>
                        <h6 className='text-gray-700'>👦🏻 Hola me llamo Yann y soy egresado de la UNS y autodidacta, acerca de mi destacaría lo siguiente:</h6>
                        <h6 className='text-gray-700'>💻Soy un apasionado por la programación y el desarrollo de software, y estoy emocionado por aprender y crecer en este campo.</h6>
                        <h6 className='text-gray-700'>✍🏻 Tengo una base sólida en al menos un lenguaje de programación, como JavaScript, y estoy dispuesto a seguir aprendiendo y mejorando mis habilidades.</h6>
                        <h6 className='text-gray-700'>🔁Estoy abierto a recibir retroalimentación y consejos de desarrolladores más experimentados, y estoy comprometido a crecer profesionalmente en este campo.</h6>
                        <h6 className='text-gray-700'>📋Tengo una mentalidad de resolución de problemas y estoy dispuesto a enfrentar desafíos y superar obstáculos en mi camino hacia el dominio del desarrollo de software.
                        </h6>
                        <h6 className='text-gray-700'>💼Estoy entusiasmado por ser parte de proyectos desafiantes y estoy dispuesto a trabajar arduamente para contribuir de manera significativa al éxito del equipo.</h6>
                    </div>
                    
                </div>

            </div>
             </div>
            <div className='tablet:max-w-md w-full'>
                <div className='space-y-4'>
                    <div className='box !p-6'>
                        <p className='text-grey-600'>Puedes enviarme un correo:</p>
                        <h6 className='text-gray-700'>yann.vl45.@gmail.com</h6>
                    </div>
                    <div className='box !p-6'>
                        <p className='text-grey-600'>Telefono:</p>
                        <h6 className='text-gray-700'>934749186</h6>
                    </div>
                    <div className='box !p-6'>
                        <p className='text-grey-600'>Locacion:</p>
                        <h6 className='text-gray-700'>Lima - Peru</h6>
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