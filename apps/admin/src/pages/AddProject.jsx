import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { post } from "../services/api";

const AddProject = () => {
  const initialProject = {
    name: "",
    description: "",
    features: [],
    links: {
      live: "",
      repo: "",
    },
    image: "",
    category: "",
    tags: [],
  };

  const navigate = useNavigate();
  const [project, setProject] = useState(initialProject); 

  const inputHandler = (e) => {
    const { name, value } = e.target;

    // Handle nested links object
    if (name.startsWith("links.")) {
      const linkField = name.split(".")[1];
      setProject((prev) => ({
        ...prev,
        links: {
          ...prev.links,
          [linkField]: value,
        },
      }));
    }
    // Handle array fields (features and tags)
    else if (name === "features" || name === "tags") {
      setProject((prev) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trim()),
      }));
    }
    // Handle regular fields
    else {
      setProject((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const result = await post('/api/v1/project',project);
      toast.success(result.message || "Project created successfully", {
        position: "top-right",
        autoClose: 3000,
      });

      navigate("/admin");
    } catch (error) {
      toast.error(error.message || "Failed to add project", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 md:p-8 bg-gray-800 rounded-xl shadow-lg shadow-orange-500/10 text-xl">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
        >
          <TbArrowBackUpDouble className="text-2xl" />
          <span className="text-xl font-medium">Back to Dashboard</span>
        </Link>
      </div>

      {/* Form Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Add New Project
      </h2>

      {/* Form Elements */}
      <form onSubmit={submitForm} className="space-y-6">
        {/* Project Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-300"
          >
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={inputHandler}
            placeholder="e.g. Giga Render"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={inputHandler}
            placeholder="Brief description of the project"
            rows="4"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          ></textarea>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <label
            htmlFor="features"
            className="block text-lg font-medium text-gray-300"
          >
            Features (comma separated)
          </label>
          <textarea
            id="features"
            name="features"
            onChange={inputHandler}
            placeholder="Bootstrap, Responsive Design, Fast Loading"
            rows="3"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          ></textarea>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="liveLink"
              className="block text-lg font-medium text-gray-300"
            >
              Live Demo URL
            </label>
            <input
              type="url"
              id="liveLink"
              name="links.live"
              onChange={inputHandler}
              placeholder="https://example.com"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="repoLink"
              className="block text-lg font-medium text-gray-300"
            >
              Repository URL
            </label>
            <input
              type="url"
              id="repoLink"
              name="links.repo"
              onChange={inputHandler}
              placeholder="https://github.com/user/repo"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-300"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={inputHandler}
            placeholder="e.g. Bootstrap, React, etc."
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <label
            htmlFor="tags"
            className="block text-lg font-medium text-gray-300"
          >
            Technologies (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            onChange={inputHandler}
            placeholder="react, javascript, tailwind"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label
            htmlFor="image"
            className="block text-lg font-medium text-gray-300"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            onChange={inputHandler}
            placeholder="https://example.com/image.png"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
