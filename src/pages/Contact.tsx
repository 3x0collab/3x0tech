import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/SEOHead';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DOMPurify from 'dompurify';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s.-]+$/, 'Name can only contain letters, spaces, dots, and hyphens'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long'),
  phone: z.string()
    .regex(/^[\d\s\-+()]*$/, 'Phone number contains invalid characters')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmission;
    const rateLimitMs = 30 * 1000;
    if (timeSinceLastSubmission < rateLimitMs) {
      const remainingTime = Math.ceil((rateLimitMs - timeSinceLastSubmission) / 1000);
      toast({
        title: 'Please Wait',
        description: `Please wait ${remainingTime} seconds before submitting again.`,
        variant: 'destructive',
      });
      return false;
    }
    return true;
  };

  const sanitizeData = (data: ContactFormData): ContactFormData => ({
    name: DOMPurify.sanitize(data.name.trim()),
    email: DOMPurify.sanitize(data.email.trim().toLowerCase()),
    phone: data.phone ? DOMPurify.sanitize(data.phone.trim()) : '',
    message: DOMPurify.sanitize(data.message.trim()),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!checkRateLimit()) return;
    try {
      const sanitizedData = sanitizeData(data);
      setLastSubmission(Date.now());
      const { error } = await supabase.functions.invoke('send-contact-email', { body: sanitizedData });
      if (error) throw error;
      toast({ title: 'Message Sent!', description: "We'll get back to you within 24 hours." });
      form.reset();
    } catch {
      toast({
        title: 'Error Sending Message',
        description: 'Please try again or email us at info@3x0techsolutionsltd.com.ng',
        variant: 'destructive',
      });
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', detail: 'info@3x0techsolutionsltd.com.ng', sub: 'We reply within 24 hours' },
    { icon: Phone, title: 'Phone', detail: '+234 816 443 5695', sub: 'Mon–Fri, 9 AM – 6 PM WAT' },
    { icon: MapPin, title: 'Office', detail: '22 Charity Avenue, Sango Ota', sub: 'Ogun State, Nigeria' },
    { icon: Clock, title: 'Hours', detail: 'Monday – Friday', sub: '9:00 AM – 6:00 PM WAT' },
  ];

  const faqs = [
    { q: 'How long does a typical project take?', a: 'Most projects take 2–8 weeks depending on complexity. We’ll give you a clear timeline before we start and keep you updated every step of the way.' },
    { q: 'What kind of support do you offer?', a: 'Full support — onboarding, training, documentation, and ongoing technical help. We don’t disappear after launch.' },
    { q: 'Can you customize solutions for my business?', a: 'Absolutely. Every project is tailored to your specific needs, industry, and workflow. We don’t do one-size-fits-all.' },
    { q: 'What does it cost?', a: 'It depends on the project scope. We offer project-based pricing and subscription models, and we’re always upfront about costs — no surprises.' },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "3x0Tech Solutions Ltd",
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+234-816-443-5695",
            "email": "info@3x0techsolutionsltd.com.ng",
            "contactType": "Customer Service",
            "availableLanguage": "English",
            "hoursAvailable": "Mo-Fr 09:00-18:00",
          }],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Number 22, Charity Avenue",
            "addressLocality": "Sango Ota",
            "addressRegion": "Ogun State",
            "addressCountry": "NG",
          },
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact 3x0Tech Solutions — Get a Free Quote | Software Development Nigeria"
        description="Need a website or software built? Contact 3x0Tech Solutions for a free consultation. We reply within 24 hours. Call +234-816-443-5695 or email us."
        keywords="contact software developer Nigeria, hire web developer Nigeria, get a quote website Nigeria, free software consultation Nigeria, software development quote Lagos, contact 3x0tech, phone number 3x0tech solutions, email software company Nigeria, book a developer Nigeria"
        structuredData={structuredData}
      />

      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-gradient" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Get in touch
              <br />
              <span className="gradient-text">with our team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind, a question about our products, or just want to say hello?
              Drop us a message — we typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ──── Form + Info ──── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 reveal">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-1">Send us a message</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Tell us what you need and we’ll get back to you quickly.
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="h-11" {...field} maxLength={100} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Phone (optional)</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+234..." className="h-11" {...field} maxLength={20} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@company.com" className="h-11" {...field} maxLength={254} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project..."
                                rows={5}
                                className="resize-none"
                                {...field}
                                maxLength={5000}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full rounded-xl h-11 font-semibold gap-2"
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="h-4 w-4" />
                        {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-2">
                <h2 className="text-xl font-bold mb-1">Contact info</h2>
                <p className="text-sm text-muted-foreground">Other ways to reach us.</p>
              </div>

              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card">
                  <div className="p-2.5 rounded-lg bg-primary/8 shrink-0">
                    <info.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{info.title}</p>
                    <p className="text-sm text-foreground">{info.detail}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section className="py-24 bg-slate-50/80">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16 reveal">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Common questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
            {faqs.map((faq, i) => (
              <Card key={i} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
