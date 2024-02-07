import { useEffect, useState } from "react";

function useDebounce(initValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initValue]);
  return debounceValue;
}

export default useDebounce;
