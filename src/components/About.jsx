import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
        Andrew is a data analyst with expertise in SQL, Python,
        Power BI, HTML, CSS, and JavaScript. What sets Andrew
        apart is his ability to not only uncover insights that drive
        real-world impact, but also to present them in a visually
        compelling and creative way, making complex data more
        accessible to stakeholders!
        </p>

        <br />

        <p className='text-xl'>
        Andrew's commitment to stakeholder satisfaction sets him apart 
        as he consistently exceeds expectations. He meticulously analyzes 
        the unique requirements and objectives of each stakeholder, ensuring 
        that his insights align precisely with their specific needs. He presents 
        findings in a concise and tailored manner, leveraging his technical expertise 
        to provide impactful insights that drive tangible results. 
        </p>
    </div>

    </div>
  )
}

export default About