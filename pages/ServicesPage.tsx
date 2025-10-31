
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
    
    const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
        <div className="text-center py-16 bg-slate-100 dark:bg-secondary">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-light">{title}</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-medium max-w-3xl mx-auto">{subtitle}</p>
        </div>
    );

    return (
        <div>
            <PageHeader 
                title="Our AI Solutions" 
                subtitle="We offer a comprehensive suite of AI services designed to address your specific challenges and drive tangible business outcomes." 
            />

            <section className="py-20 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service) => (
                             <div key={service.name} className="bg-white dark:bg-secondary p-8 rounded-xl border border-slate-200 dark:border-gray-700/50 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                                {service.icon}
                                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-light">{service.name}</h3>
                                <p className="mt-2 text-slate-600 dark:text-medium flex-grow">{service.description}</p>
                                <Link to={service.link} className="mt-4 inline-block font-semibold text-accent hover:text-accent-hover">
                                    View Details &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Detailed Service Section (Example) */}
            <section className="py-20 sm:py-24 bg-slate-50 dark:bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-light">Custom AI Agent Development</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
                        <div>
                             <p className="text-lg text-slate-600 dark:text-medium">
                                Go beyond simple chatbots. We build sophisticated AI agents capable of handling complex, multi-turn conversations and executing tasks across your software ecosystem. Whether for customer service, sales, or internal operations, our agents act as tireless, intelligent members of your team.
                            </p>
                            <h4 className="font-bold text-slate-800 dark:text-light mt-6 mb-2">Key Features:</h4>
                            <ul className="list-disc list-inside text-slate-600 dark:text-medium space-y-2">
                                <li>24/7 autonomous operation</li>
                                <li>Integration with CRM, ERP, and APIs</li>
                                <li>Natural Language Understanding (NLU)</li>
                                <li>Automated task execution and follow-up</li>
                            </ul>
                            <div className="mt-8">
                                <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-md hover:bg-accent-hover transition-all duration-300">
                                    Discuss Your Project
                                </Link>
                            </div>
                        </div>
                        <div>
                             <img src="https://picsum.photos/seed/service/800/600" alt="AI Agent Interface" className="rounded-lg shadow-lg"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;