import React from 'react';
import { FaGithub, FaNpm, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white pt-12 pb-4 ">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap space-x-10">
          {/* Social Media Icons */}
          <a href="https://github.com/sameedsk20" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl md:text-3xl lg:text-4xl icon-hover" />
          </a>
          <a href="https://www.npmjs.com/~sameedsk20" target="_blank" rel="noopener noreferrer">
            <FaNpm className="text-2xl md:text-3xl lg:text-4xl icon-hover" />
          </a>
          <a href="https://www.linkedin.com/in/sameed-saeed-khan-2156461b4/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl icon-hover" />
          </a>
          <a href="https://twitter.com/sameedsk20" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl md:text-3xl lg:text-4xl icon-hover" />
          </a>
          <a href="https://www.instagram.com/sameedsk20/?next=%2F" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl md:text-3xl lg:text-4xl icon-hover" />
          </a>
          <a href="https://wa.me/+923352220315" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl md:text-3xl lg:text-4xl icon-hover" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006721754727" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl md:text-3xl lg:text-4xl icon-hover" />
          </a>
          <a href="mailto:sameedsaaedkhan20@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-2xl md:text-3xl lg:text-4xl icon-hover" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
