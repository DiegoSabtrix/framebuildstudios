"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "es";

const copy = {
  en: {
    nav: [["Work", "#work"], ["Capabilities", "#capabilities"], ["Studio", "#studio"], ["Contact", "#contact"]],
    start: "Start a Project",
    hero: ["We build ideas", "into experiences."],
    intro: "Experiential design and custom fabrication for brands, agencies and spaces.",
    view: "View Our Work",
    statementTitle: "Ideas are easy. Building them is the hard part.",
    statement: "We turn ambitious concepts into physical experiences through design, engineering, fabrication and installation.",
    selected: "Selected Work",
    selectedText: "Real environments, fabricated details and installations shaped for the way people move, gather and remember.",
    explore: "Explore the Project",
    work: [["Architectural Pavilion Bar", "Custom Hospitality Environment", "South Florida"], ["Executive Brand Lounge", "Corporate Hospitality", "Miami, Florida"], ["Architectural Media Bar", "Custom Fabrication", "South Florida"], ["Interactive Retail Environment", "Brand Experience", "National"], ["Outdoor Hospitality Pavilion", "Event Environment", "South Florida"], ["Executive Reception Environment", "Architectural Millwork", "Miami, Florida"]],
    workNote: "Selected project experience. Scope and project credits are available upon request.",
    capabilities: "What We Build",
    services: [["Custom Fabrication", "One-of-a-kind structures and branded environments built around the project—not a catalog."], ["Brand Activations", "Physical brand experiences designed to create attention, interaction and lasting recall."], ["Experiential Environments", "Immersive spaces for corporate events, hospitality, launches and live experiences."], ["Architectural Installations", "Custom structures and features combining design thinking with fabrication expertise."], ["Pop-Ups & Pavilions", "Temporary environments engineered for impact, efficiency and installation."], ["Agency Fabrication", "White-label production support for teams with a concept and a need for precise execution."]],
    process: "From Idea to Installation",
    steps: [["Discover", "Tell us the idea, space, deadline and objective."], ["Design", "We develop the direction, materials and fabrication approach."], ["Engineer", "We solve how the concept will be built, transported and installed."], ["Fabricate", "Our team brings the concept into the physical world."], ["Install", "We deliver, assemble and prepare the experience for its audience."]],
    studio: "Built on Experience",
    studioText: "FrameBuild Studios is led by Diego Mejia, a hands-on fabricator and creative problem solver with more than 15 years of experience turning ideas into physical environments.",
    quote: "Great design only matters if it can be built beautifully.",
    studioMore: "FrameBuild brings together craftsmanship, design thinking and real-world fabrication to create spaces that look exceptional and perform in the real world.",
    agencyTitle: "You Have the Idea. We Know How to Build It.",
    agencyText: "FrameBuild partners with creative agencies, experiential agencies, designers and event producers who need a reliable fabrication and installation partner. Send us the deck, rendering or concept. We’ll help determine how to make it real.",
    send: "Send Your Project",
    finalTitle: "Let’s Build Something People Remember.",
    finalText: "Have a project, rendering or idea? Send us the brief and let’s talk about what it takes to build it.",
    formTitle: "Start a Project",
    formIntro: "Share the essentials. We’ll review the brief and follow up with the right questions.",
    fields: { name: "Name", company: "Company", email: "Email", phone: "Phone", type: "What are you looking to build?", location: "Project location", date: "Event / installation date", budget: "Estimated budget", details: "Tell us about the project", file: "Upload your deck, rendering or inspiration", submit: "Submit Project" },
    types: ["Brand Activation", "Corporate Event", "Custom Fabrication", "Architectural Installation", "Pop-Up", "Pavilion", "Agency Fabrication", "Other"],
    budgets: ["Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000+", "Not Sure Yet"],
    thanks: "Thank you.", thanksText: "We’ve received your project brief and will review the details shortly.",
    footerLine: "Experiential Design & Custom Fabrication", footerCopy: "Designed and built around ideas worth experiencing.", menu: "Menu",
  },
  es: {
    nav: [["Proyectos", "#work"], ["Servicios", "#capabilities"], ["Estudio", "#studio"], ["Contacto", "#contact"]],
    start: "Iniciar un Proyecto",
    hero: ["Construimos ideas", "en experiencias."],
    intro: "Diseño experiencial y fabricación personalizada para marcas, agencias y espacios.",
    view: "Ver Proyectos",
    statementTitle: "Las ideas son fáciles. Construirlas es otra historia.",
    statement: "Convertimos conceptos ambiciosos en experiencias físicas a través del diseño, la ingeniería, la fabricación y la instalación.",
    selected: "Proyectos Seleccionados",
    selectedText: "Espacios reales, detalles fabricados e instalaciones creadas para la forma en que las personas se reúnen, recorren y recuerdan.",
    explore: "Ver Proyecto",
    work: [["Bar de Pabellón Arquitectónico", "Espacio de Hospitalidad", "Sur de Florida"], ["Lounge Ejecutivo de Marca", "Hospitalidad Corporativa", "Miami, Florida"], ["Bar Arquitectónico Multimedia", "Fabricación Personalizada", "Sur de Florida"], ["Espacio Interactivo de Retail", "Experiencia de Marca", "Nacional"], ["Pabellón de Hospitalidad Exterior", "Espacio para Eventos", "Sur de Florida"], ["Recepción Ejecutiva a Medida", "Carpintería Arquitectónica", "Miami, Florida"]],
    workNote: "Experiencia seleccionada en proyectos. El alcance y los créditos están disponibles a solicitud.",
    capabilities: "Lo Que Construimos",
    services: [["Fabricación Personalizada", "Estructuras únicas y espacios de marca fabricados alrededor del proyecto, no de un catálogo."], ["Activaciones de Marca", "Experiencias físicas diseñadas para atraer atención, generar interacción y dejar memoria."], ["Espacios Experienciales", "Ambientes inmersivos para eventos corporativos, hospitality, lanzamientos y experiencias en vivo."], ["Instalaciones Arquitectónicas", "Estructuras y elementos personalizados que combinan diseño y experiencia de fabricación."], ["Pop-Ups y Pabellones", "Espacios temporales diseñados para generar impacto, eficiencia y una instalación precisa."], ["Fabricación para Agencias", "Producción white-label para equipos con una idea que necesitan ejecución confiable."]],
    process: "De la Idea a la Instalación",
    steps: [["Descubrir", "Cuéntanos la idea, el espacio, la fecha y el objetivo."], ["Diseñar", "Desarrollamos la dirección, los materiales y el enfoque de fabricación."], ["Ingeniería", "Definimos cómo construir, transportar e instalar el concepto."], ["Fabricar", "Convertimos el concepto en una experiencia física."], ["Instalar", "Entregamos, ensamblamos y dejamos el espacio listo para su audiencia."]],
    studio: "Construido sobre Experiencia",
    studioText: "FrameBuild Studios es liderado por Diego Mejia, especialista en fabricación y ejecución creativa con más de 15 años de experiencia convirtiendo ideas en espacios físicos.",
    quote: "Un gran diseño solo importa si puede construirse bien.",
    studioMore: "FrameBuild combina artesanía, diseño y experiencia real de fabricación para crear espacios que no solo se ven extraordinarios, sino que funcionan.",
    agencyTitle: "Tú Tienes la Idea. Nosotros Sabemos Cómo Construirla.",
    agencyText: "FrameBuild trabaja con agencias creativas, diseñadores y productores de eventos que necesitan un socio confiable para fabricación e instalación. Envíanos el deck, render o concepto. Te ayudaremos a convertirlo en realidad.",
    send: "Enviar Proyecto",
    finalTitle: "Construyamos Algo que la Gente Recuerde.",
    finalText: "¿Tienes un proyecto, render o idea? Envíanos la información y conversemos sobre cómo hacerlo realidad.",
    formTitle: "Iniciar un Proyecto",
    formIntro: "Comparte la información esencial. Revisaremos el brief y te contactaremos con las preguntas indicadas.",
    fields: { name: "Nombre", company: "Empresa", email: "Email", phone: "Teléfono", type: "¿Qué deseas construir?", location: "Ubicación del proyecto", date: "Fecha del evento / instalación", budget: "Presupuesto estimado", details: "Cuéntanos sobre el proyecto", file: "Adjunta tu deck, render o referencias", submit: "Enviar Proyecto" },
    types: ["Activación de Marca", "Evento Corporativo", "Fabricación Personalizada", "Instalación Arquitectónica", "Pop-Up", "Pabellón", "Fabricación para Agencia", "Otro"],
    budgets: ["Menos de $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000+", "Aún no estoy seguro"],
    thanks: "Gracias.", thanksText: "Recibimos la información de tu proyecto y revisaremos los detalles.",
    footerLine: "Diseño Experiencial & Fabricación Personalizada", footerCopy: "Diseñado y construido alrededor de ideas que vale la pena vivir.", menu: "Menú",
  },
};

