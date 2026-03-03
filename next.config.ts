import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  /* OpenNext Cloudflare requires standard server build - no output: "export" */
};

export default nextConfig;

initOpenNextCloudflareForDev();
