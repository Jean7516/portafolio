import Particle from "@/components/Particle";
import PortafolioItem from "@/components/PortafolioItem";
import SectiongHeading from "@/components/SectiongHeading";
import { benefits, portfolios, skills } from "@/constants";
import { ArrowRight, Github, Linkedin, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {/* perfil*/}
      <section className="flex items-center max-width flex-col-reverse  mb-10 ">
        {/*Lado izquierdo*/}

        <div className=" mt-4 tablet:mt-20">
          <div className="flex flex-col gap-2 items-center  text-center ">
            {/* <p className='px-4 py-2 bg-peach text-grey-600 w-max rounded'>
              Hola
            </p>
             */}
            <h1 className="leading-tight mb-10 pb-4 relative ">
              <span className="py-10 text-6xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 text-center font-primary">
                Hola, Soy Yann
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </h1>
            <p className="text-white text-2xl font-text" data-aos="fade-down"data-aos-delay="100">
              Soy un apasionado por la programación y el desarrollo de software,y estoy emocionado por aprender y crecer en este campo.
            </p>
            <p className="text-white text-2xl font-text " data-aos="fade-down" data-aos-delay="100" >
              Junior developer <br />
              React Enthusiast <br />
              Full-stack (MERN) + Typescript Developer
            </p>
          </div>
          <div
            className="flex gap-4 mt-5 justify-center " data-aos="fade-down">
            <Link
              href={"https://github.com/Jean7516"}
              className="btn btn-primary"
            >
              <Github /> Github
            </Link>
            <Link
              href={"https://www.linkedin.com/in/yann-v-9840112aa/"}
              className="btn btn-primary"
            >
              <LinkedinIcon /> Linkedin
            </Link>
          </div>
        </div>
        {/*Lado derecho
        <div className='relative  w-full tablet:w-1/3 h-[200px] tablet:h-[320px] rounded-b-2xl overflow-hidden mt-5 tablet:ml-14' data-aos="fade-left" data-aos-delay="100">
          <Image src={'/images/hero.png'} alt='hero' fill className='object-cover'/>
        </div>*/}
        <Particle></Particle>
      </section>

      {/* Skills*/}
      <section
        className="max-width section-padding font-text"
        data-aos="fade-down"
      >
        <SectiongHeading
          title="Skills"
          subtitle="Como desarrollador, me caracterizo por mi pasión por la programación y la creación de soluciones innovadoras. Tengo experiencia en el desarrollo de aplicaciones web, así como en la implementación de tecnologías modernas."
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 tablet:gap-6 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="box flex flex-col items-center gap-5  "
              data-aos="fade-down-right"
            >
              <div className="w-16 h-16 rounded bg-gradient-to-r from-red-700 to-amber-700  flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  height={0}
                  width={0}
                  style={{ width: "35px", height: "auto" }}
                />
              </div>
              <div className="text-center font-primary">
                <h4 className="text-gray-100 mb-2">{skill.name}</h4>
                <p className="text-gray-200">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portafolio*/}
      <section
        className="section-padding max-width font-text"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <SectiongHeading
          title="Proyectos"
          subtitle="Disfruto construyendo e implementando proyectos. A continuación se muestran proyectos seleccionados de los que he formado parte."
        />
        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-6 font-text"
          data-aos="flip-left"
        >
          {portfolios.slice(0, 3).map((portfolio, index) => (
            <PortafolioItem key={index} portfolio={portfolio} />
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
*/}
    </>
  );
};

export default page;
