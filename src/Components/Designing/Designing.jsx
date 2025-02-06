import React from "react";
import "./Designing.css";

const tools = [
  { src: "/photoshop.svg", alt: "Photoshop" },
  { src: "/illustrator.svg", alt: "Illustrator" },
  { src: "/lightroom.svg", alt: "Lightroom" },
  { src: "/canva.svg", alt: "Canva" },
  { src: "/premiere-pro.svg", alt: "Premiere Pro" },
  { src: "/after-effects.svg", alt: "After Effects" },
  { src: "/davinci-resolve.svg", alt: "DaVinci Resolve" },
  { src: "/blender.svg", alt: "Blender" },
];

const Designing = () => {
  return (
    <div className="pb-24">
      <h2 className="designing-tools-title">Designing Tools</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="p-4">
            <img src={tool.src} alt={tool.alt} className="w-12 h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designing;
