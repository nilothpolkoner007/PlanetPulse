import React from 'react';
import { Droplets, Trash2, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: Trash2,
    value: '8M',
    label: 'Tons of plastic enter our oceans yearly',
    color: 'text-red-400'
  },
  {
    icon: Droplets,
    value: '1M',
    label: 'Marine animals die from plastic pollution',
    color: 'text-blue-400'
  },
  {
    icon: Recycle,
    value: '91%',
    label: 'Plastic is not recycled',
    color: 'text-green-400'
  }
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
        >
          <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
          <div className="text-3xl font-bold mb-2">{stat.value}</div>
          <div className="text-blue-100">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}