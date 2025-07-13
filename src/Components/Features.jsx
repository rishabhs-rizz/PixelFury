import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className="bento-title special-font ">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-lg text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="max-w-md font-circular text-lg text-blue-50 opacity-50">
            Immerse yourself in the world of PixelFury, where every pixel tells
            a story. Our platform is designed to be more than just a game; it's
            a gateway to a universe of creativity and innovation. With
            cutting-edge technology and a vibrant community, we invite you to
            explore, create, and connect like never before.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 game into a rewarding adventure"
            isComingSoon
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 ">
          <div className="bento-tilt_1 row-span-1 md:col-span-1 col-span-2 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>

          <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 col-span-2 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </div>

          <div className="bento-tilt_1 me-14 md:col-span-1 col-span-2 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>re
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </div>

          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="bento-tilt_2">
            {" "}
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center "
            ></video>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
