import React from 'react'
import BannerCoffee from '../assets/BannerCoffee.png' 

const Banner = () => {
  return (
    <div id='home' className='relative bg-cover bg-no-repeat bg-center min-h-[80vh] md:min-h-[85vh] lg:min-h-[98vh] flex items-center px-8 sm:px-4 md:px-6' style={{backgroundImage: `url(${BannerCoffee})`}}>
        <div className='absolute inset-0 bg-black opacity-30'/>
        <div className='relative z-10 max-w-xl text-white text-center sm:text-center md:text-center lg:text-left'>
            {/* Title */}

            <h1 className='px-5 mb-4 text-3xl font-bold font-playFairDisplay sm:text-5xl md:text-7xl lg:text-9xl' style={{fontFamily:'Dancing Script , cursive'}}>
              Coffee
            </h1>
            {/* Discription */}
            <p className='px-5 leading-relaxed mb-6 font-serif sm:text-base md:text-xl lg:text-3xl'>
                  It is best to start your day with a cup of coffee. Discover the best flavours of coffee you will ever have . we provide the best for our customers.
            </p>
              {/* Call to action btn */}
                <div className='flex justify-center lg:justify-start'>
                  <button className='bg-amber-600 hover:bg-yellow-700 text-black font-medium transition-colors rounded-full shadow-lg border-2 border-yellow-800 hover:border-yellow-700 px-6 py3 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-lg'> 
                    Order Now
                  </button>

                </div>
        </div>
    </div>
  )
}

export default Banner