const workImages = ["/images/project-pavilion.webp", "/images/project-hospitality.webp", "/images/project-bar.webp", "/images/project-retail.webp", "/images/project-event.webp", "/images/project-corporate-desk.webp"];

function CapabilityIcon({ index }: { index: number }) {
  const icons = [
    <><path d="M5 19 19 5"/><path d="m14 5 5 5"/><path d="M4 20h5"/></>,
    <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z"/></>,
    <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12v9"/></>,
    <><path d="M4 20h16M6 17V9m4 8V9m4 8V9m4 8V9M4 7l8-4 8 4H4Z"/></>,
    <><path d="M3 10h18M5 10v10m14-10v10M4 20h16M6 10l2-6h8l2 6"/></>,
    <><path d="m8 12 3 3 5-5"/><path d="M3 8.5 7 5l4 3 2-1.5L17 5l4 3.5-4.5 8.5H7.5L3 8.5Z"/></>,
  ];
  return <svg className="capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[index]}</svg>;
}

function ProcessIcon({ index }: { index: number }) {
  const icons = [
    <><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/><path d="M10.5 8v5M8 10.5h5"/></>,
    <><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"/><path d="m14.5 7.5 3 3"/></>,
    <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12v9"/></>,
    <><path d="M5 19 19 5"/><path d="m14 5 5 5"/><path d="M4 20h5"/><path d="M7 17 4 14"/></>,
    <><path d="M20 11a8 8 0 1 1-4-6.9"/><path d="m9 11 2.5 2.5L20 5"/></>,
  ];
  return <svg className="process-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[index]}</svg>;
}

