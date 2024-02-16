import { useState } from "react";

function useToggleValue(initialValue = false) {
  const [value, setToggleValue] = useState(initialValue);

  const handleToggleValue = () => {
    setToggleValue(!value);
  };

  return { value, handleToggleValue };
}

export default useToggleValue;
