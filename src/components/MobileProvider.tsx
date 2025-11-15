'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileContext = createContext<boolean | undefined>(undefined);

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};

export const MobileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>;
};
