import React from 'react'

const CareerSection = () => {
  return (
    <div 
      className="border border-gray-300 bg-cover bg-center flex items-center p-10 lg:flex-row flex-col"
      style={{ backgroundImage: 'url(/assets/images/career-bg.png)' }}
    >
        <div className="bg-opacity-80 p-20 rounded-lg shadow-lg flex-1 lg:w-auto w-full max-w-4xl">
            <h1 className="text-4xl mb-4 text-white text-center lg:text-left">
                Let’s Work Together
            </h1>
            <p className="text-lg text-white mb-6 text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare tristique euismod rcu tristique nisl id nibh. Viverra feugiat viverra. Lorem ipsum dolor sit amet consectetur
            </p>
        </div>
        <div className='flex-1 flex justify-center mt-4 lg:mt-0 lg:justify-center'>
            <button className="bg-white text-black text-xl font-semibold py-6 px-16 rounded-xl border border-gray-300 hover:bg-gray-100 transition duration-300">
                View Vacancies
            </button>
        </div>
    </div>
  )
}

export default CareerSection
