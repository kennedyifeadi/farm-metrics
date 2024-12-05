import { useState, useEffect, useRef } from "react";

const useToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const elementRef = useRef(null); 

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible]);

  return { isVisible, toggleVisibility, elementRef };
};

export default useToggleVisibility;
