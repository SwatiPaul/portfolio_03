import { siteConfig, navLinks, projects } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <h3 className="label-sm mb-6">Website</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-muted/60 hover:text-white transition-colors duration-500 text-sm font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-sm mb-6">Projects</h3>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-muted/60 hover:text-white transition-colors duration-500 text-sm font-light"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-sm mb-6">Social</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-brand-muted/60 hover:text-white transition-colors duration-500 text-sm font-light">
                  Contact Form
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-brand-muted/60 hover:text-white transition-colors duration-500 text-sm font-light">
                  Email
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="text-brand-muted/60 hover:text-white transition-colors duration-500 text-sm font-light">
                  Phone
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-muted/60 hover:text-white transition-colors duration-500 text-sm font-light">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-brand-muted/50 text-xs font-light">
            Copyright © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-[0.55rem] font-mono">
            {"<>"}
          </span>
          <p className="text-brand-muted/50 text-xs font-light">
            Frontend development from {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
