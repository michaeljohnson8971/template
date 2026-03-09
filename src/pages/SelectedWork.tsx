import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    slug: "community-investment-initiative",
    title: "Community Investment Initiative",
    client: "Municipal Planning Department",
    year: "2024",
    category: "Community Investment",
    description:
      "Managed a multi-sector community investment strategy coordinating public, philanthropic, and private capital to strengthen neighborhood economies in underserved corridors.",
    outcomes: [
      "Coordinated $12M+ in cross-sector capital deployment",
      "Engaged 200+ community stakeholders",
      "Developed 5-year neighborhood investment framework",
    ],
  },
  {
    slug: "small-business-ecosystem-research",
    title: "Small Business Ecosystem Research",
    client: "Community Development Corporation",
    year: "2023",
    category: "Research & Analysis",
    description:
      "Led research examining small business support systems across multiple districts, producing actionable recommendations for strengthening local entrepreneurship infrastructure.",
    outcomes: [
      "Mapped 80+ small business support organizations",
      "Identified 12 critical ecosystem gaps",
      "Delivered policy brief to city council",
    ],
  },
  {
    slug: "economic-development-strategic-plan",
    title: "Economic Development Strategic Plan",
    client: "City Economic Development Office",
    year: "2023",
    category: "Strategy",
    description:
      "Developed a comprehensive economic development framework for a municipal planning department, integrating market analysis, stakeholder input, and investment prioritization.",
    outcomes: [
      "5-year strategic plan adopted by city council",
      "Prioritized 15 catalytic investment zones",
      "Created implementation roadmap with KPIs",
    ],
  },
  {
    slug: "cross-sector-policy-collaboration",
    title: "Cross-Sector Policy Collaboration",
    client: "University Policy Center",
    year: "2022",
    category: "Policy & Partnerships",
    description:
      "Facilitated partnerships between government agencies, university research centers, and community organizations to align economic development policy with neighborhood priorities.",
    outcomes: [
      "Established 3 new cross-sector working groups",
      "Co-authored published policy recommendations",
      "Secured ongoing institutional commitment",
    ],
  },
];

const SelectedWork = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="mono-label mb-6">Portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Selected Work
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              A selection of economic development strategy, research, and community investment projects delivered for public, nonprofit, and institutional partners.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {projects.map((project, i) => (
              <div
                id={project.slug}
                key={project.slug}
                className="border-t border-border py-16 scroll-mt-32"
              >
                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Left column */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="mono-label">{project.category}</span>
                      <span className="w-4 h-px bg-foreground/20" />
                      <span className="mono-label">{project.year}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>

                  {/* Right column */}
                  <div className="lg:col-span-6 lg:col-start-7">
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="border-t border-border pt-6">
                      <p className="mono-label mb-4">Key Outcomes</p>
                      <ul className="space-y-3">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="text-sm text-muted-foreground flex items-start gap-3">
                            <span className="w-4 h-px bg-foreground/30 mt-2.5 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-primary border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-primary-foreground/50 text-sm mb-14 leading-relaxed">
            We welcome conversations about new projects, research partnerships, and strategic initiatives.
          </p>
          <Link
            to="/services#contact"
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors"
          >
            Get in Touch
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SelectedWork;
