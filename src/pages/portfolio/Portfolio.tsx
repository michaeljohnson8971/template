import { ArrowRight } from "lucide-react";

const projects = [
  {
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
    image: "/placeholder.svg",
  },
  {
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
    image: "/placeholder.svg",
  },
  {
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
    image: "/placeholder.svg",
  },
  {
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
    image: "/placeholder.svg",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Portfolio = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-5">
              Portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Selected Projects
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A selection of economic development strategy, research, and community investment projects delivered for public, nonprofit, and institutional partners.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tags */}
      <section className="py-8 border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-xs font-medium border border-border text-muted-foreground hover:border-terracotta hover:text-terracotta transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-card"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground/50">•</span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground/60 mb-5">{project.client}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="bg-secondary/60 rounded-xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-3">
                      Key Outcomes
                    </p>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="text-sm text-muted-foreground flex items-start gap-2.5">
                          <ArrowRight size={12} className="text-terracotta mt-1 shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-12 leading-relaxed">
            We welcome conversations about new projects, research partnerships, and strategic initiatives.
          </p>
          <a
            href="/services#contact"
            className="inline-flex items-center gap-2.5 bg-terracotta text-accent-foreground px-10 py-4 rounded-full font-medium hover:bg-terracotta-light transition-all shadow-elevated"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
