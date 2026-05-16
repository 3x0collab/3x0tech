import { Zap, Users, Calculator, Code, Smartphone, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

import pyeImg from '@/assets/pye-ai-support.jpg';
import orbityxImg from '@/assets/orbityx-hr.jpg';
import quicksumImg from '@/assets/quicksum-accounting.jpg';
import stepCodeImg from '@/assets/step-code-learning.jpg';
import campusCafeImg from '@/assets/campuscafe-printing.jpg';

const Solutions = () => {
  const solutions = [
    {
      title: 'PYE',
      subtitle: 'AI-Powered Customer Experience Platform',
      description: 'PYE is a smart AI chatbot that lives on your website and handles customer questions 24/7. It answers queries instantly, guides visitors to what they need, and frees up your team to focus on bigger things.',
      icon: Zap,
      tag: 'AI',
      image: pyeImg,
      features: [
        '24/7 Automated Customer Support',
        'Real-time Visitor Interaction',
        'Smart Question Answering',
        'User Guidance & Navigation',
        'Customer Engagement Analytics',
        'Easy Website Integration',
        'Multi-language Support',
        'Custom Branding Options',
      ],
      benefits: ['Reduce support costs by up to 60%', 'Sub-second response times', 'Scale without adding headcount', 'Consistent quality 24/7'],
    },
    {
      title: 'Orbityx',
      subtitle: 'Enterprise HR Management Suite',
      description: 'Orbityx handles recruitment, onboarding, leave management, attendance, and performance tracking all in one place. No more spreadsheets, no more paperwork — just a clean system that runs your HR.',
      icon: Users,
      tag: 'HR',
      image: orbityxImg,
      features: [
        'Automated Recruitment Pipeline',
        'Digital Employee Onboarding',
        'Leave Management System',
        'Attendance Tracking',
        'Performance Management',
        'Employee Self-Service Portal',
        'Payroll Integration',
        'Compliance Management',
      ],
      benefits: ['Eliminate manual HR processes', 'Reduce time-to-hire by 40%', 'Improve employee experience', 'Ensure regulatory compliance'],
    },
    {
      title: 'Quicksum',
      subtitle: 'Intelligent Financial Management',
      description: 'Quicksum takes the headache out of bookkeeping. Create invoices, track expenses, generate financial reports, and stay tax-ready — all from one simple cloud-based dashboard.',
      icon: Calculator,
      tag: 'Finance',
      image: quicksumImg,
      features: [
        'Invoice Generation & Tracking',
        'Expense Management',
        'Financial Report Generation',
        'Receipt Management',
        'Tax Calculation',
        'Bank Reconciliation',
        'Multi-currency Support',
        'Cloud Data Backup',
      ],
      benefits: ['Save 10+ hours per week on bookkeeping', 'Real-time cash flow visibility', 'Automated tax calculations', 'Audit-ready reports'],
    },
    {
      title: 'Step-Code',
      subtitle: 'Developer Education Ecosystem',
      description: 'Step-Code teaches people to code by having them build real projects from day one. Interactive lessons, a built-in code editor, progress tracking, and certifications that actually mean something.',
      icon: Code,
      tag: 'EdTech',
      image: stepCodeImg,
      features: [
        'Interactive Coding Lessons',
        'Hands-on Project Building',
        'Progress Tracking',
        'Certification Programs',
        'Built-in Code Editor',
        'Community Support',
        'Multiple Languages',
        'Beginner to Advanced Tracks',
      ],
      benefits: ['Learn by building real projects', 'Earn recognized certificates', 'Join a developer community', 'Career-ready skills'],
    },
    {
      title: 'CampusCafe',
      subtitle: 'On-Demand Print & Delivery',
      description: 'Need a document printed on campus? Upload it, pick a nearby print agent, and get it delivered. CampusCafe connects students with printing services the way food apps connect you with restaurants.',
      icon: Smartphone,
      tag: 'Logistics',
      image: campusCafeImg,
      features: [
        'Document Upload & Processing',
        'Nearby Agent Discovery',
        'Real-time Order Tracking',
        'Direct & Third-party Delivery',
        'Agent Registration Portal',
        'University Partnerships',
        'Mobile Payment Integration',
        'Quality Assurance System',
      ],
      benefits: ['Instant document access', 'Convenient campus delivery', 'Scalable print network', 'Revenue opportunity for agents'],
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "3x0Tech Software Solutions",
    "description": "Enterprise software solutions for African businesses",
    "itemListElement": solutions.map((solution, index) => ({
      "@type": "SoftwareApplication",
      "position": index + 1,
      "name": solution.title,
      "description": solution.description,
      "applicationCategory": "BusinessApplication",
    })),
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Software Solutions — PYE AI, Orbityx HR, Quicksum | 3x0Tech"
        description="Discover enterprise software solutions by 3x0Tech: PYE AI support, Orbityx HR, Quicksum accounting, Step-Code learning, and CampusCafe printing platform."
        keywords="enterprise software Nigeria, AI customer support, HR management software, accounting software Africa, learning platform"
        structuredData={structuredData}
      />

      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-gradient" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Our Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Software that solves
              <br />
              <span className="gradient-text">real problems</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Five products, each built to tackle a specific challenge businesses and individuals
              face every day. Here’s what we’ve built and why.
            </p>
          </div>
        </div>
      </section>

      {/* ──── Solutions List ──── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32 reveal">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Content side */}
                <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/8">
                      <solution.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                      {solution.tag}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                    {solution.title}
                  </h2>
                  <p className="text-base font-medium text-primary/80 mb-4">{solution.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="p-0.5 rounded-full bg-primary/10">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <NavLink to="/contact">
                    <Button className="rounded-xl font-semibold gap-2">
                      Get Started with {solution.title}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </NavLink>
                </div>

                {/* Product screenshot + Features */}
                <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 mb-6">
                    <img
                      src={solution.image}
                      alt={`${solution.title} — ${solution.subtitle}`}
                      className="w-full h-64 md:h-80 object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <Card className="border-border/50 bg-card">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-5">
                        Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/50 border border-border/50"
                          >
                            <Check className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-24 bg-slate-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 reveal">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Like what you see?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you want to use one of our products or need something custom-built,
              we’d love to chat about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button size="lg" className="rounded-xl font-semibold gap-2 px-8 h-12">
                  Contact Our Team
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </NavLink>
              <NavLink to="/about">
                <Button variant="outline" size="lg" className="rounded-xl font-semibold px-8 h-12">
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

export default Solutions;
