import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-md mb-2 font-extrabold">
          &copy; {new Date().getFullYear()} Weather App. All rights reserved.
        </p>
        <p className="text-s text-white-500">
          Built with ❤️ using Next.js. Weather data provided by{' '}
          <a
            href="https://openweathermap.org/"
            className="text-blue-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenWeatherMap
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
