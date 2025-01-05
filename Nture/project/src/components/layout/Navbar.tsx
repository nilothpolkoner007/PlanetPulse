import React from 'react';
import { Leaf, BookOpen, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-green-900">EcoLife</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <NavLink icon={BookOpen} label="Tips" />
            <NavLink icon={ShoppingBag} label="Shop" />
            <NavLink icon={User} label="Dashboard" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <a 
      href="#" 
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
    >
      <Icon className="w-5 h-5 mr-1.5" />
      {label}
    </a>
  );
}