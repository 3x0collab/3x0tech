import { Target, Eye, Award, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

import teamCollab from '@/assets/team-collaboration.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We don\'t follow trends — we study problems and build the smartest solution, even if it hasn\'t been done before.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great software comes from great communication. We work closely with every client to make sure we\'re solving the right problem.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We test thoroughly, write clean code, and don\'t cut corners. If it has our name on it, it has to be solid.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'No hidden fees, no vague timelines. You see exactly what we\'re building, when it\'ll be ready, and what it costs.',
    },
  ];

  const team = [
    {
      name: 'Tunde Oluwamo',
      role: 'Chief Executive Officer',
      description: 'Sets the vision and drives the company forward. Focused on building a tech company that Africa can be proud of.',
    },
    {
      name: 'Ismail Adedapo',
      role: 'Co-Founder & Lead Developer',
      description: 'The technical brain behind our products. Writes the code, designs the architecture, and makes sure everything works.',
    },
    {
      name: 'Iyanu Pamilerin Johnson',
      role: 'Head of Marketing',
      description: 'Gets the word out and brings clients in. Combines creative thinking with data to grow the 3x0Tech Solutions Ltd brand.',
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "3x0Tech Solutions Ltd",
      "description": "Nigerian tech startup building intelligent, affordable, and scalable software solutions.",
      "foundingDate": "2024",
      "founders": [
        { "@type": "Person", "name": "Tunde Oluwamo", "jobTitle": "CEO" },
        { "@type": "Person", "name": "Ismail Adedapo", "jobTitle": "Co-Founder & Lead Developer" },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About 3x0Tech Solutions Ltd — Software Developers in Nigeria | Our Team"
        description="Meet the team behind 3x0Tech Solutions. We're Nigerian developers building websites, AI chatbots, mobile apps, and business software. Based in Ogun State, serving businesses across Africa."
        keywords="about 3x0tech solutions, Nigerian software developers, tech team Nigeria, software company Ogun State, who builds PYE AI chatbot, Orbityx HR developers, Nigerian tech startup, software engineers Lagos, developers in Sango Ota, African tech company, young developers Nigeria"
        structuredData={structuredData}
      />

      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-gradient" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              The team behind
              <br />
              <span className="gradient-text">3x0Tech Solutions Ltd</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We’re a small, focused team of developers, designers, and strategists based in Nigeria.
              We build software that helps businesses run better — and we’re just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* ──── Mission ──── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
            <div>
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                What we’re here to do
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started 3x0Tech Solutions Ltd because we saw a gap: businesses in Nigeria and across Africa
                  needed good software, but most options were either too expensive, too generic, or built
                  by people who didn’t understand the local market.
                </p>
                <p>
                  So we decided to build it ourselves. We create custom platforms, AI-powered tools,
                  and ready-to-use products that are designed specifically for how African businesses
                  actually operate.
                </p>
                <p>
                  Every project we take on starts with understanding your problem deeply — then
                  engineering the simplest, most effective solution. No bloat, no buzzwords, just
                  technology that does what it’s supposed to do.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-[80px]" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <img
                  src={teamCollab}
                  alt="3x0Tech Solutions Ltd team working together"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Overlay stats */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                  <div className="flex justify-around text-white">
                    {[
                      { val: '2024', label: 'Founded' },
                      { val: '5+', label: 'Products' },
                      { val: '50+', label: 'Projects' },
                      { val: '100%', label: 'Satisfaction' },
                    ].map((s, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold">{s.val}</div>
                        <div className="text-xs text-white/70">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Values ──── */}
      <section className="py-24 bg-slate-50/80">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16 reveal">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How we work
            </h2>
            <p className="text-lg text-muted-foreground">
              Four principles guide everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal" style={{ transitionDelay: '100ms' }}>
            {values.map((value, i) => (
              <Card key={i} className="card-hover border-border/50 bg-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto p-2.5 rounded-xl bg-primary/8 w-fit mb-5">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Team ──── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16 reveal">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              The people behind the code
            </h2>
            <p className="text-lg text-muted-foreground">
              A small team, big ambitions, and a track record of delivering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
            {team.map((member, i) => (
              <Card key={i} className="card-hover border-border/50 bg-card text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/8 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold gradient-text">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-24 bg-slate-50/80">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 reveal">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to work together?
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we’ll get back to you within 24 hours.
            </p>
            <NavLink to="/contact">
              <Button size="lg" className="rounded-xl font-semibold gap-2 px-8 h-12 text-base">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
