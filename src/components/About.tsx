import { useEffect, useRef, useState } from "react";
import sherif3 from "../assets/sherif3.png";
import { GoDotFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsGlobe2 } from "react-icons/bs";
import { PiBagSimple } from "react-icons/pi";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section
      className="py-24 relative overflow-hidden bg-[#131022]">
      <div className="absolute inset-0 opacity-5 bg-[film-grain]" />

      <div className="relative z-10 flex flex-col items-center justify-between max-w-5xl mx-auto px-6 w-full md:flex-row">
        <div
          className={`transition-all duration-1000 md:w-1/2 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}>
          <p className="flex items-center gap-[5px] text-sm text-[#3613e5] border border-[#3613e5] rounded-full px-3 py-1 mb-6 w-fit">
            <GoDotFill className="" /> AVAILABLE FOR HIRE
          </p>

          <h1 className="text-white text-[35px] md:text-[40px] lg:text-[50px] font-semibold leading-[50px]">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-[#3613e5] to-[#b87dfb] bg-clip-text text-transparent">
              Experiences
            </span>{" "}
            That Matter.
          </h1>
          <p className="text-[#61687c] my-[20px] font-medium">
            I am a passionate Frontend Developer with a knack for creating
            immersive digital interfaces. My journey began with a curiosity for
            how things work on the web, and evolved into a career of solving
            complex problems with clean, efficient code.
          </p>

          <div className="mt-6 flex gap-[20px] flex-wrap items-center">
            <p className="flex items-center gap-[6px] font-medium">
              <CiLocationOn className="text-[#3613e5]" size={20} /> Lagos, NG
            </p>
            <p className="flex items-center gap-[6px] font-medium">
              <BsGlobe2 className="text-[#3613e5]" size={20} /> English
            </p>
            <p className="flex items-center gap-[6px] font-medium">
              <PiBagSimple className="text-[#3613e5]" size={20} />{" "}
              Freelance/Full-Time
            </p>
          </div>
        </div>

        <div
          className={`md:w-1/2 transition-all duration-1000 delay-500  flex justify-end mt-[40px] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="w-auto lg:w-[400px] h-[400px] shadow-2xl rounded-lg overflow-hidden relative">
            <div className="absolute h-[70px] w-full bottom-2 bg-gradient-to-r from-[#171c2e]/95 to-[#2f2d3b]/80 px-[20px] py-2">
              <p className="text-white font-semibold text-base">Jamiu Sherif</p>
              <p className="text-[#2e16b5] text-[18px] font-bold">Frontend Developer</p>
            </div>
            <img
              src={sherif3}
              alt=""
              className="w-full rounded-lg object-cover h-full shadow-custom-inset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
