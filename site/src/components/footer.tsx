import { LinkedInIcon, WhatsAppIcon } from "@/components/brand-icons";
import { contact } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden border-t border-line bg-base">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-tight opacity-60"
      />
      {/* Accent line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />

      <div className="hud-corners relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Identity */}
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 font-mono text-base tracking-[0.18em]">
              <span className="text-accent">[</span>
              <span className="text-ink">ULÍA</span>
              <span className="text-accent">]</span>
            </div>
            <p className="mt-4 max-w-md font-display text-2xl leading-tight text-ink md:text-3xl">
              Construido por mí,{" "}
              <span className="text-accent">en código</span>, para humanos
              reales.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-3">
              AI Systems Engineer · alquimIA
              <br />
              Monterrey, México
            </p>
          </div>

          {/* Channels */}
          <div className="md:col-span-3">
            <p className="section-label">// Canales</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="h-4 w-4 text-accent-dim transition-colors group-hover:text-accent" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-accent"
                >
                  <LinkedInIcon className="h-4 w-4 text-accent-dim transition-colors group-hover:text-accent" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="md:col-span-3">
            <p className="section-label">// Estado</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-ink-2">
              <span className="status-dot" />
              Disponible · 2 cupos Q1 2026
            </div>
            <p className="mt-3 max-w-xs font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">
              Respuesta &lt; 2h en horario laboral
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3 md:flex-row md:items-center">
          <span>© {year} José Ángel Ulibarri · ulia.agency</span>
          <span className="inline-flex items-center gap-2">
            <span className="status-dot" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
