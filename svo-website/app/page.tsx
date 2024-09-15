'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Music, Mic, Film, GraduationCap } from 'lucide-react';

type SectionKey = 'pianist' | 'singer' | 'actor' | 'teacher';

interface Section {
  color: string;
  icon: React.ReactNode;
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>('pianist');

  const sections: Record<SectionKey, Section> = {
    pianist: { color: 'bg-pink-200', icon: <Music className="w-12 h-12" /> },
    singer: { color: 'bg-purple-200', icon: <Mic className="w-12 h-12" /> },
    actor: { color: 'bg-blue-200', icon: <Film className="w-12 h-12" /> },
    teacher: { color: 'bg-green-200', icon: <GraduationCap className="w-12 h-12" /> },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-lato text-gray-800 overflow-hidden">
      {/* Diagonal background */}
      <div className="fixed inset-0 bg-pink-100 transform -skew-y-6 origin-top-right z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="text-3xl font-light text-pink-600 tracking-wider">SHAWNA VAN OMME</a>
            <nav className="hidden md:flex space-x-6">
              {(Object.keys(sections) as SectionKey[]).map((key) => (
                <button
                  key={key}
                  className={`text-gray-600 hover:text-pink-600 transition duration-300 capitalize ${activeSection === key ? 'font-bold' : ''}`}
                  onClick={() => setActiveSection(key)}
                >
                  {key}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20 min-h-screen flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <motion.h1 
              className="text-6xl md:text-8xl font-light mb-4 text-pink-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Shawna van Omme
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-light mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pianist • Singer • Actor • Music Teacher
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <Youtube size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 p-8 flex items-center justify-center">
            <motion.div 
              className={`w-80 h-80 rounded-full ${sections[activeSection].color} flex items-center justify-center overflow-hidden`}
              layoutId="activeSection"
            >
              <div className="text-center">
                {sections[activeSection].icon}
                <h2 className="text-3xl font-light mt-4 capitalize">{activeSection}</h2>
              </div>
            </motion.div>
          </div>
        </main>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-12 text-pink-600">About Shawna</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl mb-6 font-light">
                Shawna van Omme is a versatile artist who brings passion and expertise to every performance and lesson. 
                With her emotive voice, piano artistry, and captivating stage presence, she creates unforgettable experiences 
                in music and theatre.
              </p>
              <p className="text-xl font-light">
                As a dedicated music educator, Shawna inspires students to explore their musical potential and develop 
                their unique artistic voices through innovative teaching methods and genuine enthusiasm.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-8">Ready to Start Your Musical Journey?</h2>
            <button className="bg-white text-pink-600 py-3 px-8 rounded-full text-xl font-light hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
              Book a Lesson
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="font-light">&copy; 2023 Shawna van Omme. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
