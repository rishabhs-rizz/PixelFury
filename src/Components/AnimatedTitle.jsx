import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleanimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleanimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)",
        stagger: 0.02,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={containerRef} className={`animated-title ${containerClass} `}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="animated-word special-font"
              dangerouslySetInnerHTML={{ __html: word }}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
