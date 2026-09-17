import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://framebuild-studios.diego681936.chatgpt.site"),
  title: {
    default: "FrameBuild Studios | Experiential Design & Custom Fabrication",
    template: "%s | FrameBuild Studios",
  },
  description: "Miami experiential design and custom fabrication studio creating brand activations, architectural installations, pop-ups and event environments.",
  applicationName: "FrameBuild Studios",
  authors: [{ name: "FrameBuild Studios" }],
  creator: "FrameBuild Studios",
  publisher: "FrameBuild Studios",
  category: "Experiential Design and Custom Fabrication",
  keywords: [
    "experiential design Miami",
    "custom fabrication Miami",
    "brand activations",
    "architectural installations",
    "event fabrication",
    "pop-up fabrication",
    "agency fabrication partner",
    "South Florida custom fabrication",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "FrameBuild Studios",
    locale: "en_US",
    alternateLocale: ["es_US"],
    title: "FrameBuild Studios | Experiential Design & Custom Fabrication",
    description: "We transform ideas into custom-built brand experiences, architectural installations and event environments in Miami and beyond.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "FrameBuild Studios | Experiential Design & Custom Fabrication",
    description: "Custom brand experiences, architectural installations and event environments—designed and built in Miami.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  formatDetection: { email: false, address: false, telephone: false },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://framebuild-studios.diego681936.chatgpt.site/#organization",
  name: "FrameBuild Studios",
  url: "https://framebuild-studios.diego681936.chatgpt.site",
  logo: "https://framebuild-studios.diego681936.chatgpt.site/images/framebuild-logo.png",
  description: "Experiential design and custom fabrication studio serving brands, agencies and spaces.",
  areaServed: [
    { "@type": "City", name: "Miami" },
    { "@type": "AdministrativeArea", name: "South Florida" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: [
    "Experiential design",
    "Custom fabrication",
    "Brand activations",
    "Architectural installations",
    "Event environments",
    "Pop-ups and pavilions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
