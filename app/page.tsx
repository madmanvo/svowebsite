'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-4 bg-white bg-opacity-90 shadow-md z-50 fixed top-0">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-light text-black font-lato mr-auto">SHAWNA VAN OMME</h1>
          <nav className="flex space-x-4">
            <a href="#about" className="text-gray-600 hover:text-black transition font-lato">About</a>
            <a href="#gallery" className="text-gray-600 hover:text-black transition font-lato">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition font-lato">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Hero Section with Image on Left and Name on Right */}
      <main className="pt-24">
        <section className="flex flex-col md:flex-row h-screen items-center justify-center">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: 'url("/images/svo1new.png")' }}>
            {/* The image div occupies half the screen width on medium and larger screens */}
          </div>

          {/* Right: Name and Titles */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8">
            <h1 className="text-pink-600 text-5xl md:text-6xl font-light mb-4 font-lato">Shawna van Omme</h1>
            <p className="text-xl md:text-2xl font-light font-lato">Singer • Actor • Pianist • Music Teacher</p>
            <div className="mt-8 flex space-x-4">
              <a href="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <Image
                src="/images/svoabout.png"
                alt="About Shawna"
                width={500}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-4xl font-light text-pink-600 mb-4 font-lato">About Shawna</h2>
              <p className="text-xl font-light mb-4 font-lato">
                Shawna van Omme is a versatile artist who brings passion and expertise to every performance and lesson.
                With her emotive voice, piano artistry, and captivating stage presence, she creates unforgettable experiences
                in music and theatre.
              </p>
              <p className="text-xl font-light font-lato">
                As a dedicated music educator, Shawna inspires students to explore their musical potential and develop
                their unique artistic voices through innovative teaching methods and genuine enthusiasm.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-8 font-lato">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Placeholder for Gallery Images */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">Image 1</div>
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">Image 2</div>
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">Image 3</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-8 font-lato">Ready to Start Your Musical Journey?</h2>
            <button className="bg-white text-pink-600 py-3 px-8 rounded-full text-xl font-light hover:bg-opacity-90 transition duration-300 font-lato">
              Book a Lesson
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-light">&copy; 2023 Shawna van Omme. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white hover:text-pink-600 transition"><Instagram size={24} /></a>
            <a href="#" className="text-white hover:text-pink-600 transition"><Facebook size={24} /></a>
            <a href="#" className="text-white hover:text-pink-600 transition"><Youtube size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;