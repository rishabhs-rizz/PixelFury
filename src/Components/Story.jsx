import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

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

            <RoundedCorners />
          </div>
        </div>

        <div className="flex w-full justify-center md:justify-end -mt-10 md:-mt-24 lg:-mt-32 px-4 md:px-10">
          <div className="flex w-full max-w-lg flex-col items-center md:items-start text-center md:text-left space-y-4">
            <p className="font-circular text-violet-50 leading-relaxed">
              Where realms converge, lies Zentry and the Boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-button"
              title={"Discover Prologue"}
              containerClass={"w-fit"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
