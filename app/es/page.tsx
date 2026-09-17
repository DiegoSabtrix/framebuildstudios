import type { Metadata } from "next";
import { FrameBuildSite } from "../framebuild-site";

export const metadata: Metadata = {
  title: "Diseño Experiencial y Fabricación Personalizada en Miami",
  description: "FrameBuild Studios diseña, desarrolla, fabrica e instala activaciones de marca, espacios experienciales e instalaciones arquitectónicas en Miami y todo Estados Unidos.",
  alternates: { canonical: "/es", languages: { "en-US": "/", "es-US": "/es" } },
  openGraph: {
    locale: "es_US",
    title: "Diseño Experiencial y Fabricación en Miami | FrameBuild Studios",
    description: "Del concepto a la instalación: activaciones de marca, instalaciones arquitectónicas y espacios experienciales hechos en Miami.",
    url: "/es",
  },
};

export default function SpanishHome() {
  return <FrameBuildSite lang="es" />;
}
