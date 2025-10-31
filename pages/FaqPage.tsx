
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 dark:border-gray-700">
            <button
                className="w-full text-left py-6 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-slate-900 dark:text-light">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            {isOpen && (
                <div className="pb-6 pr-12">
                    <p className="text-slate-600 dark:text-medium">{answer}</p>
                </div>
            )}
        </div>
    );
}

const FaqPage: React.FC = () => {
    
    const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
        <div className="text-center py-16 bg-slate-100 dark:bg-secondary">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-light">{title}</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-medium max-w-3xl mx-auto">{subtitle}</p>
        </div>
    );

    return (
        <div>
            <PageHeader 
                title="Frequently Asked Questions" 
                subtitle="Find answers to common questions about our services, process, and partnership models." 
            />
            <section className="py-20 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    {FAQS.map(category => (
                        <div key={category.category} className="mb-12">
                            <h2 className="text-2xl font-bold font-display text-accent mb-6">{category.category}</h2>
                            <div className="space-y-4">
                                {category.questions.map(item => (
                                    <FaqItem key={item.question} question={item.question} answer={item.answer} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FaqPage;