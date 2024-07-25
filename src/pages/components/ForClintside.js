import { useEffect, useState } from 'react';

const useOperatingSystem = () => {
  const [os, setOS] = useState('unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setOS('Android');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setOS('iOS');
    } else if (/Mac/i.test(userAgent)) {
      setOS('Mac');
    } else if (/Windows/i.test(userAgent)) {
      setOS('Windows');
    }
  }, []);

  return os;
};

export default useOperatingSystem;
