import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { BsArrowsCollapse, BsArrowsExpand } from "react-icons/bs";
import { get } from "../../services/api";


const FeatureBox = () => {
  const [projects, setProjects] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [expandState, setExpandState] = useState("collapsed");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await get("/api/v1/project", { status: "active" });
        const projectsArray = Array.isArray(response)
          ? response
          : response?.data || response?.projects || [];
        setProjects(projectsArray);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setProjects([]); // Ensure projects is always an array
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const toggleExpandAll = () =>
    setExpandState((prev) => (prev === "collapsed" ? "expanded" : "collapsed"));

  const ViewButton = ({ mode, icon, label }) => (
    <button
      onClick={() => setViewMode(mode)}
      className={`p-2 rounded-md transition-colors ${
        viewMode === mode
          ? "bg-orange-600 text-white"
          : "text-gray-400 hover:bg-gray-700"
      }`}
      aria-label={`${label} view`}
    >
      {icon}
    </button>
  );

  const ControlPanel = () => (
    <>
      <div className="flex justify-center items-center gap-12 mx-auto border-b border-gray-500 hover:shadow-white-sm bg-gradient-to-t from-orange-500 to-none rounded-b-full w-max px-12 pt-5 pb-2 mb-24">
        <div className="flex items-center gap-4 mx-0">
          <span className="text-2xl font-medium text-orange-200">
            View Mode:
          </span>
          <div className="flex gap-1 p-1 bg-gray-800 rounded-lg">
            <ViewButton
              mode="grid"
              icon={<IoGrid className="text-xl" />}
              label="Grid"
            />
            <ViewButton
              mode="list"
              icon={<FaThList className="text-xl" />}
              label="List"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 mx-0">
          <span className="text-2xl font-medium text-orange-200">
            Expand / Collapse:
          </span>
          <button
            onClick={toggleExpandAll}
            className={`p-2 rounded-md transition-colors ${
              expandState === "expanded"
                ? "bg-orange-600 text-white"
                : "text-gray-200 bg-gray-800"
            }`}
            aria-label={
              expandState === "expanded" ? "Collapse all" : "Expand all"
            }
          >
            {expandState === "expanded" ? (
              <BsArrowsCollapse className="text-xl" />
            ) : (
              <BsArrowsExpand className="text-xl" />
            )}
          </button>
        </div>
      </div>
      {/* <div className="max-w-lg pt-6"></div> */}
    </>
  );

  if (loading)
    return (
      <div className="col-span-2 flex justify-center py-12">
        Loading projects...
      </div>
    );
  if (!projects.length)
    return (
      <div className="col-span-2 text-center py-12 text-orange-400">
        No projects found
      </div>
    );

  return (
    <div className="container px-4 md:px-24 py-8 bg-gray-900 text-gray-300">
      <ControlPanel />
      <div
        className={
          viewMode === "grid" ? "grid md:grid-cols-2 gap-8" : "space-y-8"
        }
      >
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => (
            <Accordion
              key={project.id || project.name}
              project={project}
              expandState={expandState}
              viewMode={viewMode}
            />
          ))
        ) : (
          <div className="col-span-2 text-center py-12 text-orange-400">
            {loading ? "Loading projects..." : "No projects found"}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureBox;
