import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-auto lg:min-h-[calc(100vh-10rem)] flex flex-col justify-center py-6 lg:py-0">
      <div className="container mx-auto px-4 xl:px-8 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-4 break-words">
              Hello I'm
              <br />
              <span className="text-accent">Baraa Pratama</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/80 leading-normal">
              Software Developer focused on building scalable backend systems,
              REST APIs, databases, and reliable system architectures.
            </p>
            <div>
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
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
