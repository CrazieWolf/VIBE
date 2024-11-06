import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Personal
              <span className="text-indigo-600"> AI Assistant</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the future of personal assistance with our advanced AI companion. 
              Natural conversations, instant responses, 24/7 availability.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center space-x-2">
                <span>Try Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(45%_25%_at_50%_50%,rgba(79,70,229,0.06)_0%,rgba(79,70,229,0)_100%)]" />
      </div>
    </header>
  );
}