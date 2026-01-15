'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './narrative.module.css';

const Narrative = () => {
  const storyTextRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const sentences = [
    {
      words: [
        "In",
        "Arabic,",
        "Sook",
        "<span class='embedded-script' style='font-family: \"Noto Naskh Arabic\", serif; color: #C05621;'>سوق</span>",
        "is",
        "a",
        "lane",
        "in",
        "a",
        "bazaar,",
        "specific",
        "to",
        "needs."
      ]
    },
    {
      words: [
        "In",
        "Korean,",
        "Sook",
        "<span class='embedded-script' style='font-family: \"Noto Sans KR\", sans-serif; color: #5C7A7C;'>숙</span>",
        "means",
        "pristine",
        "and",
        "beautiful."
      ]
    },
    {
      words: [
        "In",
        "Hindi,",
        "Sook",
        "<span class='embedded-script' style='font-family: \"Noto Sans Devanagari\", sans-serif; color: #D69E2E;'>सुख</span>",
        "is",
        "a",
        "state",
        "of",
        "happiness",
        "and",
        "calm."
      ]
    },
    {
      words: [
        "In",
        "Russian,",
        "Sook",
        "<span class='embedded-script' style='font-family: \"Roboto\", sans-serif; color: #1B3B36;'>сук</span>",
        "is",
        "a",
        "branch",
        "that",
        "connects."
      ]
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const animateCycle = (currentIndex: number = 0, isMessageCycle: boolean = false) => {
    if (!storyTextRef.current || !mounted) return;

    const animateSequence = (index: number) => {
      const currentItem = sentences[index];
      
      // Build HTML with word spans
      const html = currentItem.words
        .map(word => `<span class="${styles.word}">${word}</span>`)
        .join('');
      storyTextRef.current!.innerHTML = html;
      
      // Set all words to hidden
      gsap.set(`.${styles.word}`, { opacity: 0, y: 20 });
      
      // Create timeline
      const tl = gsap.timeline({
        onComplete: () => {
          const nextIndex = (index + 1) % sentences.length;
          
          // If we've cycled back to start (index 0), show the message
          if (nextIndex === 0) {
            showMessage();
          } else {
            animateSequence(nextIndex);
          }
        }
      });

      // Enter - Staggered word reveal
      tl.to(`.${styles.word}`, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out"
      }, 0);

      // Read - Hold for reading
      tl.to({}, { duration: 2.5 });

      // Exit - Fade out
      tl.to(`.${styles.word}`, {
        opacity: 0,
        y: -15,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.in"
      });
    };

    animateSequence(currentIndex);
  };

  const showMessage = () => {
    // Clear narrative text
    storyTextRef.current!.innerHTML = '';
    
    // Create message HTML (smile is handled by SookIntro)
    const messageHTML = `
      <div class="${styles.messageContainer}">
        <div class="${styles.messageLine}">Welcome to the marketplace</div>
        <div class="${styles.messageLine}">Find your lane(s)</div>
      </div>
    `;
    storyTextRef.current!.innerHTML = messageHTML;
    
    // Animate message in
    const tl = gsap.timeline();

    tl.to({}, { duration: 0.3 });
    tl.to(`.${styles.messageLine}`, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, 0);
  };

  useEffect(() => {
    if (mounted) {
      animateCycle();
    }
  }, [mounted]);

  return (
    <div className={styles.container} suppressHydrationWarning>
      <div className={styles.storyContainer}>
        <div ref={storyTextRef} className={styles.storyText}></div>
      </div>
    </div>
  );
};

export default Narrative;
