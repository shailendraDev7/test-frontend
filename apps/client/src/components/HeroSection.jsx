import Categories from "./header/nav//categories/Categories";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 my-48">
      {/* Search Container */}
      <div className="flex-col w-full max-w-7xl group space-y-6">
        <div className="w-full relative">
          {/* Search Input */}
          <input
            className="relative w-full py-5 pl-8 pr-16 text-xl bg-gray-800 text-gray-200 placeholder-gray-400 border-b-2 bg-gradient-to-t from-zinc-900 to-none
          border-orange-500/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300 
          outline-none"
            placeholder="Search my projects..."
            onBlur={(e) => (e.target.value = "")}
          />

          {/* Search Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              className="w-8 h-8 stroke-orange-400 group-hover:stroke-orange-300 transition-colors duration-300 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <Categories />
      </div>

      {/* Optional Hero Text */}
      <div className="mt-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Discover My Projects
        </h1>
        <p className="text-xl text-gray-300 max-w-xl text-center">
          Browse through my collection of web development projects and case
          studies.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
