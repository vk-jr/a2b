import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import type { CaseStudy } from '../types';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { LinkedInIcon, YouTubeIcon } from '../components/icons/SocialIcons';

const Sidebar: React.FC = () => {
    const sidebarLinks = [
        { name: 'Introduction', href: '#' },
        { name: 'Technology Stack', href: '#' },
        { name: 'Our Process', href: '#' },
        { name: 'Resources', href: '/resources' },
    ];

    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-slate-50 dark:bg-secondary border-r border-slate-200 dark:border-gray-800 flex flex-col p-8">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-light">Documentation</h2>
            <nav className="mt-8 flex-grow">
                <ul className="space-y-3">
                    {sidebarLinks.map(link => (
                        <li key={link.name}>
                            <a href={link.href} className="text-slate-600 dark:text-medium hover:text-slate-900 dark:hover:text-light transition-colors">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Link to="/contact" className="text-slate-600 dark:text-medium hover:text-slate-900 dark:hover:text-light transition-colors">
                            Contact / Book a Call
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="space-y-4">
                <div className="flex space-x-4">
                    <a href="#" className="text-slate-500 dark:text-medium hover:text-accent transition-colors"><YouTubeIcon /></a>
                    <a href="#" className="text-slate-500 dark:text-medium hover:text-accent transition-colors"><LinkedInIcon /></a>
                </div>
                 <Link to="/contact" className="w-full block text-center bg-accent text-primary font-bold py-2 px-4 rounded-md hover:bg-accent-hover transition-all duration-300">
                    Book a Call
                </Link>
                <div className="flex justify-center">
                    <ThemeToggleButton />
                </div>
            </div>
        </aside>
    );
};

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
    <div className="bg-white dark:bg-secondary rounded-lg border border-slate-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <p className="text-sm font-semibold text-medium dark:text-gray-400">{study.client}</p>
        <h3 className="mt-2 text-xl font-bold font-display text-slate-900 dark:text-light">{study.title}</h3>
        <p className="mt-1 text-accent font-semibold">{study.subtitle}</p>
        <p className="mt-4 text-slate-600 dark:text-medium">{study.description}</p>
        <a href={study.link} className="inline-block mt-6 font-semibold text-accent hover:text-accent-hover transition-colors">
            Read Full Case Study &rarr;
        </a>
    </div>
);

const CaseStudiesPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-primary">
            <Sidebar />
            <main className="ml-64 py-20 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Page Header */}
                    <div className="max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-light">
                            🏷️ Customer Project Showcase
                        </h1>
                        <p className="mt-4 text-lg text-slate-600 dark:text-medium">
                            Explore how A2B Agency has helped startups and enterprises revolutionize their operations through automation. Each case study highlights the client’s challenge, our approach, and the measurable impact delivered.
                        </p>
                    </div>

                    {/* Case Study Cards Grid */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {CASE_STUDIES.map((study, index) => (
                            <CaseStudyCard key={index} study={study} />
                        ))}
                    </div>

                    {/* Closing Section */}
                    <div className="mt-24 py-16 bg-slate-50 dark:bg-secondary rounded-lg text-center">
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-light">Our Automation Impact</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-medium">
                            Since inception, A2B has delivered 250+ automation projects spanning marketing, SaaS, and operations. We specialize in creating scalable workflows that save time, reduce costs, and boost team productivity.
                        </p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-md hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
                                🚀 Start Your Automation Journey &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CaseStudiesPage;