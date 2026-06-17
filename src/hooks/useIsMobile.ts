import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 768) {
  // Default to false for SSR, will update on mount
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
}
