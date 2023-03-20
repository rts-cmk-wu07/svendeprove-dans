import { useEffect, useState } from 'react';

const UseScrollAlert = (triggerHeight = 100) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertShown, setAlertShown] = useState(false);


  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= triggerHeight && !alertShown) {
        setShowAlert(true);
        setAlertShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [alertShown, triggerHeight]);

  return [showAlert, setShowAlert];
};

export default UseScrollAlert;
