"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center -mt-1">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetTitle className="hidden"></SheetTitle>

      {/* Rekomendasi: w-[80vw] max-w-[350px] */}
      <SheetContent
        side="right"
        className="flex flex-col w-[80vw] max-w-[350px]"
      >
        {/* Logo */}
        <div className="mt-24 mb-20 sm:mt-32 sm:mb-40 text-center text-2xl">
          <Link href="/">
            {/* Kembalikan font ke text-4xl karena sekarang ada ruang yang lega */}
            <h1 className="text-4xl font-semibold leading-none">
              Baraa<span className="text-accent pl-1">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setOpen(false)}
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
