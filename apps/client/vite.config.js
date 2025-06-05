import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  // IMPORTANT: For local development, VITE_API_URL should point to your local backend.
  // This is read from .env.development.
  const API_TARGET = env.VITE_API_URL || "http://localhost:8000";

  return {
    plugins: [react()],
    // ... other build configurations ...
    server: {
      port: 5174, // Client app's local dev port
      proxy: {
        // This proxies requests from http://localhost:5174/api/... to your local backend http://localhost:8000/...
        "/api": {
          target: API_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: "dist",
      base: "/", // Correct: assets will be loaded from /assets/...
      // ...
    },
  };
});
