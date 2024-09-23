import logo from "../assets/vipinrajlogo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

const Navbar = () => {
  const fileUrl = "/Vipin raj CV.pdf";

  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="" />
        
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/vipinRaj-dev">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vipin-r-raj/">
          <FaLinkedin />
        </a>

        <SiReaddotcv
          title="Download CV" // Tooltip added here
          onClick={() => {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "Vipin raj CV.pdf"; // The name of the file after download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up
          }}
          className="cursor-pointer text-blue-600"
        />

       
      </div>
    </nav>
  );
};

export default Navbar;
