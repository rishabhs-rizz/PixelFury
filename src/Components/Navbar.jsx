import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const [isaudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioIndicatorVisible, setIsAudioIndicatorVisible] = useState(false);
  const navcontainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const ToggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsAudioIndicatorVisible((prev) => !prev);
  };

  useEffect(() => {
    isaudioPlaying
      ? audioElementRef.current.play().catch((error) => console.error(error))
      : audioElementRef.current.pause();
  }, [isaudioPlaying]);
  return (
    <div
      ref={navcontainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />{" "}
            <Button
              id="product-button"
              title="products"
              rigthIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            {" "}
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={ToggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                src="/audio/loop.mp3"
                className="hidden"
                loop
              />{" "}
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isAudioIndicatorVisible ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
