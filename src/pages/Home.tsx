import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, FileText, Handshake, TrendingUp, BarChart3, Rocket } from "lucide-react";
import heroCityscape from "@/assets/hero-cityscape.jpg";

const valuePillars = [
  {
    icon: TrendingUp,
    title: "Strategy",
    description: "Actionable economic development frameworks that guide investment and growth.",
  },
  {
    icon: BarChart3,
    title: "Analysis",
    description: "Research-driven insights that inform policy and program decisions.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "From strategy to sustained action — partnership building and program launch.",
  },
];

const expertise = [
  {
    icon: Building2,
    title: "Economic Development Strategy",
    description: "Designing strategies that guide investment and strengthen local economies.",
    items: ["Strategic planning", "Investment frameworks", "District revitalization", "Program design"],
  },
  {
    icon: Users,
    title: "Community Investment",
    description: "Supporting initiatives that bring coordinated capital and programs to neighborhoods.",
    items: ["Neighborhood investment strategies", "Coordinated capital deployment", "Inclusive development", "Place-based initiatives"],
  },
  {
    icon: FileText,
    title: "Small Business Ecosystems",
    description: "Strengthening systems that support entrepreneurs and neighborhood business districts.",
    items: ["Ecosystem analysis", "Commercial corridor strategy", "Entrepreneurship support", "Small business programs"],
  },
  {
    icon: Handshake,
    title: "Research & Policy",
    description: "Producing research and analysis that informs economic development decision-making.",
    items: ["Market analysis", "Policy evaluation", "Economic landscape studies", "Program assessment"],
  },
];

const experiences = [
  {
    slug: "community-investment-initiative",
    title: "Community Investment Initiative",
    description: "Managed a multi-sector community investment strategy coordinating public, philanthropic, and private capital to strengthen neighborhood economies in underserved corridors.",
  },
  {
    slug: "small-business-ecosystem-research",
    title: "Small Business Ecosystem Research",
    description: "Led research examining small business support systems across multiple districts, producing actionable recommendations for strengthening local entrepreneurship infrastructure.",
  },
  {
    slug: "economic-development-strategic-plan",
    title: "Economic Development Strategic Plan",
    description: "Developed a comprehensive economic development framework for a municipal planning department, integrating market analysis, stakeholder input, and investment prioritization.",
  },
  {
    slug: "cross-sector-policy-collaboration",
    title: "Cross-Sector Policy Collaboration",
    description: "Facilitated partnerships between government agencies, university research centers, and community organizations to align economic development policy with neighborhood priorities.",
  },
];

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroCityscape}
            alt="Chicago skyline from Montrose Harbor — photo by John Picken, CC BY 2.0"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/30" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-primary-foreground leading-[1.15] animate-fade-up text-balance">
              Building Stronger Local Economies Through Strategy, Research, and Community Investment
            </h1>
            <p className="mt-7 text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-xl animate-fade-up animation-delay-200">
              Economic development consultancy working with cities, nonprofits, and institutions to design initiatives that expand opportunity and strengthen neighborhood economies.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up animation-delay-400">
              <Link
                to="/services#contact"
                className="inline-flex items-center gap-2.5 bg-terracotta text-accent-foreground px-8 py-4 rounded-full font-medium text-sm hover:bg-terracotta-light transition-all shadow-elevated"
              >
                Let's Talk
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-full font-medium text-sm hover:bg-primary-foreground/10 transition-all"
              >
                View Work & Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {valuePillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-5 p-6 rounded-2xl bg-card shadow-card">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                  <pillar.icon className="text-terracotta" size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="py-8 lg:py-10 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta mb-2 text-center">Areas of Work</p>
          <h2 className="font-display text-lg md:text-xl text-foreground text-center mb-6">
            Core Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {expertise.map((area) => (
              <div
                key={area.title}
                className="bg-background p-4 rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-terracotta/10 flex items-center justify-center mb-3">
                  <area.icon className="text-terracotta" size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-sm text-foreground mb-1.5">{area.title}</h3>
                <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{area.description}</p>
                <ul className="space-y-1.5">
                  {area.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-terracotta/50 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Experience */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-5">Applied Experience</p>
          <Link to="/work" className="group">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-16 group-hover:text-terracotta transition-colors inline-flex items-center gap-3">
              Selected Work
              <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h2>
          </Link>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <Link key={i} to={`/work#${exp.slug}`} className="bg-card rounded-2xl shadow-card overflow-hidden group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image Placeholder</span>
                </div>
                <div className="p-8">
                  <div className="w-10 h-1 rounded-full bg-terracotta mb-6" />
                  <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-terracotta transition-colors">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Every Project Starts With a Conversation
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-4 leading-relaxed">
             If you are developing an initiative, conducting research, or exploring a new economic development strategy, we welcome the opportunity to collaborate.
           </p>
           <p className="text-primary-foreground/40 text-sm mb-12">
             We typically respond within 1–2 business days.
          </p>
          <Link
            to="/services#contact"
            className="inline-flex items-center gap-2.5 bg-terracotta text-accent-foreground px-10 py-4 rounded-full font-medium hover:bg-terracotta-light transition-all shadow-elevated"
          >
            Let's Talk
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
