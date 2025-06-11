import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const API_TARGET = env.VITE_API_URL || "http://localhost:8000";
   const ADMIN_DEV_PORT = env.VITE_ADMIN_DEV_PORT || 5174; 


  return {
    plugins: [react()],

    server: {
      port: 5173,
      historyApiFallback: true,
      proxy: {
        // Redirect /admin (no slash) to /admin/ (with slash)
        // This is still important for consistency in dev
        "/admin": {
          target: `http://localhost:5173/admin/`, // Redirect to the client's own URL + /admin/
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/admin$/, "/admin/"),
        },
        // Proxy to the actual admin application
        "/admin/": {
          target: `http://localhost:${ADMIN_DEV_PORT}`, // Dynamically set admin port
          changeOrigin: true,
        },
        "/api": {
          target: API_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },

    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 1000, // Increase warning limit (in kB)
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor modules into separate chunks
            react: ["react", "react-dom", "react-router-dom"],
            ui: ["@mui/material", "@emotion/react", "@emotion/styled"],
            utils: ["lodash", "axios", "date-fns"],
            // Add other large dependencies here
          },
        },
      },
    },

    // Optional: Enable modern browser targeting
    esbuild: {
      target: "es2020",
    },
  };
});
