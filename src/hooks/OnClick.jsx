import { useCallback } from "react";

export const useOnClick = (callback) => {
  // Create a memoized onClick handler
  const handleClick = useCallback(
    (event) => {
      if (typeof callback === "function") {
        callback(event);
      } else {
        console.warn("Callback is not a function");
      }
    },
    [callback] // Depend on the provided callback
  );

  return handleClick;
};


