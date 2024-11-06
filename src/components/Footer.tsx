import React from 'react';
import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6" />
            <span className="font-bold">VIBE</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 VIBE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}