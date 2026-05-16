import { ArrowRight, Zap, Users, Calculator, Code, Smartphone, Shield, Globe, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

import heroBanner from '@/assets/hero-banner.jpg';
import teamCollab from '@/assets/team-collaboration.jpg';
import pyeImg from '@/assets/pye-ai-support.jpg';
import orbityxImg from '@/assets/orbityx-hr.jpg';
import quicksumImg from '@/assets/quicksum-accounting.jpg';
import stepCodeImg from '@/assets/step-code-learning.jpg';
import campusCafeImg from '@/assets/campuscafe-printing.jpg';

const Home = () => {
  const solutions = [
    {
      title: 'PYE',
      subtitle: 'AI Customer Platform',
      description: 'Your always-on customer service agent. PYE handles queries, guides visitors, and closes tickets — so your team can focus on what matters.',
      icon: Zap,
      tag: 'AI',
      image: pyeImg,
    },
    {
      title: 'Orbityx',
      subtitle: 'HR Management Suite',
      description: 'Hire faster, manage smarter. From job posting to payroll, Orbityx puts your entire HR workflow in one clean dashboard.',
      icon: Users,
      tag: 'HR',
      image: orbityxImg,
    },
    {
      title: 'Quicksum',
      subtitle: 'Financial Management',
      description: 'Stop chasing receipts. Quicksum automates your bookkeeping, generates reports on demand, and keeps your numbers audit-ready.',
      icon: Calculator,
      tag: 'Finance',
      image: quicksumImg,
    },
    {
      title: 'Step-Code',
      subtitle: 'Developer Education',
      description: 'Learn to code by actually building. Step-Code takes you from beginner to job-ready with real projects and industry certifications.',
      icon: Code,
      tag: 'EdTech',
      image: stepCodeImg,
    },
    {
      title: 'CampusCafe',
      subtitle: 'Print & Delivery',
      description: 'Upload your document, pick a nearby agent, and get it printed and delivered. Campus printing, finally made simple.',
      icon: Smartphone,
      tag: 'Logistics',
      image: campusCafeImg,
    },
  ];

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Fast, responsive websites and web apps that look great and convert visitors into customers. Built with the latest tech.',
    },
    {
      icon: Cpu,
      title: 'Software Engineering',
      description: 'Custom platforms built to handle your business logic, integrations, and growth — without breaking at scale.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android apps your users will actually love. Native performance, clean design, smooth experience.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'We find the vulnerabilities before hackers do. Security audits, penetration testing, and compliance — all covered.',
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Turn your raw data into clear decisions. Custom dashboards, automated reports, and insights you can act on.',
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Add intelligence to your existing systems. Chatbots, automation, recommendations — AI that actually works for your business.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '5+', label: 'Products Built' },
  ];

  const siteUrl = 'https://3x0collab.github.io/3x0tech';

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "3x0Tech Solutions Ltd",
        "alternateName": ["3x0Tech Solutions", "3x0Tech", "3x0 Tech"],
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png`,
          "width": 512,
          "height": 512
        },
        "description": "We build websites, mobile apps, AI chatbots, HR software, and accounting tools for businesses in Nigeria and Africa. 50+ projects delivered.",
        "foundingDate": "2024",
        "areaServed": ["Nigeria", "Africa", "Global"],
        "knowsAbout": ["Software Development", "Web Development", "AI Chatbots", "Mobile Apps", "HR Software", "Accounting Software", "E-commerce"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Number 22, Charity Avenue",
          "addressLocality": "Sango Ota",
          "addressRegion": "Ogun State",
          "postalCode": "110001",
          "addressCountry": "NG"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+234-816-443-5695",
            "email": "info@3x0techsolutionsltd.com.ng",
            "contactType": "Customer Service",
            "availableLanguage": "English",
            "areaServed": "NG"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/p/3x0Tech-Solutions-100089180495872/",
          "https://x.com/PrinceAdedapo6",
          "https://ng.linkedin.com/in/ismail-adedapo-7b84a7190"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Development Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Custom websites and web applications for Nigerian businesses" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development", "description": "iOS and Android apps for businesses" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Chatbot Development", "description": "Smart AI chatbots for customer support" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development", "description": "Bespoke software platforms for business operations" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity Services", "description": "Security audits and penetration testing" } }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "name": "3x0Tech Solutions Ltd",
        "url": siteUrl,
        "publisher": { "@id": `${siteUrl}/#organization` },
        "description": "Custom software, AI chatbots, websites, and mobile apps for businesses in Nigeria",
        "inLanguage": "en"
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        "url": siteUrl,
        "name": "3x0Tech Solutions Ltd — Custom Software, AI Chatbots & Web Development Nigeria",
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "about": { "@id": `${siteUrl}/#organization` },
        "description": "We build websites, mobile apps, AI chatbots, HR software, and accounting tools for businesses in Nigeria and Africa.",
        "inLanguage": "en"
      },
      {
        "@type": "LocalBusiness",
        "name": "3x0Tech Solutions Ltd",
        "image": `${siteUrl}/lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png`,
        "url": siteUrl,
        "telephone": "+234-816-443-5695",
        "email": "info@3x0techsolutionsltd.com.ng",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Number 22, Charity Avenue",
          "addressLocality": "Sango Ota",
          "addressRegion": "Ogun State",
          "postalCode": "110001",
          "addressCountry": "NG"
        },
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="3x0Tech Solutions Ltd — Custom Software, AI Chatbots & Web Development Nigeria"
        description="Need a website, mobile app, or AI chatbot for your business? 3x0Tech Solutions builds custom software for Nigerian businesses. 50+ projects delivered. Free consultation."
        keywords="software developer Nigeria, web developer Lagos, AI chatbot for business Nigeria, hire software developer Nigeria, build website Nigeria, mobile app development Nigeria, custom software company Lagos, best tech company Nigeria, affordable web design Nigeria, business automation software Nigeria, PYE AI assistant, Orbityx HR software, Quicksum accounting app, Step-Code learn to code, website designer near me Nigeria, freelance developer Nigeria, startup software Nigeria, ecommerce website Nigeria, SaaS development Africa"
        structuredData={structuredData}
      />

      {/* ──── Hero Section ──── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background image blended into bg */}
        <div className="absolute inset-0">
          <img src={heroBanner} alt="" className="w-full h-full object-cover opacity-18 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up">
              We build software
              <br />
              <span className="gradient-text">that works</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              3x0Tech Solutions Ltd helps businesses across Africa grow faster with custom software,
              smart AI tools, and products that solve real problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <NavLink to="/contact">
                <Button size="lg" className="rounded-xl font-semibold gap-2 px-8 h-12 text-base">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </NavLink>
              <NavLink to="/solutions">
                <Button variant="outline" size="lg" className="rounded-xl font-semibold px-8 h-12 text-base">
                  View Solutions
                </Button>
              </NavLink>
            </div>

            {/* Stats bar */}
            <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12 px-8 py-5 rounded-2xl bg-white shadow-sm border border-border/60">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Services Section ──── */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16 reveal">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">What we do</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What we can do for you
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you need a website, a full platform, or an AI chatbot — we handle it from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {services.map((service, i) => (
              <Card key={i} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="p-2.5 rounded-xl bg-primary/8 w-fit mb-5 group-hover:bg-primary/12 transition-colors">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Products Section ──── */}
      <section className="py-24 md:py-32 bg-slate-50/80 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16 reveal">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Products we've built
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just build for clients — we build our own products too. Here are five platforms
              we've created to solve everyday business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal" style={{ transitionDelay: '100ms' }}>
            {solutions.map((solution, i) => (
              <Card key={i} className="card-hover border-border/50 bg-card group relative overflow-hidden">
                {/* Product image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-primary/8 group-hover:bg-primary/12 transition-colors">
                      <solution.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                      {solution.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{solution.title}</h3>
                  <p className="text-sm font-medium text-primary/80 mb-3">{solution.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{solution.description}</p>

                  <NavLink to="/solutions" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline group/link">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Why Choose Us ──── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
            <div>
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Why 3x0Tech Solutions Ltd</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Why businesses choose us
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We're not just developers — we're partners who understand your market,
                your challenges, and what it takes to build technology that actually delivers.
              </p>

              <div className="space-y-5">
                {[
                  { title: 'Grows with you', desc: 'Our systems are designed to handle 10 users or 10 million — no rebuild needed.' },
                  { title: 'Secure from day one', desc: 'We build security into every layer, not as an afterthought.' },
                  { title: 'We know the market', desc: 'Based in Nigeria, built for Africa — we understand local business realities.' },
                  { title: 'Full service', desc: 'From first meeting to launch to ongoing support — we’re with you the whole way.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-[80px]" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <img
                  src={teamCollab}
                  alt="3x0Tech Solutions Ltd team collaborating"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Overlay stats strip */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                  <div className="flex justify-around text-white">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-white/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── CTA Section ──── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 reveal">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Got a project
              <br />
              <span className="gradient-text">in mind?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Tell us what you're building and we'll show you how we can help.
              No pressure, just a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button size="lg" className="rounded-xl font-semibold gap-2 px-8 h-12 text-base">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </NavLink>
              <NavLink to="/about">
                <Button variant="outline" size="lg" className="rounded-xl font-semibold px-8 h-12 text-base">
                  About Our Company
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
