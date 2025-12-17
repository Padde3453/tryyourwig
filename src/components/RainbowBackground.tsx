import { useMemo } from "react";

const COLORS = {
  purple: "rgb(232, 121, 249)",
  blue: "rgb(96, 165, 250)",
  green: "rgb(94, 234, 212)",
};

const COLOR_COMBINATIONS = [
  [COLORS.purple, COLORS.blue, COLORS.green],
  [COLORS.purple, COLORS.green, COLORS.blue],
  [COLORS.green, COLORS.purple, COLORS.blue],
  [COLORS.green, COLORS.blue, COLORS.purple],
  [COLORS.blue, COLORS.green, COLORS.purple],
  [COLORS.blue, COLORS.purple, COLORS.green],
];

const ANIMATION_TIME = 45; // seconds
const LENGTH = 25;

export const RainbowBackground = () => {
  const rainbowElements = useMemo(() => {
    return Array.from({ length: LENGTH }, (_, i) => {
      const colorIndex = Math.floor(Math.random() * 6);
      const colors = COLOR_COMBINATIONS[colorIndex];
      
      const boxShadow = `
        -130px 0 80px 40px white,
        -50px 0 50px 25px ${colors[0]},
        0 0 50px 25px ${colors[1]},
        50px 0 50px 25px ${colors[2]},
        130px 0 80px 40px white
      `;
      
      const animationDuration = ANIMATION_TIME - (ANIMATION_TIME / LENGTH / 2) * (i + 1);
      const animationDelay = -((i + 1) / LENGTH) * ANIMATION_TIME;
      
      return (
        <div
          key={i}
          className="rainbow-line"
          style={{
            boxShadow,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
          }}
        />
      );
    });
  }, []);

  return (
    <div className="rainbow-background">
      {rainbowElements}
      <div className="rainbow-h" />
      <div className="rainbow-v" />
    </div>
  );
};
