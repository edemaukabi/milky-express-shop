import React from "react";
import classNames from 'classnames';

interface LogoProps {
  src: string;
  alt?: string;
  text?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt = "Milky Express Logo", className }) => {
  return (
    <div className={classNames('flex items-center', className)}>
      <img 
        src={src} 
        alt={alt} 
        className="h-16 w-auto sm:h-18 lg:h-20 object-contain cursor-pointer" 
      />
    </div>
  );
};

export default Logo;
