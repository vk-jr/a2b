import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { LinkedInIcon } from '../components/icons/SocialIcons';

// Simple SVG Icons for the "What We Do" section
const ServiceIcon: React.FC<{ path: string }> = ({ path }) => (
  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-secondary rounded-lg flex items-center justify-center text-accent mr-6">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  </div>
);

const AboutPage: React.FC = () => {
  const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );

  const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center py-16 bg-slate-100 dark:bg-secondary">
      <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-light">{title}</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-medium max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
  
  const WHAT_WE_DO_ITEMS = [
      {
          title: "Workflow Automation",
          description: "We design, build, and deploy end-to-end automations that connect your tools and systems.",
          iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      },
      {
          title: "Custom Integration",
          description: "We develop custom APIs and integrations to connect your apps and business data seamlessly.",
          iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
          title: "Automation Consulting",
          description: "We help teams identify manual bottlenecks and design efficient no-code or low-code workflows.",
          iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z"
      },
      {
          title: "Dashboard & Data Solutions",
          description: "We build dashboards that visualize your automated processes and analytics in real-time.",
          iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      },
      {
          title: "Ongoing Support",
          description: "We provide continuous optimization, monitoring, and workflow maintenance.",
          iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      }
  ];

  return (
    <div>
      <PageHeader 
        title="About A2B Agency" 
        subtitle="Your strategic partner for automation, efficiency, and scalable growth."
      />

      {/* Section 1: About A2B */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-light">Your Partner in Automation and Growth</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-medium">
                    A2B Agency is an automation and workflow solutions company dedicated to helping businesses streamline operations using powerful tools like n8n, Zapier, Make, and custom APIs. 
                </p>
                 <p className="mt-4 text-slate-600 dark:text-medium">
                    Our mission is to simplify complex workflows, save valuable time, and scale businesses through intelligent automation. We work with startups, SaaS companies, and enterprises to optimize productivity and unlock their full potential.
                </p>
                <div className="mt-8 p-6 bg-slate-50 dark:bg-secondary rounded-lg border border-slate-200 dark:border-gray-700">
                    <h3 className="font-semibold text-slate-800 dark:text-light">Our Philosophy</h3>
                    <p className="mt-2 text-slate-600 dark:text-medium italic">“Automation is not just about saving time — it’s about unlocking human creativity.”</p>
                </div>
            </div>
            <div>
                 <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-light mb-6">Our Core Values</h3>
                 <div className="grid grid-cols-2 gap-4">
                    {['Innovation', 'Efficiency', 'Reliability', 'Transparency'].map(value => (
                        <div key={value} className="bg-white dark:bg-primary p-4 rounded-lg border border-slate-200 dark:border-gray-700">
                            <h4 className="font-bold text-accent">{value}</h4>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </Section>

      {/* Section 2: Meet Our Team */}
      <Section className="bg-slate-50 dark:bg-secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-light">Meet Our Team</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-medium">Our success is driven by a dedicated team of automation architects, engineers, and designers passionate about solving complex problems.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="text-center bg-white dark:bg-primary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto" />
                    <h3 className="mt-4 text-xl font-bold font-display text-slate-900 dark:text-light">{member.name}</h3>
                    <p className="text-accent font-semibold">{member.role}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-medium h-24">{member.bio}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-slate-500 dark:text-medium hover:text-accent">
                        <LinkedInIcon />
                    </a>
                </div>
            ))}
        </div>
      </Section>

      {/* Section 3: What We Do */}
      <Section>
         <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-light">What We Do</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-medium">Our core services are designed to connect your systems, streamline processes, and provide actionable insights.</p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
            {WHAT_WE_DO_ITEMS.map((item) => (
                <div key={item.title} className="flex items-start bg-slate-50 dark:bg-secondary p-6 rounded-lg">
                    <ServiceIcon path={item.iconPath} />
                    <div>
                        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-light">{item.title}</h3>
                        <p className="mt-1 text-slate-600 dark:text-medium">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-800 dark:text-light font-semibold">
                “From startups to enterprises, A2B empowers teams to work smarter. We help businesses focus on creativity while automation handles the routine.”
            </p>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;