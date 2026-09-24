"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, suffix: "", text: "Years of experience" },
  { num: 10, suffix: "+", text: "Projects completed" },
  { num: 20, suffix: "+", text: "Technologies mastered" },
  { num: 100, suffix: "+", text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-16 pb-8">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center xl:justify-start">
          {stats.map((item, index: number) => {
            return (
              <div
                className="w-[45%] xl:w-auto xl:flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
