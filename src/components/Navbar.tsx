import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <nav className="fixed top-0 w-full z-10 px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">VIBE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className={`${currentTab === 'home' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
            onClick={() => setCurrentTab('home')}
          >
            Features
          </a>
          <a 
            href="#chat" 
            className={`${currentTab === 'chat' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
            onClick={() => setCurrentTab('chat')}
          >
            Chat
          </a>
          <button className="text-gray-600 hover:text-indigo-600">
            Sign In
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-indigo-600"
              onClick={() => {
                setCurrentTab('home');
                setIsMenuOpen(false);
              }}
            >
              Features
            </a>
            <a 
              href="#chat" 
              className="text-gray-600 hover:text-indigo-600"
              onClick={() => {
                setCurrentTab('chat');
                setIsMenuOpen(false);
              }}
            >
              Chat
            </a>
            <button className="text-gray-600 hover:text-indigo-600 text-left">
              Sign In
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}