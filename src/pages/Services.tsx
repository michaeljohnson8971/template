import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
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
  { step: "01", title: "Discovery", description: "Stakeholder interviews and institutional landscape analysis to understand context, relationships, and opportunity." },
  { step: "02", title: "Research", description: "Market analysis and economic ecosystem mapping to build an evidence base for strategic decisions." },
  { step: "03", title: "Strategy Development", description: "Actionable recommendations and program design grounded in research findings and stakeholder priorities." },
  { step: "04", title: "Implementation", description: "Partnership development and program launch support to move from strategy to sustained action." },
];

const engagementModels = [
  { title: "Project-Based", description: "Defined scope engagements — from strategic plans and market studies to program design. Ideal for initiatives with clear deliverables and timelines." },
  { title: "Retainer", description: "Ongoing advisory support for organizations managing multiple economic development priorities. Flexible hours with consistent availability." },
  { title: "Advisory", description: "Focused strategic guidance on specific questions — initiative design, partnership positioning, or policy framing. Efficient and targeted." },
];

const clientTypes = [
  { category: "Local Governments", items: ["Planning departments", "Economic development departments", "Mayoral initiatives"] },
  { category: "Community Development Organizations", items: ["Community development corporations", "Neighborhood organizations", "Housing organizations"] },
  { category: "Philanthropy & Research Institutions", items: ["Foundations", "Universities", "Policy institutes"] },
  { category: "Private Sector & Development", items: ["Real estate developers", "Economic impact analysts", "Incentives navigation"] },
];

const inquiryTypes = ["General Inquiry", "Project Scoping", "Speaking Request", "Media", "Other"];
const referralSources = ["Referral", "LinkedIn", "Web Search", "Conference", "Other"];

const Services = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", organization: "", inquiryType: "", referralSource: "", message: "",
  });

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const POWER_AUTOMATE_WEBHOOK_URL = "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!POWER_AUTOMATE_WEBHOOK_URL) {
      console.warn("Power Automate webhook URL is not configured. Form data:", formData);
      toast.success("Thank you for reaching out. We typically respond within 5–7 business days.");
      setFormData({ name: "", email: "", phone: "", organization: "", inquiryType: "", referralSource: "", message: "" });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(POWER_AUTOMATE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          organization: formData.organization,
          inquiryType: formData.inquiryType || null,
          referralSource: formData.referralSource || null,
          message: formData.message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      toast.success("Thank you for reaching out. We typically respond within 5–7 business days.");
      setFormData({ name: "", email: "", phone: "", organization: "", inquiryType: "", referralSource: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-background border border-border text-sm text-foreground focus:outline-none focus:border-foreground transition-colors font-body";
  const labelClasses = "block text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-2";

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="py-20 lg:py-32 lg:pr-16">
              <p className="mono-label mb-6">Work & Services</p>
              <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">
                How We Work
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                We provide strategic consulting across economic development, community investment, small business ecosystems, and policy — from initial research through implementation support.
              </p>
            </div>
            <div className="hidden lg:block relative">
              <img
                src={communityImg}
                alt="Community planning session"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 lg:py-32 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="mono-label mb-4">Consulting Services</p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-16">
            Service Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service, i) => (
              <div key={service.title} className="border-t border-border pt-8">
                <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-lg text-foreground mt-4 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm flex items-start gap-3">
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

      {/* Engagement Models */}
      <section className="py-24 lg:py-32 bg-secondary border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="mono-label mb-4 text-center">Engagement</p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground text-center mb-6">
            How We Can Work Together
          </h2>
          <p className="text-muted-foreground text-sm text-center max-w-lg mx-auto mb-16">
            Every engagement is tailored to the scope and needs of the project. Here are three common models.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {engagementModels.map((model, i) => (
              <div key={model.title} className="border-t border-border pt-8 text-center">
                <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-lg text-foreground mt-4 mb-4">{model.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 lg:py-32 bg-primary border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/40 mb-4">Approach</p>
          <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-16">
            Methodology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {methodology.map((step) => (
              <div key={step.step} className="border-t border-primary-foreground/15 pt-8">
                <span className="font-mono text-3xl font-bold text-primary-foreground/15">
                  {step.step}
                </span>
                <h3 className="font-display text-lg text-primary-foreground mt-4 mb-3">{step.title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="mono-label mb-4">Who We Work With</p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-16">
            Client Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {clientTypes.map((group, i) => (
              <div key={group.category} className="border-t border-border pt-8">
                <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-base text-foreground mt-4 mb-4">{group.category}</h3>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-4 h-px bg-foreground/30 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              See Clients' Projects
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="mono-label mb-6 text-center">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
              Every Project Starts With a Conversation
            </h2>
            <p className="text-muted-foreground text-center text-sm mb-2">
              Send a message to start a conversation, or reach out directly at{" "}
              <a href="mailto:hello@dablstudio.com" className="text-foreground hover:underline underline-offset-4">
                hello@dablstudio.com
              </a>
            </p>
            <p className="text-muted-foreground/50 text-xs text-center mb-16 font-mono tracking-wide">
              We typically respond within 1–2 business days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>Full Name *</label>
                  <input id="name" type="text" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>Email *</label>
                  <input id="email" type="email" required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className={labelClasses}>Organization / Entity *</label>
                  <input id="organization" type="text" required maxLength={200} value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone (optional)</label>
                  <input id="phone" type="tel" maxLength={20} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClasses} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiryType" className={labelClasses}>Inquiry Type</label>
                  <select id="inquiryType" value={formData.inquiryType} onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })} className={inputClasses}>
                    <option value="">Select one...</option>
                    {inquiryTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="referralSource" className={labelClasses}>How did you hear about us?</label>
                  <select id="referralSource" value={formData.referralSource} onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })} className={inputClasses}>
                    <option value="">Select one...</option>
                    {referralSources.map((source) => (<option key={source} value={source}>{source}</option>))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className={labelClasses}>Message / Project Description *</label>
                <textarea id="message" required rows={5} maxLength={2000} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-mono text-xs uppercase tracking-[0.2em] bg-foreground text-background px-10 py-4 hover:bg-muted-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
