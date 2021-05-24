import { useEffect, useState } from 'react';

export const useColor = () => {
  const [color, setColor] = useState<string>();
  const [allColor, setAllColor] = useState<string[]>();

  useEffect(() => {
    chrome.storage.sync.get(['allColor', 'color'], data => {
      const { allColor, color } = data;
      allColor && setAllColor(allColor);
      color && setColor(color);
    });
  }, []);

  const changeColor = (color: string) => {
    setColor(color);
    chrome.storage.sync.set({
      color
    });
  };

  return {
    color,
    allColor,
    changeColor
  };
};
