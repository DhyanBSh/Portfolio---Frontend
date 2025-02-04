import React from "react";
import "./Technologies.css";

import { FaHtml5 } from "react-icons/fa"; // HTML5 icon
import { FaCss3Alt } from "react-icons/fa"; // CSS3 icon
import { DiJavascript1 } from "react-icons/di"; // JavaScript icon
import { RiReactjsLine } from "react-icons/ri"; // React icon
import { TbBrandNextjs } from "react-icons/tb"; // Next.js icon
import { SiFigma } from "react-icons/si"; // Figma icon
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="technologies-title">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
          <FaHtml5 className="text-7xl text-orange-600" />
        </div>
        <div className="p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        <div className="p-4">
          <DiJavascript1 className="text-7xl text-yellow-500" />
        </div>
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="p-4">
          <SiFigma className="text-7xl text-purple-500" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
