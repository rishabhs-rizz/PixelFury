import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 cneter",
        scrub: 0.1,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to("#expandingImg", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen text-black">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to zentry
        </h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          Disc<b>o</b>ver the World's <br /> l<b>a</b>rgest shared adventure
        </div>

        <div className="about-subtext">
          <p>The Game of Games Begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div id="expandingImg" className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
