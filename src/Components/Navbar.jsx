import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const [isaudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioIndicatorVisible, setIsAudioIndicatorVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navcontainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavbarVisible(true);
      navcontainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
      navcontainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavbarVisible(true);
      navcontainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navcontainerRef.current, {
      y: isNavbarVisible ? 0 : -100,
      opacity: isNavbarVisible ? 1 : 0,
      duration: 0.2,
      ease: "power2.out",
    });
  }, [isNavbarVisible]);

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
          <div className="flex items-center gap-7 text-white">
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
            <div>
              {navItems.map((item, index) => {
                console.log("Rendering nav item:", item); // ✅ Check if this logs
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                );
              })}
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
