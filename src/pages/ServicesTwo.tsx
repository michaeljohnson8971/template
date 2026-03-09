import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Search, BarChart3, Users, Lightbulb, ArrowRight, Briefcase, RefreshCw, MessageSquare } from "lucide-react";
import communityImg from "@/assets/community-planning.jpg";

const services = [
  {
    title: "Economic Development Strategy",
    items: ["Economic development planning", "Investment strategy development", "District revitalization frameworks", "Program design"],
  },
  {
    title: "Research & Market Analysis",
    items: ["Economic landscape analysis", "Small business ecosystem research", "Policy analysis", "Program evaluation"],
  },
  {
    title: "Community Engagement & Participatory Planning",
    items: ["Stakeholder workshops", "Community dialogues", "Participatory research", "Collaborative planning"],
  },
  {
    title: "Strategic Advisory",
    items: ["Initiative design", "Partnership development", "Implementation strategy", "Institutional collaboration"],
  },
];

const methodology = [
  { icon: Search, step: "01", title: "Discovery", description: "Stakeholder interviews and institutional landscape analysis to understand context, relationships, and opportunity." },
  { icon: BarChart3, step: "02", title: "Research", description: "Market analysis and economic ecosystem mapping to build an evidence base for strategic decisions." },
  { icon: Lightbulb, step: "03", title: "Strategy Development", description: "Actionable recommendations and program design grounded in research findings and stakeholder priorities." },
  { icon: Users, step: "04", title: "Implementation", description: "Partnership development and program launch support to move from strategy to sustained action." },
];

const engagementModels = [
  { icon: Briefcase, title: "Project-Based", description: "Defined scope engagements — from strategic plans and market studies to program design. Ideal for initiatives with clear deliverables and timelines." },
  { icon: RefreshCw, title: "Retainer", description: "Ongoing advisory support for organizations managing multiple economic development priorities. Flexible hours with consistent availability." },
  { icon: MessageSquare, title: "Advisory", description: "Focused strategic guidance on specific questions — initiative design, partnership positioning, or policy framing. Efficient and targeted." },
];

const clientTypes = [
  { category: "Local Governments", image: "/placeholder.svg", items: ["Planning departments", "Economic development departments", "Mayoral initiatives"] },
  { category: "Community Development Organizations", image: "/placeholder.svg", items: ["Community development corporations", "Neighborhood organizations", "Housing organizations"] },
  { category: "Philanthropy & Research Institutions", image: "/placeholder.svg", items: ["Foundations", "Universities", "Policy institutes"] },
  { category: "Private Sector & Development", image: "/placeholder.svg", items: ["Real estate developers", "Economic impact analysts", "Incentives navigation"] },
];

/**
 * CONFIGURATION:
 * Paste your Microsoft Forms or Google Forms embed URL below.
 * 
 * Microsoft Forms:
 *   1. Go to forms.office.com → open your form → Share → Embed
 *   2. Copy the src URL from the iframe code
 *   Example: "https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID&embed=true"
 * 
 * Google Forms:
 *   1. Go to docs.google.com/forms → open your form → Send → <> Embed
 *   2. Copy the src URL from the iframe code
 *   Example: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
 */
const FORM_EMBED_URL = "";

const ServicesTwo = () => {
  const location = useLocation();
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const isGoogleForm = FORM_EMBED_URL.includes("docs.google.com/forms");
  const isMicrosoftForm = FORM_EMBED_URL.includes("forms.office.com") || FORM_EMBED_URL.includes("forms.microsoft.com");

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-4">Work & Services</p>
              <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-4">
                How We Work
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed">
                We provide strategic consulting across economic development, community investment, small business ecosystems, and policy — from initial research through implementation support.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src={communityImg}
                alt="Community planning session"
                className="w-full aspect-[4/3] object-cover rounded-2xl opacity-60 grayscale-[30%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5 lg:py-6">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-4">Consulting Services</p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-10">
            Service Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div key={service.title} className="bg-card p-4 rounded-xl shadow-card">
                <h3 className="font-display text-sm text-foreground mb-2">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-xs flex items-start gap-2">
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

      {/* Engagement Models */}
      <section className="py-10 lg:py-14 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-3 text-center">Engagement</p>
          <h2 className="font-display text-xl md:text-2xl text-foreground text-center mb-3">
            How We Can Work Together
          </h2>
          <p className="text-muted-foreground text-xs text-center max-w-lg mx-auto mb-7">
            Every engagement is tailored to the scope and needs of the project. Here are three common models.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {engagementModels.map((model) => (
              <div key={model.title} className="bg-background p-4 rounded-lg shadow-card text-center">
                <div className="w-8 h-8 rounded-lg bg-terracotta/10 flex items-center justify-center mx-auto mb-3">
                  <model.icon className="text-terracotta" size={14} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-sm text-foreground mb-1.5">{model.title}</h3>
                <p className="text-muted-foreground text-[10px] leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-14 lg:py-16 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-3">Approach</p>
          <h2 className="font-display text-xl md:text-2xl text-primary-foreground mb-8">
            Methodology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodology.map((step) => (
              <div key={step.step} className="relative bg-primary-foreground/5 p-4 rounded-xl">
                <span className="font-display text-3xl font-bold text-primary-foreground/20 absolute top-2 right-3">
                  {step.step}
                </span>
                <div className="pt-4">
                  <div className="w-8 h-8 rounded-lg bg-terracotta/15 flex items-center justify-center mb-3">
                    <step.icon className="text-terracotta" size={14} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-sm text-primary-foreground mb-2">{step.title}</h3>
                  <p className="text-primary-foreground/55 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-4">Who We Work With</p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-10">
            Client Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {clientTypes.map((group) => (
              <div key={group.category} className="bg-card rounded-lg shadow-card p-3">
                <h3 className="font-display text-xs text-foreground mb-1.5">{group.category}</h3>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <ArrowRight size={8} className="text-terracotta shrink-0" />
                      <span className="text-muted-foreground text-[10px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-terracotta font-medium text-sm hover:underline underline-offset-4 transition-all"
            >
              See Clients' Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact — Embedded Form */}
      <section id="contact" className="py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-5 text-center">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
              Every Project Starts With a Conversation
            </h2>
            <p className="text-muted-foreground text-center mb-2">
              Fill out the form below to start a conversation, or reach out directly at{" "}
              <a href="mailto:hello@dablstudio.com" className="text-terracotta hover:underline underline-offset-4">
                hello@dablstudio.com
              </a>
            </p>
            <p className="text-muted-foreground/50 text-sm text-center mb-14">
              We typically respond within 1–2 business days.
            </p>

            {FORM_EMBED_URL ? (
              <div className="relative bg-background rounded-2xl shadow-card overflow-hidden">
                {!formLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-terracotta/30 border-t-terracotta rounded-full animate-spin" />
                      <p className="text-sm text-muted-foreground">Loading form...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={FORM_EMBED_URL}
                  title="Contact Form"
                  className="w-full border-0 rounded-2xl"
                  style={{ minHeight: isGoogleForm ? "900px" : isMicrosoftForm ? "800px" : "800px" }}
                  onLoad={() => setFormLoaded(true)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                />
              </div>
            ) : (
              <div className="bg-background rounded-2xl shadow-card p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="text-terracotta" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">Form Coming Soon</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md mx-auto">
                  Our contact form is being set up. In the meantime, please reach out directly via email.
                </p>
                <a
                  href="mailto:hello@dablstudio.com"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-sm hover:bg-navy-light transition-all shadow-soft"
                >
                  Email Us
                  <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesTwo;
