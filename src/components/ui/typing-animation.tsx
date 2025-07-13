import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypingAnimation = ({ 
  text, 
  className = "", 
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const renderColoredText = () => {
    const parts = [
      { text: ">_ AMIRI", color: "text-yellow-400" },
      { text: " Academy", color: "text-blue-400" }
    ];
    
    let currentLength = 0;
    return parts.map((part, index) => {
      const partStart = currentLength;
      const partEnd = currentLength + part.text.length;
      currentLength += part.text.length;
      
      if (displayText.length <= partStart) {
        return null;
      }
      
      const visibleText = displayText.slice(partStart, Math.min(partEnd, displayText.length));
      return (
        <span key={index} className={part.color}>
          {visibleText}
        </span>
      );
    }).filter(Boolean);
  };

  return (
    <span className={className}>
      {renderColoredText()}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  );
};