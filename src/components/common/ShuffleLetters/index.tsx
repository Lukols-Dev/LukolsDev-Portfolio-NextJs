"use client";

import { useState, useEffect, FC } from "react";

interface ShuffleLettersProps {
  text: string;
  className?: string;
}

const ShuffleLetters: FC<ShuffleLettersProps> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState<string>(text);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  const SHUFFLE_SPEED = 80;

  useEffect(() => {
    let shuffleInterval: NodeJS.Timeout;
    if (isShuffling) {
      let characters = "0123456789!@#$%^&*()_-+={}[]";
      let shuffleCount = 0;
      const maxShuffle = 6; // Number of times to shuffle before stopping

      shuffleInterval = setInterval(() => {
        let randomText = "";
        for (let j = 0; j < text.length; j++) {
          randomText += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        setDisplayedText(randomText);

        shuffleCount++;
        if (shuffleCount > maxShuffle) {
          clearInterval(shuffleInterval);
          setIsShuffling(false);
          setDisplayedText(text); // Set to final text
        }
      }, SHUFFLE_SPEED);
    }

    return () => clearInterval(shuffleInterval);
  }, [isShuffling, text, SHUFFLE_SPEED]);

  const handleMouseEnter = () => {
    setIsShuffling(true);
  };

  const handleMouseLeave = () => {
    setIsShuffling(false);
    setDisplayedText(text); // Reset to original text when mouse leaves
  };

  return (
    <p
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayedText}
    </p>
  );
};

export default ShuffleLetters;
