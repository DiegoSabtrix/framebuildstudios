import type { Metadata } from "next";
import { FrameBuildSite } from "./framebuild-site";

export const metadata: Metadata = {
  title: "Experiential Design & Custom Fabrication in Miami",
  description: "FrameBuild Studios designs, engineers, fabricates and installs custom brand activations, experiential environments and architectural installations in Miami and nationwide.",
  alternates: { canonical: "/", languages: { "en-US": "/", "es-US": "/es" } },
  openGraph: {
    locale: "en_US",
    title: "Experiential Design & Custom Fabrication in Miami | FrameBuild Studios",
    description: "From concept to installation: custom brand activations, architectural installations and experiential environments built in Miami.",
    url: "/",
  },
};

export default function Home() {
  return <FrameBuildSite lang="en" />;
}
