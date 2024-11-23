import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <Icon className="w-8 h-8 text-blue-400" />
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;