import Link from "next/link";
import {
  FaGithub,
  FaTiktok,
  FaInstagram,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/baraaprtm",
  },
  {
    icon: <FaTiktok />,
    path: "https://www.tiktok.com/@baraasoftboy",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/baraaprtm_",
  },
  {
    icon: <FaTelegram />,
    path: "https://t.me/baraaprtm",
  },
  {
    icon: <FaDiscord />,
    path: "https://discord.com/users/baraaprtm",
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div
      className={`flex items-center justify-center xl:justify-start gap-5 ${
        containerStyles ?? ""
      }`}
    >
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white/70 hover:text-accent text-[22px] transition-all duration-300 hover:-translate-y-1 ${
              iconStyles ?? ""
            }`}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
