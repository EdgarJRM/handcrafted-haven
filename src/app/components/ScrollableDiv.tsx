'use client';

import { ReactNode, useState, useRef, useEffect } from 'react';

interface ScrollableDivProps {
  children: ReactNode;
}

const ScrollableDiv = ({ children }: ScrollableDivProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollInterval, setScrollInterval] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null; // Guardamos el ID del intervalo
    if (scrollContainerRef.current) {
      intervalId = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 2;
          setScrollPosition(scrollContainerRef.current.scrollLeft);
        }
      }, 50);
    }
  
    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Limpiamos el intervalo anterior
      }
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const containerWidth = container?.scrollWidth || 0;
    const scrollLeft = container?.scrollLeft || 0;
    const clientWidth = container?.clientWidth || 0;

    if (container && containerWidth - scrollLeft === clientWidth) {
      // Llegamos al final, volvemos al principio
      container.scrollLeft = 0;
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto overflow-y-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
        {children} {/* Clonamos los elementos hijos */}
      </div>
    </div>
  );
};

export default ScrollableDiv;