function track(event: string, extra: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const dataLayer = ((window as unknown as { dataLayer?: unknown[] }).dataLayer ||= []);
  dataLayer.push({ event, ...extra });
}

export function FrameBuildSite({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lang]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
      const value = params.get(key); if (value) sessionStorage.setItem(key, value);
    });
  }, []);

  const languageHref = lang === "en" ? "/es" : "/";
  const otherLang = lang === "en" ? "ES" : "EN";

  return <>
    <header className={`site-header ${scrolled || menuOpen ? "header-solid" : ""}`}>
      <a className="brand" href="#top" aria-label="FrameBuild Studios"><img className="brand-logo" src="/images/framebuild-logo.png" alt="FrameBuild Studios" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{c.nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
      <div className="header-actions">
        <a className="language" href={languageHref} onClick={() => track("language_switch", { language: otherLang.toLowerCase() })}>{lang === "en" ? <><b>EN</b><span>/</span>ES</> : <>EN<span>/</span><b>ES</b></>}</a>
        <a className="button header-cta" href="#contact" onClick={() => track("click_start_project")}>{c.start}</a>
        <button className="menu-button" aria-expanded={menuOpen} aria-label={c.menu} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </div>
      {menuOpen && <div className="mobile-menu">{c.nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href={languageHref}>{otherLang}</a><a className="button" href="#contact" onClick={() => setMenuOpen(false)}>{c.start}</a></div>}
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-content"><h1>{c.hero.map((line) => <span key={line}>{line}</span>)}</h1><p>{c.intro}</p><div className="hero-buttons"><a className="button button-dark" href="#contact" onClick={() => track("click_start_project")}>{c.start}</a><a className="text-link" href="#work">{c.view}<span>→</span></a></div></div>
        <figure className="hero-media"><img className="hero-image" src="/images/hero.webp" alt="Custom fabricated hospitality environment by FrameBuild Studios" fetchPriority="high" /><figcaption><span>Miami, Florida</span><span>Design · Engineering · Fabrication · Installation</span></figcaption></figure>
      </section>

      <section className="statement section-pad"><div className="statement-copy"><h2>{c.statementTitle}</h2><p>{c.statement}</p></div><figure className="statement-image"><img src="/images/project-corporate.webp" alt="Corporate experiential environment" loading="lazy" /></figure></section>

      <section id="work" className="work section-pad">
        <div className="section-intro"><h2>{c.selected}</h2><p>{c.selectedText}</p></div>
        <div className="work-grid">{c.work.map((project, index) => <article className={`project project-${index + 1}`} key={project[0]} tabIndex={0} onClick={() => track("portfolio_view", { project: project[0] })}><img src={workImages[index]} alt={project[0]} loading="lazy" /><div className="project-card"><h3>{project[0]}</h3><p>{project[1]}<br />{project[2]}</p><span>{c.explore} ↗</span></div></article>)}</div>
        <p className="work-note">{c.workNote}</p><a className="button button-dark centered-cta" href="#contact">{c.start}</a>
      </section>

      <section id="capabilities" className="capabilities"><img className="cap-bg" src="/images/agency-build.webp" alt="Custom fabrication installation in progress" loading="lazy" /><div className="cap-shade" /><div className="cap-inner section-pad"><h2>{c.capabilities}</h2><div className="cap-grid">{c.services.map(([title, text], index) => <article className="glass-card" key={title}><CapabilityIcon index={index} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="process" className="process section-pad"><h2>{c.process}</h2><div className="process-grid">{c.steps.map(([title, text], index) => <article key={title}><div className="process-icon-wrap"><ProcessIcon index={index} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="studio" className="studio section-pad"><div className="studio-image"><img src="/images/process-fabrication.webp" alt="FrameBuild fabrication process" loading="lazy" /></div><div className="studio-copy"><h2>{c.studio}</h2><p>{c.studioText}</p><blockquote>{c.quote}</blockquote><p>{c.studioMore}</p></div></section>

      <section className="agency"><img src="/images/agency-build.webp" alt="Fabrication and installation partner for creative agencies" loading="lazy" /><div className="agency-shade" /><div className="agency-content glass-panel"><h2>{c.agencyTitle}</h2><p>{c.agencyText}</p><a className="button button-light" href="#contact">{c.send}</a></div></section>

      <section className="final-cta section-pad"><h2>{c.finalTitle}</h2><p>{c.finalText}</p><a className="text-link" href="#contact">{c.start}<span>↘</span></a></section>

      <section id="contact" className="contact section-pad">
        <div className="contact-heading"><h2>{c.formTitle}</h2><p>{c.formIntro}</p><div className="contact-detail"><span>Miami, Florida · South Florida · National Projects</span></div></div>
        {sent ? <div className="thank-you" role="status"><h3>{c.thanks}</h3><p>{c.thanksText}</p><button className="text-link" onClick={() => setSent(false)}>← {c.formTitle}</button></div> : <form className="project-form" onFocus={() => track("project_form_start")} onSubmit={(e) => { e.preventDefault(); track("project_form_submit"); setSent(true); }}>
          <label><span>{c.fields.name}</span><input name="name" autoComplete="name" required /></label><label><span>{c.fields.company}</span><input name="company" autoComplete="organization" /></label><label><span>{c.fields.email}</span><input type="email" name="email" autoComplete="email" required /></label><label><span>{c.fields.phone}</span><input type="tel" name="phone" autoComplete="tel" /></label>
          <label className="full"><span>{c.fields.type}</span><select name="project_type" defaultValue="" required><option value="" disabled>—</option>{c.types.map((option) => <option key={option}>{option}</option>)}</select></label><label><span>{c.fields.location}</span><input name="location" /></label><label><span>{c.fields.date}</span><input type="date" name="date" /></label><label className="full"><span>{c.fields.budget}</span><select name="budget" defaultValue=""><option value="">—</option>{c.budgets.map((option) => <option key={option}>{option}</option>)}</select></label><label className="full"><span>{c.fields.details}</span><textarea name="details" rows={5} required /></label><label className="file-field full"><span>{c.fields.file}</span><input type="file" name="file" accept=".pdf,.png,.jpg,.jpeg,.ppt,.pptx" onChange={() => track("file_upload")} /></label><button className="button button-light form-submit" type="submit">{c.fields.submit}<span>↗</span></button>
        </form>}
      </section>
    </main>

    <a className="mobile-sticky" href="#contact" onClick={() => track("click_start_project")}>{c.start}<span>↗</span></a>
    <footer className="site-footer">
      <div className="footer-top"><div className="footer-brand"><img src="/images/framebuild-logo.png" alt="FrameBuild Studios" /><p>{c.footerLine}</p></div><a className="footer-cta" href="#contact"><span>{c.start}</span><b>↗</b></a></div>
      <div className="footer-bottom"><nav className="footer-links" aria-label="Footer navigation">{c.nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="footer-meta"><span>Miami, Florida</span><span>South Florida · National Projects</span><a href={languageHref}>{lang === "en" ? "Español" : "English"}</a></div></div>
      <div className="footer-legal"><p>{c.footerCopy}</p><p>© {new Date().getFullYear()} FrameBuild Studios</p></div>
    </footer>
  </>;
}
