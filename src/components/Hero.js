import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-900 py-20 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Explore the Weather with Precision</h1>
        <p className="text-lg mb-8">
          Get detailed weekly and hourly weather forecasts for any location worldwide.
        </p>
        {/* <a
          href="#search"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Search Weather
        </a> */}
      </div>
    </div>
  );
};

export default Hero;

