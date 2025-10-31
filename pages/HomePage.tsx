
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, CLIENT_LOGOS, CASE_STUDIES, DIFFERENTIATORS, TESTIMONIALS, PRICING_TIERS } from '../constants';

const HomePage: React.FC = () => {

  const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <section className={`py-20 sm:py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );

  const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; }> = ({ children, subtitle }) => (
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-light">
          {children}
        </h2>
        {subtitle && <p className="mt-4 text-lg text-medium">{subtitle}</p>}
      </div>
  );
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animation-gradient-bg bg-[200%_200%] animate-gradient-bg"></div>
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tighter text-light leading-tight">
                    Scale Your Business Without Increasing Headcount
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-medium max-w-2xl mx-auto">
                    We are your strategic AI partner, helping you automate operations, maximize ROI, and transform your business through custom-built intelligent systems.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contact" className="w-full sm:w-auto bg-accent text-primary font-bold py-3 px-8 rounded-md hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
                        Book a Discovery Call
                    </Link>
                    <Link to="/case-studies" className="w-full sm:w-auto bg-secondary/50 text-light font-medium py-3 px-8 rounded-md hover:bg-secondary transition-all duration-300">
                        View Case Studies
                    </Link>
                </div>
            </div>
            <div className="mt-20 text-center">
                <p className="text-medium tracking-wider">TRUSTED BY CATEGORY LEADERS</p>
                <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                    {CLIENT_LOGOS.map(logo => (
                        <img key={logo.name} src={logo.src} alt={logo.name} className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Solutions Section */}
      <Section>
        <SectionTitle subtitle="From workflow automation to custom AI agents, we provide end-to-end solutions to solve your most complex challenges.">
            Everything You Need to Automate, Scale, and Grow
        </SectionTitle>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
                <div key={index} className="bg-secondary p-8 rounded-xl border border-gray-700/50 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1">
                    {service.icon}
                    <h3 className="text-xl font-bold font-display text-light">{service.name}</h3>
                    <p className="mt-2 text-medium">{service.description}</p>
                    <Link to={service.link} className="mt-4 inline-block font-semibold text-accent hover:text-accent-hover">
                        Learn More &rarr;
                    </Link>
                </div>
            ))}
        </div>
      </Section>
      
      {/* Case Studies Section */}
      <Section className="bg-secondary">
        <SectionTitle subtitle="See how we've helped businesses like yours achieve remarkable results with custom AI implementations.">
          Real Businesses. Real Automation ROI.
        </SectionTitle>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, index) => (
                <div key={index} className="bg-primary rounded-lg overflow-hidden group">
                    <img src={study.image} alt={study.challenge} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                    <div className="p-6">
                        <p className="text-sm font-semibold text-accent">{study.industry}</p>
                        <h3 className="mt-2 text-lg font-bold text-light">{study.challenge}</h3>
                        <p className="mt-2 text-medium text-sm">{study.solution}</p>
                        <p className="mt-4 font-semibold text-light">{study.results}</p>
                    </div>
                </div>
            ))}
        </div>
         <div className="mt-12 text-center">
            <Link to="/case-studies" className="bg-accent text-primary font-bold py-3 px-8 rounded-md hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
                View All Case Studies
            </Link>
        </div>
      </Section>

      {/* Differentiators Section */}
      <Section>
        <SectionTitle>What Makes Our Partnership Different</SectionTitle>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIATORS.map((item, index) => (
                <div key={index} className="p-6">
                    <h3 className="text-xl font-bold font-display text-light">{item.title}</h3>
                    <p className="mt-2 text-medium">{item.description}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="bg-primary p-8 rounded-xl border border-gray-700/50">
                    <p className="text-lg text-light italic">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-6">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full"/>
                        <div className="ml-4">
                            <p className="font-bold text-light">{testimonial.name}</p>
                            <p className="text-medium">{testimonial.title}, {testimonial.company}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

       {/* Pricing Section */}
      <Section>
        <SectionTitle subtitle="Choose the partnership model that aligns with your growth ambitions.">
            Ready to Scale?
        </SectionTitle>
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRICING_TIERS.map((tier) => (
                <div key={tier.name} className={`rounded-xl p-8 flex flex-col ${tier.primary ? 'bg-secondary border-2 border-accent' : 'bg-secondary border border-gray-700'}`}>
                    {tier.label && <div className="text-center mb-4"><span className="bg-accent text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">{tier.label}</span></div>}
                    <h3 className="text-2xl font-bold font-display text-center text-light">{tier.name}</h3>
                    <p className="text-4xl font-bold font-display text-center text-light my-4">{tier.price}</p>
                    <p className="text-medium text-center h-16">{tier.description}</p>
                    <ul className="mt-6 space-y-4 text-medium flex-grow">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                                <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Link to={tier.ctaPath} className={`w-full mt-8 text-center font-bold py-3 px-8 rounded-md transition-all duration-300 ${tier.primary ? 'bg-accent text-primary hover:bg-accent-hover' : 'bg-primary text-light hover:bg-gray-700'}`}>
                        {tier.cta}
                    </Link>
                </div>
            ))}
        </div>
      </Section>

      {/* Final CTA Section */}
       <Section className="!py-20 sm:!py-24">
        <div className="bg-gradient-to-r from-accent/80 to-teal-400/80 rounded-xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
                    Ready to Transform Your Business with AI?
                </h2>
                <p className="mt-4 text-lg text-primary/80 max-w-2xl mx-auto">
                    Let's discuss how our custom AI solutions can help you automate processes, drive efficiency, and unlock new growth opportunities.
                </p>
                <div className="mt-8">
                    <Link to="/contact" className="bg-primary text-light font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                        Schedule Free Consultation
                    </Link>
                </div>
            </div>
        </div>
       </Section>

    </div>
  );
};

export default HomePage;
