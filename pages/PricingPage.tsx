import React from 'react';
import { Link } from 'react-router-dom';
import { PRICING_TIERS } from '../constants';

const PricingPage: React.FC = () => {

    const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
        <div className="text-center py-16 bg-slate-100 dark:bg-secondary">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-light">{title}</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-medium max-w-3xl mx-auto">{subtitle}</p>
        </div>
    );

    return (
        <div>
            <PageHeader
                title="Our Partnership Models"
                subtitle="Choose the partnership model that aligns with your growth ambitions."
            />
            <section className="py-20 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {PRICING_TIERS.map((tier) => (
                            <div key={tier.name} className={`rounded-xl p-8 flex flex-col ${tier.primary ? 'bg-slate-100 dark:bg-secondary border-2 border-accent' : 'bg-slate-100 dark:bg-secondary border border-slate-200 dark:border-gray-700'}`}>
                                {tier.label && <div className="text-center mb-4"><span className="bg-accent text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">{tier.label}</span></div>}
                                <h3 className="text-2xl font-bold font-display text-center text-slate-900 dark:text-light">{tier.name}</h3>
                                <p className="text-4xl font-bold font-display text-center text-slate-900 dark:text-light my-4">{tier.price}</p>
                                <p className="text-slate-600 dark:text-medium text-center h-16">{tier.description}</p>
                                <ul className="mt-6 space-y-4 text-slate-600 dark:text-medium flex-grow">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to={tier.ctaPath} className={`w-full mt-8 text-center font-bold py-3 px-8 rounded-md transition-all duration-300 ${tier.primary ? 'bg-accent text-primary hover:bg-accent-hover' : 'bg-white dark:bg-primary text-slate-900 dark:text-light hover:bg-slate-200 dark:hover:bg-gray-700'}`}>
                                    {tier.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
