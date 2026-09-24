import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 sm:py-8 xl:py-8 text-white">
      <div className="container mx-auto px-4 sm:px-6 xl:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-none">
            Baraa <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
