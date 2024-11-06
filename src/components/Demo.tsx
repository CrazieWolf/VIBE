import React from 'react';
import { Sparkles } from 'lucide-react';

export function Demo() {
  return (
    <section id="demo" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Live Demo</h2>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Your chatbot interface will go here</p>
          </div>
        </div>
      </div>
    </section>
  );
}