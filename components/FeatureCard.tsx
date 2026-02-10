
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-10 rounded-[2.5rem] bg-[#111] border border-white/5 hover:border-amber-500/20 transition-all group">
      <div className="mb-8 p-4 bg-black rounded-2xl inline-block group-hover:bg-amber-500/5 transition-colors">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
