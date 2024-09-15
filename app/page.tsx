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
        <section className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top pt-24 md:pt-0" style={{ backgroundImage: 'url("/images/svo1new.png")' }}>     
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-light mb-4 font-lato">Shawna van Omme</h1>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top pt-24 md:pt-0" style={{ backgroundImage: 'url("/images/svoabout.png")' }}>
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
              <p className="text-xl font-light mb-4 font-lato">
                Shawna was born in Charlottetown, Prince Edward Island and was fortunate to grow up in a place that had a very strong arts community. She began taking dance lessons at the age of 3 and it was not long after that she was taking voice and piano lessons and performing in community theatre.
              </p>
              <p className="text-xl font-light mb-4 font-lato">
                At the age of 13 she performed in her first professional show, Gabriel and Evangeline.
              </p>
              <p className="text-xl font-light mb-4 font-lato">
                Her first Equity gig was at the age of 17 in Don Messer’s Violin where she traveled to Toronto to perform in a music video for one of the songs in the show. This was an incredible thrill for a 17 year old from a small town to be living and working in Toronto- even if it was only for a short period of time before returning to the Island.
              </p>
              <p className="text-xl font-light mb-4 font-lato">
                Growing up in PEI it was a treat to be exposed to the exceptional caliber of talent that passed through the Charlottetown Festival over the years. This became a major influence in her creative drive to become an artist. So it was an absolute thrill to be accepted into the Festival’s Young Company at the age of 18. At the same time she had the opportunity to understudy the part of Prissy Andrews on the Main Stage in Anne of Green Gables.
              </p>
              <p className="text-xl font-light mb-4 font-lato">
                After that summer she was off to Ontario and Sheridan College for the Music Theatre Performance Program she had heard so much about. After her first year at Sheridan she became a full member in the Charlottetown Festival Company performing for 11 consecutive seasons in such shows as Anne of Green Gables, The Happy Prince, British Invasion, Buddy: The Buddy Holly Story, and Canada Rocks to name a few.
              </p>
              <p className="text-xl font-light mb-4 font-lato">
                As well as performing in Musical Theatre on Main Stages across Canada, she has had the opportunity to perform in farces such as Don’t Dress For Dinner (Suzanne), and There Goes The Bride (Polly Perkins). Added to her list of accomplishments are musical directing credits for Jack and the Beanstalk (Gayety), A Christmas Carol and A Gift to Last (Upper Canada Playhouse).
              </p>
              <p className="text-xl font-light mb-4 font-lato">
                A career highlight for Shawna was when she played the part of Lesley in Billy Elliot, the Musical at the Canon Theatre (Mirvish). As part of a predominantly American cast, Shawna had the honour of being one of the few Canadians.
              </p>
              <p className="text-xl font-light mb-4 font-lato">
                She has most recently performed at Stage West Calgary in their production of Two Hit Wonders. She currently lives in Toronto with her husband where she teaches voice and piano lessons when she is not performing.
              </p>
              <p className="text-xl font-light mb-4 font-lato">
                Thanks so much for taking the time to look at her page!
              </p>
            </div>
          )}
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top pt-24 md:pt-0" style={{ backgroundImage: 'url("/images/gallerypic.png")' }}>
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
        <section id="news" className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top pt-24 md:pt-0" style={{ backgroundImage: 'url("/images/page3-1000-full.jpg")' }}>
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
        <section id="contact" className="relative h-[calc(100vh-4rem)] bg-gray-800 bg-fixed bg-cover bg-top pt-24 md:pt-0" style={{ backgroundImage: 'url("/images/main_hshot.png")' }}>
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