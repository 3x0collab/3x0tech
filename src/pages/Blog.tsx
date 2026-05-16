import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How AI Is Changing the Way African Businesses Operate',
      excerpt: 'From customer service to logistics, AI is showing up everywhere. Here’s what it actually looks like on the ground for SMEs.',
      author: 'Tunde Oluwamo',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'AI & Technology',
      featured: true,
    },
    {
      id: 2,
      title: 'Going Digital as a Nigerian SME: What Actually Works',
      excerpt: 'Forget the buzzwords. Here’s a practical, no-fluff guide to digitising your business without blowing your budget.',
      author: 'Ismail Adedapo',
      date: '2024-01-10',
      readTime: '7 min',
      category: 'Business Strategy',
      featured: false,
    },
    {
      id: 3,
      title: 'Your Customers Shouldn’t Have to Wait — Automate Support',
      excerpt: 'AI chatbots aren’t just for big companies anymore. Here’s how tools like PYE make 24/7 support affordable.',
      author: 'Tunde Oluwamo',
      date: '2024-01-05',
      readTime: '4 min',
      category: 'Customer Service',
      featured: false,
    },
    {
      id: 4,
      title: 'HR Doesn’t Have to Be a Headache',
      excerpt: 'How switching from spreadsheets to a proper HR system saved one of our clients 20 hours a week.',
      author: 'Ismail Adedapo',
      date: '2023-12-28',
      readTime: '6 min',
      category: 'Human Resources',
      featured: false,
    },
    {
      id: 5,
      title: 'Picking Accounting Software? Read This First',
      excerpt: 'We break down what to look for, what to avoid, and why most small businesses pick the wrong tool.',
      author: 'Tunde Oluwamo',
      date: '2023-12-20',
      readTime: '8 min',
      category: 'Finance',
      featured: false,
    },
    {
      id: 6,
      title: 'Why We Built a Coding Platform (and What We Learned)',
      excerpt: 'The story behind Step-Code and how hands-on learning is helping a new generation of African developers.',
      author: 'Ismail Adedapo',
      date: '2023-12-15',
      readTime: '5 min',
      category: 'Education',
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "3x0Tech Solutions Blog",
    "description": "Insights on software development, technology trends, and business automation in Africa",
    "url": "https://3x0techsolutionsltd.com.ng/blog",
    "publisher": { "@type": "Organization", "name": "3x0Tech Solutions Ltd" },
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Blog — Tech Insights & Industry Trends | 3x0Tech Solutions"
        description="Insights on enterprise software, AI innovation, and digital transformation from Nigeria's leading tech experts."
        keywords="technology blog Nigeria, software development insights, AI trends Africa"
        structuredData={structuredData}
      />

      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-gradient" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Blog</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              From our
              <br />
              <span className="gradient-text">team to yours</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Thoughts on technology, business, and building software that matters —
              written by the people who do it every day.
            </p>
          </div>
        </div>
      </section>

      {/* ──── Featured ──── */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4 reveal">
            <Card className="border-border/50 bg-card overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
                  Featured
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredPost.title}</h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* ──── Posts Grid ──── */}
      <section className="py-16">
          <div className="container mx-auto px-4 reveal">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="card-hover border-border/50 bg-card group">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4 text-xs border-border/50 bg-muted/50">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
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
              Got a project in mind?
            </h2>
            <p className="text-lg text-muted-foreground">
              We’d love to hear what you’re building. Let’s talk.
            </p>
            <NavLink to="/contact">
              <Button size="lg" className="rounded-xl font-semibold gap-2 px-8 h-12">
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

export default Blog;
