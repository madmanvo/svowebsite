'use client';

import React, { useState } from 'react';
import { PlusCircle, Instagram, Facebook, Youtube } from 'lucide-react';

const HomePage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleExpand = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-4 bg-white bg-opacity-90 shadow-md z-50 fixed top-0">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-light text-black font-lato mr-auto">SHAWNA VAN OMME</h1>
          <nav className="flex space-x-4">
            <a href="#about" className="text-gray-600 hover:text-black transition font-lato">About</a>
            <a href="#gallery" className="text-gray-600 hover:text-black transition font-lato">Gallery</a>
            <a href="#news" className="text-gray-600 hover:text-black transition font-lato">News</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition font-lato">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top" style={{ backgroundImage: 'url("/images/svo1new.png")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-light mb-4 font-lato">Shawna van Omme</h1>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top" style={{ backgroundImage: 'url("/images/svoabout.png")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-light mb-4 font-lato">About</h2>
            <button
              className="mt-12 flex flex-col items-center space-y-2"
              onClick={() => toggleExpand('about')}
            >
              <PlusCircle className="text-white hover:text-pink-600 transition duration-300" size={48} />
              <span className="text-white font-light">Expand Section</span>
            </button>
          </div>
          {expandedSection === 'about' && (
            <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-8">
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
          )}
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top" style={{ backgroundImage: 'url("/images/gallerypic.png")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-light mb-4 font-lato">Gallery</h2>
            <button
              className="mt-12 flex flex-col items-center space-y-2"
              onClick={() => toggleExpand('gallery')}
            >
              <PlusCircle className="text-white hover:text-pink-600 transition duration-300" size={48} />
              <span className="text-white font-light">Expand Section</span>
            </button>
          </div>
          {expandedSection === 'gallery' && (
            <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-8">
              <p className="text-xl font-light mb-4 font-lato">
                Gallery content goes here. You can add images, videos, or any other media to showcase Shawna&apos;s work.
              </p>
            </div>
          )}
        </section>

        {/* News Section */}
        <section id="news" className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top" style={{ backgroundImage: 'url("/images/page3-1000-full.jpg")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-light mb-4 font-lato">News</h2>
            <button
              className="mt-12 flex flex-col items-center space-y-2"
              onClick={() => toggleExpand('news')}
            >
              <PlusCircle className="text-white hover:text-pink-600 transition duration-300" size={48} />
              <span className="text-white font-light">Expand Section</span>
            </button>
          </div>
          {expandedSection === 'news' && (
            <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-8">
              <p className="text-xl font-light mb-4 font-lato">
                News content goes here. You can add updates, announcements, or any other relevant information.
              </p>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top" style={{ backgroundImage: 'url("/images/main_hshot.png")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-light mb-4 font-lato">Contact</h2>
            <button
              className="mt-12 flex flex-col items-center space-y-2"
              onClick={() => toggleExpand('contact')}
            >
              <PlusCircle className="text-white hover:text-pink-600 transition duration-300" size={48} />
              <span className="text-white font-light">Expand Section</span>
            </button>
          </div>
          {expandedSection === 'contact' && (
            <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-8">
              <p className="text-xl font-light mb-4 font-lato">
                Contact content goes here. You can add contact information, a form, or any other relevant details.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-light">&copy; 2023 Shawna van Omme. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white hover:text-pink-600 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-pink-600 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-pink-600 transition">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;