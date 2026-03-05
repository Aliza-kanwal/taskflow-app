useEffect(() => {
  const hours = new Date().getHours();
  const isNightTime = hours >= 19 || hours <= 6;
  
  if (isNightTime) {
    setIsDarkMode(true);
  }
}, []);