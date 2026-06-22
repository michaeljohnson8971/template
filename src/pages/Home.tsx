import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroCityscape from "@/assets/hero-cityscape.jpg";

const expertise = [
  {
    title: "Economic Development Strategy",
    description: "Designing strategies that guide investment and strengthen local economies.",
    items: ["Strategic planning", "Investment frameworks", "District revitalization", "Program design"],
  },
  {
    title: "Community Investment",
    description: "Supporting initiatives that bring coordinated capital and programs to neighborhoods.",
    items: ["Neighborhood investment strategies", "Coordinated capital deployment", "Inclusive development", "Place-based initiatives"],
  },
  {
    title: "Small Business Ecosystems",
    description: "Strengthening systems that support entrepreneurs and neighborhood business districts.",
    items: ["Ecosystem analysis", "Commercial corridor strategy", "Entrepreneurship support", "Small business programs"],
  },
  {
    title: "Research & Policy",
    description: "Producing research and analysis that informs economic development decision-making.",
    items: ["Market analysis", "Policy evaluation", "Economic landscape studies", "Program assessment"],
  },
];

const experiences = [
  {
    slug: "small-business-ecosystem-dashboard",
    title: "Chicago Small Business Ecosystem & Citywide Dashboard",
    description: "Senior leader for institution-wide economic development and planning initiatives supporting Chicago-area commercial corridors and neighborhood business districts. Directed cross-functional research teams producing quantitative and qualitative analysis on business support ecosystems, macroeconomic indicators, and commercial corridor trends.",
  },
  {
    slug: "climate-financing-new-england",
    title: "Climate Financing & Capital Strategy Research",
    description: "Founded public sector consulting firm supporting fiscally constrained municipalities in implementing equity-centered climate adaptation, economic development, and infrastructure projects. Conducted qualitative and quantitative research on current climate financing efforts across New England, including interviews with state and local leadership and analysis of fiscal policy and capital flows from public budgets.",
  },
  {
    slug: "buffalo-wealth-inequality-strategy",
    title: "Citywide Wealth Inequality & Economic Resilience Agenda",
    description: "Served in a senior advisory and management role within the Mayor's Office as a City Hall Fellow, providing leadership on a citywide planning and policy agenda addressing wealth inequality and economic resilience. Led cross-departmental strategies integrating land use, workforce development, infrastructure investment, and sustainability priorities.",
  },
  {
    slug: "just-transition-policy-analysis",
    title: "Just Transition & Green Industrial Policy Analysis",
    description: "Conducted a national landscape analysis of labor and economic policies related to energy transition as an independent policy consultant, compiling case studies of firms leading on just transition and green industrial policy.",
  },
  {
    slug: "englewood-neighborhood-investment-plan",
    title: "Five-Year Neighborhood Development \u00a0Plan",
    description: "Held overall management responsibility for neighborhood-scale planning and community development initiatives funded through public and philanthropic sources, directing a $1.5M portfolio with oversight of budgeting, compliance, and reporting.",
  },
];

const Home = () => {
  return (
    <main>
      {/* Hero — asymmetric split inspired by re-designstudio */}
      <section className="relative min-h-screen flex">
        {/* Left: Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={heroCityscape}
            alt="Chicago skyline from Montrose Harbor — photo by John Picken, CC BY 2.0"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-32 lg:py-0">
          <div className="max-w-lg">
            <p className="mono-label mb-8 animate-fade-up">Economic Development Consultancy</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.2rem] text-foreground leading-[1.15] animate-fade-up animation-delay-200 text-balance">
              Building Stronger Local Economies Through Strategy, Research & Community Investment
            </h1>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-md animate-fade-up animation-delay-400">
              Working with cities, nonprofits, and institutions to design initiatives that expand opportunity and strengthen neighborhood economies.
            </p>
            <div className="mt-12 flex flex-wrap gap-6 animate-fade-up animation-delay-600">
              <Link
                to="/services#contact"
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
              >
                Get in Touch
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile hero image */}
        <div className="lg:hidden absolute inset-0 -z-10">
          <img
            src={heroCityscape}
            alt="Chicago skyline"
            className="w-full h-full object-cover grayscale opacity-15"
          />
        </div>
      </section>

      {/* Value Strip */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: "Strategy", description: "Actionable economic development frameworks that guide investment and growth." },
              { title: "Analysis", description: "Research-driven insights that inform policy and program decisions." },
              { title: "Implementation", description: "From strategy to sustained action — partnership building and program launch." },
            ].map((pillar, i) => (
              <div key={pillar.title} className={`animate-fade-up animation-delay-${(i + 1) * 200}`}>
                <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-2xl text-foreground mt-4 mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="py-24 lg:py-32 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="mono-label mb-4">Areas of Work</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-20">
            Core Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {expertise.map((area, i) => (
              <div key={area.title} className="border-t border-border pt-8">
                <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl text-foreground mt-4 mb-3">{area.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{area.description}</p>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-3">
                      <span className="w-4 h-px bg-foreground/30 mt-2 shrink-0" />
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
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-20">
            <div>
              <p className="mono-label mb-4">Applied Experience</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Selected Work
              </h2>
            </div>
            <Link to="/work" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors">
              View All
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <Link
                key={i}
                to={`/work#${exp.slug}`}
                className="group block border-t border-border py-10 hover:bg-secondary/50 transition-colors px-2 -mx-2"
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <span className="mono-label md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground md:col-span-4 group-hover:translate-x-2 transition-transform">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed md:col-span-6">
                    {exp.description}
                  </p>
                  <div className="md:col-span-1 flex justify-end">
                    <ArrowRight size={16} strokeWidth={1.5} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/work" className="md:hidden mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors">
            View All Work
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-primary border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/40 mb-8">
            Let's Connect
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Every Project Starts With a Conversation
          </h2>
          <p className="text-primary-foreground/50 text-sm mb-4 leading-relaxed">
            If you are developing an initiative, conducting research, or exploring a new economic development strategy, we welcome the opportunity to collaborate.
          </p>
          <p className="text-primary-foreground/30 text-xs mb-14 font-mono tracking-wide">
            We typically respond within 1–2 business days.
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

export default Home;
