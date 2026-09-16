import type { Metadata } from "next";
import { FrameBuildSite } from "./framebuild-site";

export const metadata: Metadata = {
  title: "FrameBuild Studios | Experiential Design & Custom Fabrication Miami",
  description: "FrameBuild Studios designs, fabricates and installs custom brand activations, experiential environments and architectural installations in Miami and beyond.",
  alternates: { canonical: "/", languages: { "en-US": "/", "es-US": "/es" } },
};

export default function Home() {
  return <FrameBuildSite lang="en" />;
}
