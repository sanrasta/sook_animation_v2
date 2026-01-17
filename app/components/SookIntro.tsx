'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import styles from './sookIntro.module.css';
import Narrative from './Narrative';

export interface SookIntroProps {
  autoPlay?: boolean;
}

export const SookIntro: React.FC<SookIntroProps> = ({ autoPlay = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyeLeftRef = useRef<HTMLDivElement>(null);
  const eyeRightRef = useRef<HTMLDivElement>(null);
  const irisLeftRef = useRef<HTMLDivElement>(null);
  const irisRightRef = useRef<HTMLDivElement>(null);
  const pupilLeftRef = useRef<HTMLDivElement>(null);
  const pupilRightRef = useRef<HTMLDivElement>(null);
  const zeroLeftRef = useRef<HTMLSpanElement>(null);
  const zeroRightRef = useRef<HTMLSpanElement>(null);
  const smileRef = useRef<SVGSVGElement>(null);
  const eyeAnimRef = useRef<gsap.core.Timeline | null>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    setMounted(true);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const blink = useCallback(() => {
    const eyeL = eyeLeftRef.current;
    const eyeR = eyeRightRef.current;
    if (!eyeL || !eyeR) return undefined;

    const tl = gsap.timeline();
    tl.to(eyeL, { scaleY: 0.1, duration: 0.08, ease: 'power2.in' }, 0);
    tl.to(eyeR, { scaleY: 0.1, duration: 0.08, ease: 'power2.in' }, 0.02);
    tl.to(eyeL, { scaleY: 1, duration: 0.12, ease: 'power2.out' }, 0.1);
    tl.to(eyeR, { scaleY: 1, duration: 0.12, ease: 'power2.out' }, 0.12);
    return tl;
  }, []);

  const startEyeAnimation = useCallback(() => {
    const irisL = irisLeftRef.current;
    const irisR = irisRightRef.current;
    if (!irisL || !irisR) return;

    eyeAnimRef.current?.kill();

    const tl = gsap.timeline({ repeat: -1 });

    // Initial pause
    tl.to({}, { duration: 0.4 });
    
    // Look left
    tl.to([irisL, irisR], { x: -4, y: 0, duration: 0.3, ease: 'power2.out' });
    tl.to({}, { duration: 0.6 });
    
    // Look right
    tl.to([irisL, irisR], { x: 4, y: 0, duration: 0.4, ease: 'power2.out' });
    tl.to({}, { duration: 0.6 });
    const blinkTl = blink();
    if (blinkTl) tl.add(blinkTl);
    
    // Dead center - looking directly at user
    tl.to([irisL, irisR], { x: 0, y: 0, duration: 0.5, ease: 'power3.out' });
    
    // Hold the gaze - long meaningful connection
    tl.to({}, { duration: 2.5 });
    const blinkTl2 = blink();
    if (blinkTl2) tl.add(blinkTl2);
    tl.to({}, { duration: 1.5 });

    eyeAnimRef.current = tl;
  }, [blink]);

  const alignEyesToHeader = useCallback(() => {
    if (!containerRef.current || !zeroLeftRef.current || !zeroRightRef.current || !eyeLeftRef.current || !eyeRightRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const zL = zeroLeftRef.current.getBoundingClientRect();
    const zR = zeroRightRef.current.getBoundingClientRect();

    const computePlacement = (rect: DOMRect) => {
      // Smaller eyes that fit inside the zeros with space around them
      const width = rect.width * 0.55;
      const height = rect.height * 0.55;
      const left = rect.left - containerRect.left + rect.width / 2 - width / 2 + 1; // +1px right
      const top = rect.top - containerRect.top + rect.height / 2 - height / 2 + 1; // +1px lower
      return { left, top, width, height };
    };

    const L = computePlacement(zL);
    const R = computePlacement(zR);

    gsap.set(eyeLeftRef.current, { position: 'absolute', left: L.left, top: L.top, width: L.width, height: L.height, opacity: 1, y: 0 });
    gsap.set(eyeRightRef.current, { position: 'absolute', left: R.left, top: R.top, width: R.width, height: R.height, opacity: 1, y: 0 });

    // Position smile centered below the eyes
    if (smileRef.current) {
      const eyesCenterX = (zL.left + zL.width / 2 + zR.left + zR.width / 2) / 2;
      const eyesBottom = Math.max(zL.bottom, zR.bottom);
      const smileWidth = smileRef.current.getBoundingClientRect().width;
      
      const smileLeft = eyesCenterX - containerRect.left - smileWidth / 2;
      const smileTop = eyesBottom - containerRect.top; // moved 5px up
      
      gsap.set(smileRef.current, { 
        position: 'absolute', 
        left: smileLeft, 
        top: smileTop,
        transform: 'none'
      });
    }
  }, []);

  const animateSmile = useCallback(() => {
    if (!smileRef.current || prefersReducedMotion) return;

    // Draw smile from left to right
    const smilePath = smileRef.current.querySelector('path');
    if (smilePath) {
      const pathLength = (smilePath as SVGPathElement).getTotalLength();
      gsap.set(smilePath, { 
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        opacity: 1
      });
      gsap.set(smileRef.current, { opacity: 1 });
      gsap.to(smilePath, { 
        strokeDashoffset: 0, 
        duration: 1.0, 
        ease: 'power2.out' 
      });
    }

    return undefined;
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!mounted || !autoPlay || prefersReducedMotion) return;

    const timer = setTimeout(() => {
      alignEyesToHeader();
      startEyeAnimation();
      animateSmile();
    }, 300);

    return () => {
      clearTimeout(timer);
      eyeAnimRef.current?.kill();
    };
  }, [mounted, autoPlay, prefersReducedMotion, alignEyesToHeader, startEyeAnimation, animateSmile]);

  useEffect(() => {
    const onResize = () => alignEyesToHeader();
    window.addEventListener('resize', onResize);
    const id = window.setTimeout(onResize, 100);
    return () => {
      window.removeEventListener('resize', onResize);
      window.clearTimeout(id);
    };
  }, [alignEyesToHeader]);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (smileRef.current) gsap.set(smileRef.current, { opacity: 1 });
      if (eyeLeftRef.current) gsap.set(eyeLeftRef.current, { opacity: 1 });
      if (eyeRightRef.current) gsap.set(eyeRightRef.current, { opacity: 1 });
    }
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      aria-label="S00K brand"
      role="img"
      suppressHydrationWarning
    >
      <header className={styles.header}>
        <h1 className={styles.brandName}>
          s<span ref={zeroLeftRef} className={styles.brandZero}>0</span>
          <span ref={zeroRightRef} className={styles.brandZero}>0</span>k.tv
        </h1>

      </header>

      {/* Smile - positioned dynamically below eyes */}
      <svg ref={smileRef} className={styles.smile} viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M 10 8 Q 50 32 90 8" 
          stroke="#1a1a1a" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          fill="none"
          opacity="0.85"
        />
      </svg>

      {/* Eyes with hazel iris */}
      <div ref={eyeLeftRef} className={styles.eye}>
        <div ref={irisLeftRef} className={styles.iris}>
          <div ref={pupilLeftRef} className={styles.pupil} />
        </div>
      </div>
      <div ref={eyeRightRef} className={styles.eye}>
        <div ref={irisRightRef} className={styles.iris}>
          <div ref={pupilRightRef} className={styles.pupil} />
        </div>
      </div>

      <Narrative />
    </div>
  );
};

export default SookIntro;
