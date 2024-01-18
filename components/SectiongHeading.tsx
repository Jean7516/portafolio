import React from 'react'

const SectiongHeading = ({title, subtitle,}:{title:string; subtitle:string;}) => {
  return (
    <div className='max-w-xl mx-auto mb-16  mt-16 bg-clip-text   font-primary'>

        <h2 className="py-10 text-5xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 text-center font-primary">
        {title}
              </h2>
        <p className='text-slate-50 text-lg'>{subtitle}</p>
    </div>
  )
}

export default SectiongHeading