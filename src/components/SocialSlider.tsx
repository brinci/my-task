import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-8 px-4 py-6 ">
        <a
          href="https://github.com/brinci"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
        >
          <FaGithub size={26} />
        </a>

        <a
          href="https://www.linkedin.com/in/brinci-nvb-24a973260/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin size={26} />
        </a>

        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
        >
          <FaInstagram size={26} />
        </a>
      </div>
    </div>
  );
}