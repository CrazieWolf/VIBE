import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Demo } from './components/Demo';
import { Chat } from './components/Chat';
import { Auth } from './components/Auth';
import { Footer } from './components/Footer';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Chat />
      <Footer />
      <Auth 
        isOpen={showAuth} 
        onClose={() => setShowAuth(false)} 
        type={authType} 
      />
    </div>
  );
}

export default App;