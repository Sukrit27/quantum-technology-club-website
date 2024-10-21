import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col items-center gap-6">
        {/* Social Icons */}
        <ul className="flex gap-5 flex-wrap justify-center">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img 
                src={item.iconUrl} 
                width={20} 
                height={20} 
                alt={item.title} 
              />
            </a>
          ))}
        </ul>

        {/* Copyright Text */}
        <p className="caption text-n-4 text-center">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
