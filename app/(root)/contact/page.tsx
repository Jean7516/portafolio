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

        <section className='max-width mt-20 section-padding flex max-tablet:flex-col gap-8  font-primary' data-aos="zoom-in" data-aos-delay="100">
        <div className='relative h-[200px] tablet:h-[500px] rounded-b-2xl overflow-hidden tablet:w-4/5' >
            <div className='w-full' >
                <div className='space-y-4'>
                    <div className='box !p-6 text-gray-50 '>
                        <h4 >Acerca de mi:</h4>
                        <h5 className='font-text'>👦🏻 Hola me llamo Yann y soy egresado de la UNS y autodidacta, acerca de mi destacaría lo siguiente: <br />
                        💻Soy un apasionado por la programación y el desarrollo de software, y estoy emocionado por aprender y crecer en este campo.
                        <br />
                        ✍🏻 Tengo una base sólida en al menos un lenguaje de programación, como JavaScript, y estoy dispuesto a seguir aprendiendo y mejorando mis habilidades.   
                        <br />
                        🔁Estoy abierto a recibir retroalimentación y consejos de desarrolladores más experimentados, y estoy comprometido a crecer profesionalmente en este campo.
                        <br />
                        📋Tengo una mentalidad de resolución de problemas y estoy dispuesto a enfrentar desafíos y superar obstáculos en mi camino hacia el dominio del desarrollo de software.
                        <br />
                        💼Estoy entusiasmado por ser parte de proyectos desafiantes y estoy dispuesto a trabajar arduamente para contribuir de manera significativa al éxito del equipo.
                        <br />
                        </h5>

                    </div>
                    
                </div>

            </div>
             </div>
            <div className='tablet:w'>
                <div className='space-y-4'>
                    <div className='box !p-6'>
                        <p className='text-grey-100'>Puedes enviarme un correo:</p>
                        <h6 className='text-gray-100'>yann.vl45.@gmail.com</h6>
                    </div>
                    <div className='box !p-6'>
                        <p className='text-grey-100'>Telefono:</p>
                        <h6 className='text-gray-100'>934749186</h6>
                    </div>
                    <div className='box !p-6'>
                        <p className='text-grey-100'>Locacion:</p>
                        <h6 className='text-gray-100'>Lima - Peru</h6>
                    </div>
                </div>
              {/*  <h6 className='mt-10 text-grey-100 max-tablet:text-center'>Redes sociales</h6>
                <div className='flex gap-3 box !p-6 w-max max-tablet:mx-auto'>
                {socialLinks.map((link,index)=>(
              <a key={index} href={link.url} className='w-10 h-10 bg-amber-600 text-peach flex items-center justify-center rounded'>
                <link.icon strokeWidth={0} fill="white"/>
              </a>
            ))}
                </div>*/} 
            </div>
          

        </section>

     



    </>
  )
}

export default page