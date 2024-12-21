import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { SplitText } from 'gsap-trial/SplitText';
import React, { useEffect, useState } from 'react';

const TextFun = ({ TriggerAnimation }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Check if image is loaded
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    if (TriggerAnimation && isImageLoaded) {
      // Register GSAP plugins
      gsap.registerPlugin(SplitText, ScrollTrigger);

      // Split text into characters
      const splitText = new SplitText('.split', { type: 'chars' });
      const paratext = splitText.chars;

      // Animate text
      gsap.from(paratext, {
        yPercent: 200,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.2,
        ease: 'back.out',
      });

      // Image animation (up and down)
      gsap.from('.imgani', {
        yPercent: -10,
        yoyoEase: true,
        repeat: -1,
        duration: 1,
        ease: 'power1.inOut',
      });

      // Cleanup when component is unmounted
      return () => {
        splitText.revert();
      };
    }
  }, [TriggerAnimation, isImageLoaded]); // Trigger on animation or image load change

  return (
    <>
      <div className="mt-96">
        <div className="flex justify-evenly items-center mt-52 mb-[100%]">
          <p className="split font-bold text-3xl overflow-hidden pt-4">Some Text</p>
          <div className="imgani">
            {/* Wait for image to load before running animation */}
            <img
              src="./partner-1.jpg"
              alt=""
              width={150}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextFun;
