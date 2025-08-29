import React from "react";
import facebool from "./images/facebook (2).png";
import instagram from "./images/instagram (2).png";
import linkdun from "./images/linkdin.png";
import github from "./images/image.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0e1010] via-[#141616] to-[#0e1010] border-t border-gray-800 shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Left - Copyright */}
        <div className="text-gray-400 text-xs sm:text-sm font-light tracking-wide text-center sm:text-left">
          © {new Date().getFullYear()} Abdul Wassay — All Rights Reserved
        </div>

        {/* Right - Social Icons */}
        <div className="flex mt-3 sm:mt-0 space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100089985213341"
            target="_blank"
            className="transition-transform transform hover:scale-110 hover:brightness-125"
          >
            <img className="h-6" src={facebool.src} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"
            target="_blank"
            className="transition-transform transform hover:scale-110 hover:brightness-125"
          >
            <img className="h-6" src={linkdun.src} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/wassay122/"
            target="_blank"
            className="transition-transform transform hover:scale-110 hover:brightness-125"
          >
            <img className="h-6" src={instagram.src} alt="Instagram" />
          </a>
          <a
            href="https://github.com/Abdulwassay122?tab=repositories"
            target="_blank"
            className="transition-transform transform hover:scale-110 hover:brightness-125"
          >
            <img className="h-6" src={github.src} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
}
