import React from 'react';

import html from "../assets/experience/html.png"
import css from "../assets/experience/css.png"
import javascriptimage from "../assets/experience/javascript.png"
import reactImage from "../assets/experience/react.png"
import tailwind from "../assets/experience/tailwind.png"
import pylogo from "../assets/experience/pylogo.png"
import postgreImage from "../assets/experience/post_greSQL.png"
import tableauimage from "../assets/experience/tableau_Logo.png"
import powerbi from "../assets/experience/powerbiLogo.png"


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascriptimage,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: pylogo,
            title: 'Python',
            style: 'shadow-yellow-400'
        },
        {
            id: 7,
            src: postgreImage,
            title: 'PostgreSQL',
            style: 'shadow-blue-400'
        },
        {
            id: 8,
            src: tableauimage,
            title: 'Tableau',
            style: 'shadow-blue-400'
        },
        {
            id: 9,
            src: powerbi,
            title: 'PowerBI',
            style: 'shadow-yellow-500'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500
            p-2 inline'>
                Experience
            </p>
            <p className='py-6'>These are the technologies that I have worked with</p>
        </div>


        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-0 px-4 sm:px-0'>

            {
                techs.map(({id, src, title, style}) => (
                    <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
        </div>
    </div>
  </div>
  )
}

export default Experience