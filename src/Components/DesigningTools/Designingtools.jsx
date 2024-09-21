import React from "react";
import "./DesigningTools.css";

const DesigningTools = () => {
  const tools = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
      alt: "Photoshop",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
      alt: "Illustrator",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg",
      alt: "Lightroom",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
      alt: "Canva",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
      alt: "Premiere Pro",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
      alt: "After Effects",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg",
      alt: "DaVinci Resolve",
    },
  ];

  return (
    <div className="pb-24">
      <h2 className="designing-tools-title">Designing Tools</h2>
      <div className="designing-tools-icons">
        {tools.map((tool, index) => (
          <div key={index} className="designing-tool">
            <img src={tool.src} alt={tool.alt} className="tool-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesigningTools;
