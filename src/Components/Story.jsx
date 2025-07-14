import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const frame = frameRef.current;
    if (!frame) return;
    gsap.to(frame, {
      duration: 0.1,
      rotateX,
      rotateY,
      transformPerspective: 500,
      transformStyle: "preserve-3d",
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(frame, {
      duration: 0.1,
      rotateX,
      rotateY,
      transformPerspective: 500,
      transformStyle: "preserve-3d",
      ease: "power1.inOut",
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title={"the st<b>o</b>ry of <br/> a hidden real<b>m</b>"}
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
