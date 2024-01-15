import PortafolioItem from '@/components/PortafolioItem'
import SectiongHeading from '@/components/SectiongHeading'
import { benefits, portfolios, skills } from '@/constants'
import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      {/* perfil*/ }
      <section className='flex items-center max-width flex-col-reverse tablet:flex-row mb-10 font-text'>
        {/*Lado izquierdo*/}
        <div className='tablet:w:2/3 mt-10 tablet:mt-0'>
          <div className='flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left'>
           {/* <p className='px-4 py-2 bg-peach text-grey-600 w-max rounded'>
              Hola
            </p>
             */}
            <h1 className='text-grey 'data-aos="fade-down" >Bienvenido a mi Portafolio</h1>
            <p className='text-gray-800 font-text' data-aos="fade-down" data-aos-delay="100">Soy un apasionado por la programación y el desarrollo de software, y estoy emocionado por aprender y crecer en este campo.
            </p>
            <p className='text-gray-800 font-text' data-aos="fade-down" data-aos-delay="100">
            Desarrolador web Frontend | HTML, CSS, Javascript, ReactJS, NextJS</p>
          </div>
          <div className='flex gap-5 mt-10 justify-center tablet:justify-start' data-aos="fade-down" data-aos-delay="100">
            <Link href={'/contact'} className='btn btn-primary'>
              <Phone></Phone> Contacto
            </Link>
            <Link href={'https://www.linkedin.com/in/yann-v-9840112aa/'} target='blank' className='btn'>
              Linkedin
              <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
        {/*Lado derecho*/}
        <div className='relative  w-full tablet:w-1/3 h-[200px] tablet:h-[320px] rounded-b-2xl overflow-hidden mt-5 tablet:ml-14' data-aos="fade-left" data-aos-delay="100">
          <Image src={'/images/hero.png'} alt='hero' fill className='object-cover'/>
        </div>
      </section>

      {/* Skills*/ }
      <section className='max-width section-padding font-text'data-aos="fade-down" >
        <SectiongHeading title="Skills" subtitle="Como desarrollador, me caracterizo por mi pasión por la programación y la creación de soluciones innovadoras. Tengo experiencia en el desarrollo de aplicaciones web, así como en la implementación de tecnologías modernas." />
        <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 tablet:gap-6'>
          {skills.map((skill,index)=>(
            <div key={index} className='box flex flex-col items-center gap-5' data-aos="fade-down-right" >
              <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2'>
                <Image src={skill.icon} alt={skill.name} width={35} height={35}/>
              </div>
              <div className='text-center'>
                <h4 className='text-gray-700 mb-2'>{skill.name}</h4>
                <p className='text-gray-600'>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portafolio*/ }
      <section className='section-padding max-width font-text' data-aos="fade-down" data-aos-delay="100">
        <SectiongHeading title='Mis Trabajos' subtitle='Una muestra de los proyecto que estube desarrollando'/>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-6' data-aos="flip-left" >
          {portfolios.slice(0, 3).map((portfolio,index)=>(
            <PortafolioItem key={index} portfolio={portfolio}/>
          ))}
        </div>

      </section>      
      {/* beneficios
      <section className='max-width section-padding'>
        <SectiongHeading title="Beneficios" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur voluptate porro aliquid ex sequi, dignissimos rerum harum nisi non culpa facere quae, fuga, fugiat blanditiis laborum consectetur consequuntur qui."/>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-2 tablet:gap-6 mb-2 tablet:mb-6'>
          {benefits.slice(0,2).map((bene,index)=>(
            <div key={index} className='box'>
                <h4 className='text-gray-700 mb-2'>{bene.name}</h4>
                <p className='text-gray-600'>{bene.description}</p>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 tablet:gap-5'>
          {benefits.slice(2).map((bene,index)=>(
            <div key={index} className='box'>
                <h4 className='text-gray-700 mb-2'>{bene.name}</h4>
                <p className='text-gray-600'>{bene.description}</p>
            </div>
          ))}
        </div>
      </section>
*/    }
      
    </>
  )
}

export default page