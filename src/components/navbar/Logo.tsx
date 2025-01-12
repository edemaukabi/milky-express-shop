import React from "react";
import classNames from 'classnames';

interface LogoProps {
  src: string;
  alt?: string;
  text?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt = "Logo", text, className }) => {
  return (
    <div className={classNames('flex items-center space-x-2', className)}>
      <img 
        src={src} 
        alt={alt} 
        className="h-8 w-auto sm:h-10 lg:h-12" 
      />
      {text && (
        <span className="hidden text-lg font-bold text-gray-800 sm:inline lg:text-xl">
          {text}
        </span>
      )}
    </div>
  );
};

export default Logo;
