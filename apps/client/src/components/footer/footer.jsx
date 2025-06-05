import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="container bg-gray-900 text-gray-300 pt-16 pb-10 px-4 md:px-8">
        <div className="max-w-full mx-auto pt-6 border-t border-gray-700 text-center"></div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-orange-500 text-3xl font-bold">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-orange-400 font-bold">Location</p>
                <p>Gongabu, Kathmandu</p>
              </div>
              <div>
                <p className="text-orange-400 font-bold">Phone</p>
                <a href="tel:+9779862004936">+977 9862004936</a>
              </div>
              <div>
                <p className="text-orange-400 font-bold">Email</p>
                <a
                  href="mailto:support@solutiongate.com.np"
                  className="text-orange-400 hover:text-orange-300 transition-colors lowercase ml-0"
                >
                  support@solutiongate.com.np
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-orange-500 text-3xl font-bold">Company</h3>
            <ul className="space-y-3 m-0">
              {[
                "Careers",
                "Newsletters",
                "Subscriptions",
                "Our Team",
                "Reports",
                "Blogs",
              ].map((item) => (
                <li key={item}
                className="hover:text-orange-400 transition-colors group"
                >
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors pl-1 relative hover:ml-1"
                  >
                  <span className="absolute left-[-1rem] top-1/2 w-3 h-3 border-t border-r border-r-gray-100 border-t-orange-300 rotate-45 transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-orange-500 text-3xl font-bold">Services</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Portfolio",
                "Networks",
                "Publications",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-400 transition-colors group"
                >
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors pl-1 relative hover:ml-1"
                  >
                    <span className="absolute left-[-1rem] top-1/2 w-3 h-3 border-t border-r border-r-gray-100 border-t-orange-300 rotate-45 transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-orange-500 text-3xl font-bold">
              Connect With Us
            </h3>
            <ul className="space-y-3">
              {[
                {
                  icon: <FaFacebook />,
                  name: "Facebook",
                  url: "https://facebook.com/shailendra.shrestha1",
                },
                {
                  icon: <FaInstagram />,
                  name: "Instagram",
                  url: "https://www.instagram.com/shailendra.stha",
                },
                {
                  icon: <FaLinkedin />,
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/shailendra-shrestha-9154b91a6",
                },
                {
                  icon: <FaTwitter />,
                  name: "Twitter",
                  url: "https://x.com/Shailen25213921",
                },
                {
                  icon: <FaGoogle />,
                  name: "Google",
                  url: "https://x.com/Shailen25213921",
                },
                {
                  icon: <FaYoutube />,
                  name: "YouTube",
                  url: "https://x.com/Shailen25213921",
                },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-orange-300 transition-colors hover:scale-110 hover:transform hover:duration-300 hover:transition-all"
                  >
                    <span className="mr-2 text-lg m-0">{social.icon}</span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Copyright Section */}
          <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-gray-700 text-center">
            <p>
              &copy; {new Date().getFullYear()} SolutionGate. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
