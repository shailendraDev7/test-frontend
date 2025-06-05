import { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaAngleDown,
  FaAngleUp,
  FaWindowClose,
} from "react-icons/fa";

const Accordion = ({ project, expandState, viewMode }) => {
  // Destructure with defaults for all array props
  const {
    id,
    name,
    description,
    features = [],
    links = {},
    category = "",
    tags = [],
  } = project;
  const [isExpanded, setIsExpanded] = useState(expandState === "expanded");

  // Sync with parent expand/collapse all
  useEffect(() => {
    setIsExpanded(expandState === "expanded");
  }, [expandState]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${viewMode === "grid" ? "mb-6" : "mb-8"}`}>
      {/* Project Header - Collapsible */}
      <div
        className={`${
          viewMode === "grid" ? "rounded-t-lg" : "rounded-t-2xl"
        } bg-gradient-to-r from-orange-500 to-gray-800 px-12 py-5 flex items-center justify-between cursor-pointer transition-all duration-300 hover:shadow-lg`}
        onClick={toggleAccordion}
      >
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide flex-grow truncate">
          {name}
        </h2>
        {isExpanded ? (
          <FaAngleUp className="text-orange-200 text-xl md:text-2xl" />
        ) : (
          <FaAngleDown className="text-orange-200 text-xl md:text-2xl" />
        )}
      </div>

      {/* Expandable Content */}
      <div
        className={`bg-gray-800 ${
          viewMode === "grid" ? "rounded-b-2xl" : ""
        } overflow-hidden transition-clip-path duration-700 transition-max-h mx-auto md:mx-6 ${
          isExpanded ? "max-h clip" : "max-h-0"
        }`}
        style={{
          clipPath: isExpanded ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          // maxHeight: isExpanded ? "none" : "0", // Or a large enough value like '2000px'
        }}
      >
        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Project Description */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-orange-400 border-b border-orange-400 pb-1">
              Description
            </h3>
            <p className="text-gray-200 leading-relaxed">{description}</p>
          </div>

          {/* Project Key Features */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-orange-400 border-b border-orange-400 pb-1">
              Key Features
            </h3>
            <ul className={`grid grid-cols-1 gap-2 ${viewMode==="grid"?"md:grid-cols-2":"md:grid-cols-5"}`}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-orange-400 mt-1 mr-2 flex-shrink-0 m-0" />
                  <span className="text-gray-200 m-0 text-xl">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-orange-400 border-b border-orange-400 pb-1">
              Links
            </h3>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-start text-left m-0">
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors m-0"
              >
                <FaExternalLinkAlt className="mr-2 text-orange-400" />
                <span className="text-gray-200">Live Demo</span>
              </a>
              <a
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors m-0"
              >
                <FaGithub className="mr-2 text-orange-400" />
                <span className="text-gray-200">View Code</span>
              </a>
            </div>
          </div>

          {/* Project Category */}
          <div className="md:py-2 m-0 md:text-xl">
            <span className="font-bold text-orange-400 pb-1 m-0">
              Category:{" "}
            </span>
            <span className="text-gray-200">{category}</span>
          </div>

          {/* Project Technologies */}
          <div className="flex flex-col gap-3 md:gap-4 text-xl">
            <div className="py-1.5 md:py-2 rounded-lg m-0">
              <span className="text-orange-400 font-bold m-0">
                Technologies:{" "}
              </span>
              <div className="inline-flex flex-wrap gap-1 md:gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-gray-200 bg-gray-600 px-2 py-0.5 md:px-2 md:py-1 rounded text-xs md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Close Button */}
        <div className="flex">
          <FaWindowClose
            className="text-lg md:text-xl text-orange-400 hover:text-white transition-colors cursor-pointer m-0"
            onClick={toggleAccordion}
            aria-label="Collapse section"
          />
          <FaWindowClose
            className="text-lg md:text-xl text-orange-400 hover:text-white transition-colors cursor-pointer mr-0"
            onClick={toggleAccordion}
            aria-label="Collapse section"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
