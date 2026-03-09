import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, MapPin } from "lucide-react";
import communityImg from "@/assets/community-engagement.jpg";
import profileImg from "@/assets/about-profile.jpg";

const credentials = [
{
  icon: GraduationCap,
  title: "Education",
  items: [
  "Master of Public Administration — Economic Development & Urban Policy",
  "Bachelor of Arts — Political Science & Economics"]

},
{
  icon: Award,
  title: "Professional Background",
  items: [
  "Economic development strategy & research",
  "Community investment initiative management",
  "Public-nonprofit-institutional partnerships",
  "Small business ecosystem analysis"]

},
{
  icon: MapPin,
  title: "Sector Experience",
  items: [
  "Municipal planning & economic development departments",
  "Community development organizations",
  "Philanthropy & research institutions",
  "University-based policy centers"]

}];


const values = [
{
  title: "Evidence-Based Strategy",
  description:
  "Every recommendation is grounded in rigorous research and data analysis — not assumptions. We believe sound strategy starts with understanding the landscape."
},
{
  title: "Community-Centered Approach",
  description:
  "Lasting economic development requires the voices and priorities of community stakeholders at every stage, from research design through implementation."
},
{
  title: "Collaborative Partnerships",
  description:
  "The most impactful initiatives are built across sectors. We bring together government, philanthropy, nonprofits, and institutions to achieve shared goals."
},
{
  title: "Equitable Outcomes",
  description:
  "We design strategies intentionally focused on expanding opportunity in historically underserved communities and strengthening neighborhood economies."
}];


const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-5">
              About
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
              The Persons Behind the Work
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              DABL Studio was founded to bring strategic clarity and
              research-driven insight to economic development challenges — with a
              deep commitment to community impact and equitable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-3/4 aspect-[4/5] rounded-xl shadow-elevated bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Image Placeholder</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-5">
                Founder
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Mission-Driven Economic Development
              </h2>
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
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
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-5 text-center">
            Background
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16">
            Credentials & Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {credentials.map((cred) =>
            <div
              key={cred.title}
              className="bg-background p-8 rounded-2xl shadow-card">
              
                <div className="w-14 h-14 rounded-2xl bg-terracotta/10 flex items-center justify-center mb-6">
                  <cred.icon
                  className="text-terracotta"
                  size={24}
                  strokeWidth={1.5} />
                
                </div>
                <h3 className="font-display text-lg text-foreground mb-5">
                  {cred.title}
                </h3>
                <ul className="space-y-3">
                  {cred.items.map((item) =>
                <li
                  key={item}
                  className="text-muted-foreground text-sm flex items-start gap-3">
                  
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta/50 mt-1.5 shrink-0" />
                      {item}
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Professional Overview */}
      <section className="py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-5">About</p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight mb-8">
               DABL Studio
            </h2>
            <p className="text-muted-foreground leading-[1.8] text-lg mb-6">
              DABL Studio is a mission-driven economic development consultancy with deep experience managing multi-sector initiatives at the intersection of community investment, public policy, and research. Our work focuses on designing strategies that translate economic development analysis into actionable programs that strengthen neighborhood economies and expand opportunity.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-lg mb-10">
              With experience spanning public, nonprofit, and institutional settings, DABL Studio builds partnerships between government agencies, philanthropic organizations, and community stakeholders to develop inclusive economic growth strategies. Our approach is grounded in rigorous research, participatory engagement, and a commitment to equitable outcomes.
            </p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-28 lg:py-36 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-12 leading-relaxed">
            Whether you're launching a new initiative, conducting research, or
            developing a strategic plan — we'd love to hear about your work.
          </p>
          <Link
            to="/services#contact"
            className="inline-flex items-center gap-2.5 bg-terracotta text-accent-foreground px-10 py-4 rounded-full font-medium hover:bg-terracotta-light transition-all shadow-elevated">
            
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>);

};

export default About;