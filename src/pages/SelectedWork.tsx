import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    slug: "small-business-ecosystem-dashboard",
    title: "Chicago Small Business Ecosystem & Citywide Dashboard",
    client: "Quinlan School of Business, Loyola University Chicago",
    year: "2025—Present",
    category: "Economic Development",
    description:
      "Senior leader for institution-wide economic development and planning initiatives supporting Chicago-area commercial corridors and neighborhood business districts. Directed cross-functional research teams producing quantitative and qualitative analysis on business support ecosystems, macroeconomic indicators, and commercial corridor trends.",
    outcomes: [
      "Oversaw development and deployment of a citywide Chicago business dashboard",
      "Aligned municipal, philanthropic, and nonprofit partners across agencies and funding streams",
      "Co-led steering committee for a citywide business development conference",
    ],
  },
  {
    slug: "climate-financing-new-england",
    title: "Climate Financing & Capital Strategy Research",
    client: "DABL_STUDIO — New England Municipalities",
    year: "2024—Present",
    category: "Research & Analysis",
    description:
      "Founded public sector consulting firm supporting fiscally constrained municipalities in implementing equity-centered climate adaptation, economic development, and infrastructure projects. Conducted qualitative and quantitative research on current climate financing efforts across New England, including interviews with state and local leadership and analysis of fiscal policy and capital flows from public budgets.",
    outcomes: [
      "Designed economic, demographic, and policy analyses informing municipal investment strategies",
      "Thematically coded leadership interviews to surface regional climate financing approaches",
      "Delivered multisource recommendations supporting inclusive regional economic development",
    ],
  },
  {
    slug: "buffalo-wealth-inequality-strategy",
    title: "Citywide Wealth Inequality & Economic Resilience Agenda",
    client: "Bloomberg Center for Cities at Harvard University — Mayor's Office, Buffalo, NY",
    year: "2023—2025",
    category: "Strategy",
    description:
      "Served in a senior advisory and management role within the Mayor's Office as a City Hall Fellow, providing leadership on a citywide planning and policy agenda addressing wealth inequality and economic resilience. Led cross-departmental strategies integrating land use, workforce development, infrastructure investment, and sustainability priorities.",
    outcomes: [
      "Established and chaired interagency working groups coordinating implementation across departments",
      "Prepared technical analyses, policy memos, and executive briefings for elected officials",
      "Presented key wealth indicators spanning education, homeownership, credit, and labor",
    ],
  },
  {
    slug: "just-transition-policy-analysis",
    title: "Just Transition & Green Industrial Policy Analysis",
    client: "PolicyLink",
    year: "2021—2022",
    category: "Policy & Partnerships",
    description:
      "Conducted a national landscape analysis of labor and economic policies related to energy transition as an independent policy consultant, compiling case studies of firms leading on just transition and green industrial policy.",
    outcomes: [
      "Delivered a concise policy report informing strategic priorities of a new portfolio",
      "Aggregated and analyzed policy and labor data to identify partnership opportunities",
      "Produced recommendations for new strategies engaging labor and civic organizations",
    ],
  },
  {
    slug: "englewood-neighborhood-investment-plan",
    title: "Five-Year Neighborhood Investment & Land Use Plan",
    client: "Teamwork Englewood — Chicago, IL",
    year: "2019—2021",
    category: "Community Investment",
    description:
      "Held overall management responsibility for neighborhood-scale planning and community development initiatives funded through public and philanthropic sources, directing a $1.5M portfolio with oversight of budgeting, compliance, and reporting.",
    outcomes: [
      "Led update of a five-year neighborhood investment and land use plan",
      "Managed partnerships across municipal agencies, consultants, and community stakeholders",
      "Designed internal governance and change-management systems strengthening coalition effectiveness",
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
