import { memo } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  accent?: boolean;
}

export const SectionHeading = memo<SectionHeadingProps>(({ title, subtitle, centered = false, light = false, accent = false }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center mx-auto' : ''} max-w-4xl`}>
      <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] mb-6 ${light ? 'text-white' : 'text-black'}`}>
        {accent ? (
          <>
             <span className="text-brand-red mr-2">/</span>
             {title}
          </>
        ) : title}
      </h2>
      {subtitle && (
        <div className={`flex ${centered ? 'justify-center' : 'justify-start'}`}>
          <div className={`h-[2px] w-12 ${light ? 'bg-brand-red/70' : 'bg-brand-red'} mt-3 mr-4`}></div>
          <p className={`text-lg md:text-xl font-light ${light ? 'text-gray-300' : 'text-gray-600'} uppercase tracking-wide max-w-xl`}>
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
});