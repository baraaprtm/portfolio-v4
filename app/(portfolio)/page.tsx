import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import FadeInUp from "@/components/motion/FadeInUp";
import Typewriter from "@/components/motion/Typewriter";
import { ScrambleText } from "@/components/motion/ScrambleText";

const Home = () => {
  return (
    <section className="h-auto lg:min-h-[calc(100vh-10rem)] flex flex-col justify-center py-6 lg:py-0">
      <div className="container mx-auto px-4 xl:px-8 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          <div className="text-center lg:text-left order-2 lg:order-none">
            {/* 1. Software Developer (Tetap Static) */}
            <span className="text-xl">Software Developer</span>

            {/* 2. Hello I'm & Baraa Pratama (Tetap Scramble Text on Hover) */}
            <h1 className="h1 mb-4 break-words">
              <ScrambleText text="Hello I'm" />
              <br />
              <span className="text-accent">
                <ScrambleText text="Baraa Pratama" />
              </span>
            </h1>

            {/* 3. Description (Slow Natural Typing dengan teks final) */}
            <p className="max-w-[500px] mb-8 text-white/80 leading-normal">
              <Typewriter text="I build web applications, APIs, and systems that are simple, reliable, and built to scale." />
            </p>

            <FadeInUp>
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </FadeInUp>
          </div>

          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
