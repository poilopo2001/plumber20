import * as React from 'react';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col justify-center items-center px-16 py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1496px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {children}
        </div>
      </div>
    </main>
  );
};
