import type { Metadata } from "next";
import { FrameBuildSite } from "../framebuild-site";

export const metadata: Metadata = {
  title: "FrameBuild Studios | Diseño Experiencial y Fabricación en Miami",
  description: "FrameBuild Studios diseña, fabrica e instala activaciones de marca, espacios experienciales e instalaciones arquitectónicas en Miami y otros mercados.",
  alternates: { canonical: "/es", languages: { "en-US": "/", "es-US": "/es" } },
};

export default function SpanishHome() {
  return <FrameBuildSite lang="es" />;
}
