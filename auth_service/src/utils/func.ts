export const randomColorShade = (): number => {
  const minValue = 400;
  const maxValue = 900;
  const step = 100;

  return Math.floor(Math.random() * ((maxValue - minValue) / step + 1)) * step + minValue;
};
export const randomColor = (): string => {
  const colors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
