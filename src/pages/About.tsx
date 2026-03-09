import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, MapPin } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Master of Public Administration — Economic Development & Urban Policy",
      "Bachelor of Arts — Political Science & Economics",
    ],
  },
  {
    icon: Award,
    title: "Professional Background",
    items: [
      "Economic development strategy & research",
      "Community investment initiative management",
      "Public-nonprofit-institutional partnerships",
      "Small business ecosystem analysis",
    ],
  },
  {
    icon: MapPin,
    title: "Sector Experience",
    items: [
      "Municipal planning & economic development departments",
      "Community development organizations",
      "Philanthropy & research institutions",
      "University-based policy centers",
    ],
  },
];

const values = [
  {
    title: "Evidence-Based Strategy",
    description:
      "Every recommendation is grounded in rigorous research and data analysis — not assumptions. We believe sound strategy starts with understanding the landscape.",
  },
  {
    title: "Community-Centered Approach",
    description:
      "Lasting economic development requires the voices and priorities of community stakeholders at every stage, from research design through implementation.",
  },
  {
    title: "Collaborative Partnerships",
    description:
      "The most impactful initiatives are built across sectors. We bring together government, philanthropy, nonprofits, and institutions to achieve shared goals.",
  },
  {
    title: "Equitable Outcomes",
    description:
      "We design strategies intentionally focused on expanding opportunity in historically underserved communities and strengthening neighborhood economies.",
  },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero — asymmetric split */}
      <section className="min-h-[70vh] flex items-center border-b border-border">
        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="mono-label mb-6">About</p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-8">
                The Person Behind the Work
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                DABL Studio was founded to bring strategic clarity and
                research-driven insight to economic development challenges — with a
                deep commitment to community impact and equitable growth.
              </p>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-4/5 aspect-[3/4] bg-secondary border border-border flex items-center justify-center">
                <span className="mono-label">Portrait</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="mono-label mb-4">Founder</p>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                Mission-Driven Economic Development
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-6 text-muted-foreground leading-[1.9] text-base">
                <p>
                  DABL Studio is led by a practitioner with deep experience at
                  the intersection of economic development strategy, community
                  investment, and public policy. With a background spanning
                  municipal government, nonprofit organizations, and
                  institutional research, our work is informed by years of
                  managing complex, multi-sector initiatives.
                </p>
                <p>
                  From leading community investment strategies that coordinate
                  public, philanthropic, and private capital, to conducting small
                  business ecosystem research and developing strategic plans for
                  planning departments — the studio brings hands-on experience
                  to every engagement.
                </p>
                <p>
                  We believe the best economic development work happens at the
                  intersection of rigorous analysis, authentic community
                  engagement, and cross-sector collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 lg:py-32 bg-secondary border-t border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="mono-label mb-4 text-center">Background</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-20">
            Credentials & Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {credentials.map((cred, i) => (
              <div key={cred.title} className="border-t border-border pt-8">
                <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-lg text-foreground mt-4 mb-6">
                  {cred.title}
                </h3>
                <ul className="space-y-3">
                  {cred.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground text-sm flex items-start gap-3"
                    >
                      <span className="w-4 h-px bg-foreground/30 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Overview */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="mono-label mb-6">About</p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight mb-10">
              DABL Studio
            </h2>
            <p className="text-muted-foreground leading-[1.9] text-base mb-6">
              DABL Studio is a mission-driven economic development consultancy with deep experience managing multi-sector initiatives at the intersection of community investment, public policy, and research. Our work focuses on designing strategies that translate economic development analysis into actionable programs that strengthen neighborhood economies and expand opportunity.
            </p>
            <p className="text-muted-foreground leading-[1.9] text-base">
              With experience spanning public, nonprofit, and institutional settings, DABL Studio builds partnerships between government agencies, philanthropic organizations, and community stakeholders to develop inclusive economic growth strategies. Our approach is grounded in rigorous research, participatory engagement, and a commitment to equitable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-primary border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-primary-foreground/50 text-sm mb-14 leading-relaxed">
            Whether you're launching a new initiative, conducting research, or
            developing a strategic plan — we'd love to hear about your work.
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

export default About;
