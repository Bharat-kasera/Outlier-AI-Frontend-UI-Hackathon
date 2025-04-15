import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import SocialsInfo from "./SocialsInfo";
const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer>
      <SocialsInfo />

    </footer>
  );
};

export default Footer;
