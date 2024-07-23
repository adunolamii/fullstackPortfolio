import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

function Social() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinekedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/adenike-adunola-0051272b3/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/adunolamii",
    },

    {
      id: 3,
      child: (
        <>
          Resume <IoDocumentTextSharp size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1KznWVOqRfx4INH1OPf57ztVwvx-72C94/view?usp=sharing",
      download: true,
    },

    {
      id: 4,
      child: (
        <>
          WhatsApp <IoLogoWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/2348060332805",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className=" flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              " flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg--300" +
              style
            }
          >
           <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target="_blank"
            >
              {child}
              <></>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
