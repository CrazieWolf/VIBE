import React from 'react';
import { MessageSquare, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
    title: "Natural Conversations",
    description: "Advanced language processing for human-like interactions"
  },
  {
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    title: "Instant Responses",
    description: "Lightning-fast replies to keep you productive"
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: "Secure & Private",
    description: "Enterprise-grade security for peace of mind"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Powerful Features for Modern Life
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}