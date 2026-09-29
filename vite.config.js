import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuration standard : le plugin React active JSX et le rechargement à chaud.
export default defineConfig({
  plugins: [react()],
});
