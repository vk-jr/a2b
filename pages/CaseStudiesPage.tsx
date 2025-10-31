
import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudiesPage: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const industries = ['All', ...Array.from(new Set(CASE_STUDIES.map(cs => cs.industry)))];
    
    const filteredStudies = filter === 'All' ? CASE_STUDIES : CASE_STUDIES.filter(cs => cs.industry === filter);

    const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
        <div className="text-center py-16 bg-slate-100 dark:bg-secondary">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-light">{title}</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-medium max-w-3xl mx-auto">{subtitle}</p>
        </div>
    );

    return (
        <div>
            <PageHeader 
                title="Our Success Stories" 
                subtitle="Explore how we've delivered tangible results and significant ROI for our partners across various industries."
            />

            <section className="py-20 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center mb-12">
                        <div className="bg-slate-100 dark:bg-secondary p-2 rounded-lg flex space-x-2">
                            {industries.map(industry => (
                                <button
                                    key={industry}
                                    onClick={() => setFilter(industry)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${filter === industry ? 'bg-accent text-primary' : 'text-slate-600 dark:text-medium hover:bg-white dark:hover:bg-primary/50'}`}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredStudies.map((study, index) => (
                            <div key={index} className="bg-white dark:bg-secondary rounded-lg overflow-hidden group border border-slate-200 dark:border-gray-700/50 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl">
                                <img src={study.image} alt={study.challenge} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"/>
                                <div className="p-6">
                                    <p className="text-sm font-semibold text-accent">{study.industry}</p>
                                    <h3 className="mt-2 text-xl font-bold font-display text-slate-900 dark:text-light">{study.challenge}</h3>
                                    <p className="mt-2 text-slate-600 dark:text-medium">{study.solution}</p>
                                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-gray-700">
                                        <p className="font-semibold text-slate-800 dark:text-light text-lg">{study.results}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CaseStudiesPage;