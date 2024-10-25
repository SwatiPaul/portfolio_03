import { useState, useEffect } from 'react';

// Custom hook for typewriter effect
const useTypewriter = (text: any, typingSpeed: number = 100) => {
  const [displayText, setDisplayText] = useState(''); // For showing typed text
  const [index, setIndex] = useState(0); // Keeps track of the current character index

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);

      return () => clearTimeout(timeoutId); // Clear the timeout to avoid memory leaks
    }
  }, [index, text, typingSpeed]); // The effect depends on the current index

  return displayText;
};

export default useTypewriter;
