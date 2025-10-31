
import React from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS } from '../constants';
import { LinkedInIcon } from '../components/icons/SocialIcons';

const AboutPage: React.FC = () => {
  const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );

  const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center py-16 bg-secondary">
      <h1 className="text-4xl sm:text-5xl font-display font-bold">{title}</h1>
      <p className="mt-4 text-lg text-medium max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
  
  return (
    <div>
      <PageHeader 
        title="About A2B AI" 
        subtitle="We're not just an AI agency; we're your strategic partner in leveraging artificial intelligence for sustainable business growth."
      />

      {/* Company Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-display font-bold text-light">Our Mission</h2>
                <p className="mt-4 text-lg text-medium">
                    To empower businesses of all sizes to automate operations, scale efficiently, and achieve unprecedented growth by building custom, ROI-driven AI solutions. We believe AI should be a compounding asset, not just a tool.
                </p>
                <h3 className="mt-8 text-2xl font-display font-bold text-light">Our Philosophy</h3>
                 <p className="mt-4 text-medium">
                    We were founded on the principle that true digital transformation comes from deep partnership, not one-off projects. We embed ourselves in your business to understand your unique challenges and build tailored solutions that deliver measurable results and long-term value.
                </p>
            </div>
            <div>
                <img src="https://picsum.photos/seed/about/800/600" alt="A2B office" className="rounded-lg shadow-2xl" />
            </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Meet The Team</h2>
          <p className="mt-4 text-lg text-medium">Our success is driven by a dedicated team of AI engineers, data scientists, and business strategists passionate about solving complex problems.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="text-center bg-primary p-6 rounded-lg">
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto" />
                    <h3 className="mt-4 text-xl font-bold font-display text-light">{member.name}</h3>
                    <p className="text-accent font-semibold">{member.role}</p>
                    <p className="mt-2 text-sm text-medium">{member.bio}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-medium hover:text-accent">
                        <LinkedInIcon />
                    </a>
                </div>
            ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
         <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">How We Work</h2>
            <p className="mt-4 text-lg text-medium">Our proven 5-step process ensures we deliver high-impact AI solutions that are perfectly aligned with your business objectives.</p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
            {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="flex flex-col sm:flex-row items-start my-8">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-primary font-bold font-display text-2xl mr-8 mb-4 sm:mb-0 flex-shrink-0">
                        {step.step}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-display text-light">{step.title}</h3>
                        <p className="mt-1 text-medium">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
