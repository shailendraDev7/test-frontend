import { useEffect, useState } from "react";
import { FaGithub, FaPenToSquare, FaTrashCan, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FiDatabase } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { get, del } from "../services/api";
import { TbArrowBackUpDouble } from "react-icons/tb";

const Dashboard = () => {
  console.log("Admin Dashboard component is rendering!"); // Add this
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   (async () => {
  //     setLoading(true);
  //     try {
  //       const response = await get("/api/v1/project", { status: "active" });
  //       const projectsArray = Array.isArray(response)
  //         ? response
  //         : response?.data || response?.projects || [];
  //       setProjects(projectsArray);
  //     } catch (error) {
  //       console.error("Failed to fetch projects:", error);
  //       setProjects([]); // Ensure projects is always an array
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  // const fetchProjects = async () => {
  //   setLoading(true);
  //   try {
  //     const data = await get("/api/v1/project"); // Assuming you have a 'get' function
  //     setProjects(data);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message || "Failed to fetch projects");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProjects(); // Fetch projects on component mount
  // }, []);

  // const handleDelete = async (projectId) => {
  //   if (!window.confirm("Are you sure you want to delete this project?")) {
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     const deleteData = await del(`/api/v1/project/${projectId}`);
  //     toast.success(deleteData.message, {
  //       position: "top-right",
  //       autoClose: 3000,
  //     });
  //     fetchProjects(); // Re-fetch the project list after successful deletion
  //   } catch (err) {
  //     setError(err.message || "Failed to delete project");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <h1>Dashboard admin</h1>
    // <div className="projectTable w-11/12 md:w-4/5 mx-auto p-8 md:p-12 lg:p-24 mt-12 md:mt-24 rounded-lg shadow-white-lg">
    //   {/* Header & Add Projects Button (Centered) */}
    //   <div className="flex justify-between items-center mb-8">
    //     <h1 className="text-2xl md:text-3xl font-bold text-gray-500">
    //       Projects Management
    //     </h1>
    //     <button className="py-2 px-6 rounded-lg bg-orange-600 text-white hover:bg-orange-500 transition-colors duration-200 flex items-center gap-2">
    //       <Link to="/add" className="flex items-center">
    //         Add Projects <FaUser className="ml-2" />
    //       </Link>
    //     </button>
    //   </div>

    //   {projects.length === 0 ? (
    //     /* Empty State */
    //     <div className="flex flex-col items-center justify-center py-16 text-gray-500">
    //       <FiDatabase className="text-5xl mb-4 opacity-60" />
    //       <p className="text-xl mb-1">No data to display</p>
    //       <p className="text-lg">Please add a new project</p>
    //     </div>
    //   ) : (
    //     /* Projects Table */
    //     <div className="overflow-x-auto">
    //       <table className="min-w-full border-collapse">
    //         <thead className="bg-orange-600">
    //           <tr>
    //             {[
    //               "S.No.",
    //               "Project Name",
    //               "Category",
    //               "Features",
    //               "Links",
    //               "Actions",
    //             ].map((header) => (
    //               <th
    //                 key={header}
    //                 className="p-4 text-left text-gray-100 font-semibold border-b border-gray-200 text-xl"
    //               >
    //                 {header}
    //               </th>
    //             ))}
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {projects.map((project, index) => (
    //             <tr
    //               key={index}
    //               className="hover:bg-gray-50 hover:bg-opacity-5 transition-colors duration-200 text-xl"
    //             >
    //               <td className="p-4 border-b border-gray-200">{index + 1}</td>
    //               <td className="p-4 border-b border-gray-200 font-medium">
    //                 {project.name}
    //               </td>
    //               <td className="p-4 border-b border-gray-200">
    //                 <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-lg">
    //                   {project.category}
    //                 </span>
    //               </td>
    //               <td className="p-4 border-b border-gray-200">
    //                 <ul className="list-disc list-inside">
    //                   {project.features.map((feature, i) => (
    //                     <li key={i} className="text-gray-400 text-lg">
    //                       {feature}
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </td>
    //               <td className="p-4 border-b border-gray-200">
    //                 <div className="flex flex-col">
    //                   <a
    //                     href={project.links.live}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="text-blue-600 hover:underline flex items-center"
    //                   >
    //                     <FaExternalLinkAlt className="mr-2" />
    //                     Live Demo
    //                   </a>
    //                   <a
    //                     href={project.links.repo}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="text-gray-600 hover:underline flex items-center"
    //                   >
    //                     <FaGithub className="mr-2" />
    //                     Repository
    //                   </a>
    //                 </div>
    //               </td>
    //               <td className="p-4 border-b border-gray-200">
    //                 <div className="flex space-x-2">
    //                   <Link
    //                     to={`/update/${project.id}`}
    //                     className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
    //                   >
    //                     <FaPenToSquare />
    //                   </Link>
    //                   <button
    //                     onClick={() => handleDelete(project.id)}
    //                     className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
    //                   >
    //                     <FaTrashCan />
    //                   </button>
    //                 </div>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   )}
    // </div>
  );
};

export default Dashboard;
