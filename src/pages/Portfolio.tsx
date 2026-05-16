import { useState } from 'react';
import { ExternalLink, Code, ShoppingCart, Shield, Zap, Users, Calculator, Smartphone, Building2, Database, Cloud, Cpu, ArrowRight, Globe, Lock, BarChart3, MessageSquare, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SEOHead from '@/components/SEOHead';
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      name: 'PYE — AI Customer Experience',
      description: 'An AI chatbot that sits on your website and handles customer questions around the clock — no waiting, no missed messages.',
      link: '/solutions',
      category: 'ai',
      tags: ['AI', 'Customer Support'],
      icon: MessageSquare,
      featured: true,
    },
    {
      name: 'RadarPro',
      description: 'A full banking management system built for real-time transactions, tight security, and large-scale financial operations.',
      link: 'https://radarprodemo.netlify.app/#/login',
      category: 'banking',
      tags: ['Banking', 'FinTech'],
      icon: Building2,
      featured: true,
    },
    {
      name: 'Orbityx HR Suite',
      description: 'Handles recruitment, onboarding, leave, attendance, and performance reviews — all from one dashboard.',
      link: '/solutions',
      category: 'enterprise',
      tags: ['HR', 'Enterprise'],
      icon: Users,
      featured: true,
    },
    {
      name: 'QuickSum Accounting',
      description: 'Invoicing, expense tracking, and financial reports in one clean cloud tool. Built for growing businesses.',
      link: '/solutions',
      category: 'fintech',
      tags: ['Accounting', 'FinTech'],
      icon: Calculator,
      featured: true,
    },
    {
      name: 'Iconcept4Pro',
      description: 'A project management tool with team collaboration, workflow automation, and progress reporting built in.',
      link: 'https://iconcept4prodemo.netlify.app/',
      category: 'enterprise',
      tags: ['Enterprise', 'SaaS'],
      icon: Cpu,
      featured: true,
    },
    {
      name: 'Step-Code Learning',
      description: 'Learn to code by building real things. Interactive lessons, a built-in editor, and certifications that matter.',
      link: '/solutions',
      category: 'edtech',
      tags: ['EdTech', 'E-Learning'],
      icon: GraduationCap,
      featured: true,
    },
    {
      name: 'Web3 Secured Wallet',
      description: 'A secure crypto wallet with multi-signature auth, strong encryption, and DeFi support.',
      link: 'https://web3-securedwallet.netlify.app/',
      category: 'blockchain',
      tags: ['Blockchain', 'Crypto'],
      icon: Shield,
      featured: true,
    },
    {
      name: 'CampusCafe Printing',
      description: 'Upload a document, pick a nearby print agent, get it delivered. Printing on campus, made easy.',
      link: '/solutions',
      category: 'mobile',
      tags: ['Mobile', 'Logistics'],
      icon: Smartphone,
      featured: false,
    },
    {
      name: 'Essentials by Salmons',
      description: 'A complete online store with inventory management, secure checkout, and sales analytics.',
      link: 'https://essentialsbysalmons.pythonanywhere.com/',
      category: 'ecommerce',
      tags: ['E-commerce', 'Retail'],
      icon: ShoppingCart,
      featured: false,
    },
    {
      name: 'F & F Global Ltd',
      description: 'Cross-border e-commerce platform supporting multiple currencies and international shipping.',
      link: 'https://fandfgloballtd.pythonanywhere.com/',
      category: 'ecommerce',
      tags: ['E-commerce', 'Global'],
      icon: Globe,
      featured: false,
    },
    {
      name: 'DataFrame Engine',
      description: 'A fast data processing engine for large datasets, with built-in support for machine learning workflows.',
      link: '#',
      category: 'data',
      tags: ['Data', 'Analytics'],
      icon: Database,
      featured: false,
    },
    {
      name: 'Enterprise Analytics Suite',
      description: 'Custom dashboards, automated reports, and predictive insights to help teams make smarter decisions.',
      link: '#',
      category: 'data',
      tags: ['Analytics', 'BI'],
      icon: BarChart3,
      featured: false,
    },
    {
      name: 'CloudSync Infrastructure',
      description: 'Cloud infrastructure management with auto-scaling, monitoring, and backup built in.',
      link: '#',
      category: 'cloud',
      tags: ['Cloud', 'DevOps'],
      icon: Cloud,
      featured: false,
    },
  ];

  const filtered =
    activeTab === 'all'
      ? projects
      : activeTab === 'featured'
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category === activeTab);

  const techStack = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Cpu },
    { name: 'Python', icon: Zap },
    { name: 'PostgreSQL', icon: Database },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Building2 },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Our Work — 50+ Software Projects Delivered | 3x0Tech Solutions Nigeria"
        description="See 50+ websites, apps, and software projects we've built for businesses in Nigeria. Banking systems, e-commerce stores, AI platforms, HR tools, and more."
        keywords="software portfolio Nigeria, websites built in Nigeria, mobile apps Nigeria, banking software Nigeria, ecommerce website examples, AI platform projects, HR software demo, web development projects Lagos, custom software examples Africa, RadarPro banking, Iconcept4Pro, Web3 wallet, Nigerian developer portfolio"
      />

      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-gradient" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Our work,
              <br />
              <span className="gradient-text">your proof</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              50+ projects shipped across banking, e-commerce, HR, AI, and more.
              Here’s a look at what we’ve delivered.
            </p>

            {/* Stats */}
            <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12 px-8 py-5 rounded-2xl bg-white shadow-sm border border-border/60 mt-4">
              {[
                { val: '50+', label: 'Projects' },
                { val: '40+', label: 'Clients' },
                { val: '100%', label: 'Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{s.val}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── Projects ──── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full reveal" onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Explore our work</h2>
                <p className="text-muted-foreground mt-1">Filter by category</p>
              </div>
              <TabsList className="flex flex-wrap gap-1 bg-muted/50 p-1 rounded-xl">
                {['all', 'featured', 'ai', 'banking', 'ecommerce', 'blockchain'].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="capitalize text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-4"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((project, i) => {
                  const Icon = project.icon;
                  return (
                    <Card key={i} className="card-hover border-border/50 bg-card group relative overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-xl bg-primary/8 group-hover:bg-primary/12 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex gap-1.5">
                            {project.tags.map((tag, j) => (
                              <Badge key={j} variant="outline" className="text-xs border-border/50 bg-muted/50">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {project.description}
                        </p>

                        {project.link !== '#' ? (
                          project.link.startsWith('http') ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm" className="w-full rounded-lg gap-2">
                                View Project
                                <ExternalLink className="h-3.5 w-3.5" />
                              </Button>
                            </a>
                          ) : (
                            <NavLink to={project.link}>
                              <Button variant="outline" size="sm" className="w-full rounded-lg gap-2">
                                View Details
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Button>
                            </NavLink>
                          )
                        ) : (
                          <Button variant="outline" size="sm" className="w-full rounded-lg gap-2" disabled>
                            <Lock className="h-3.5 w-3.5" />
                            Coming Soon
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">No projects in this category yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ──── Tech Stack ──── */}
      <section className="py-24 bg-slate-50/80">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Tech Stack</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Tools we use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
            {techStack.map((tech, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-card border border-border/50 card-hover">
                <tech.icon className="h-7 w-7 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 reveal">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Want to be next?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join 40+ businesses that trust us to build and ship quality software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button size="lg" className="rounded-xl font-semibold gap-2 px-8 h-12">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </NavLink>
              <NavLink to="/solutions">
                <Button variant="outline" size="lg" className="rounded-xl font-semibold px-8 h-12">
                  View Solutions
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
