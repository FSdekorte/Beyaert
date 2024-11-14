// components/Marquee.tsx
import React from 'react';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="overflow-hidden bg-gray-800 text-white py-2">
      <div className="flex whitespace-nowrap animate-marquee space-x-8">
        {/* Repeat the text to create a continuous effect */}
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;