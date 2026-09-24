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
      className={`flex justify-center xl:justify-start ${
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
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;