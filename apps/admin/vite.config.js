import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const API_TARGET = env.VITE_API_URL || "http://localhost:8000";
  const ADMIN_PORT = env.VITE_ADMIN_PORT || 5174;

  return {
    plugins: [react()],
    base: "/admin/",
    server: {
      port: parseInt(ADMIN_PORT, 10), // Ensure port is a number
      historyApiFallback: true,
    },
    build: {
      outDir: "dist",
      base: "/admin/",
    },
  };
});
