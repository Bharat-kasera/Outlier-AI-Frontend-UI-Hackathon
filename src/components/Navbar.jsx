import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Magnetic from './Magnetic'

import Button from "./Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="hidden md:flex items-center font-general uppercase text-white cursor-pointer group">
            <a
              href="https://github.com/Bharat-kasera/Outlier-AI-Frontend-UI-Hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <p
                className="
                m-0
                transition-all duration-500
                ease-[cubic-bezier(0.76,0,0.24,1)]
                group-hover:rotate-[360deg]"
              >
                ©
              </p>

              <div
                className="
                relative flex overflow-hidden whitespace-nowrap ml-[5px]
                transition-all duration-500
                ease-[cubic-bezier(0.76,0,0.24,1)]
                group-hover:pr-[30px]"
              >
                <p
                  className="
                  relative
                  transition-transform duration-500
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  group-hover:-translate-x-full"
                >
                  Code by
                </p>
                <p
                  className="
                  relative pl-[0.3em]
                  transition-transform duration-500
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  group-hover:-translate-x-[65px]"
                >
                  Bharat
                </p>
                <p
                  className="
                  absolute left-[130px] pl-[0.3em]
                  transition-transform duration-500
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  group-hover:-translate-x-[65px]"
                >
                  Kasera
                </p>
              </div>
            </a>
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
