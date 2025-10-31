import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { LinkedInIcon, TwitterIcon, YouTubeIcon, GitHubIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-secondary text-slate-600 dark:text-medium border-t border-slate-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-display font-bold text-slate-900 dark:text-light">
              A2B<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-sm">Your strategic AI partner for long-term growth. We help businesses automate, scale, and grow through custom AI implementations.</p>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="hover:text-accent transition-colors"><LinkedInIcon /></a>
                <a href="#" className="hover:text-accent transition-colors"><TwitterIcon /></a>
                <a href="#" className="hover:text-accent transition-colors"><YouTubeIcon /></a>
                <a href="#" className="hover:text-accent transition-colors"><GitHubIcon /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 dark:text-light tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/solutions" className="hover:text-accent transition-colors">Workflow Automation</Link></li>
              <li><Link to="/solutions" className="hover:text-accent transition-colors">AI Agents</Link></li>
              <li><Link to="/solutions" className="hover:text-accent transition-colors">Data Systems</Link></li>
              <li><Link to="/solutions" className="hover:text-accent transition-colors">AI Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-light tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.filter(l => l.name !== 'Solutions').map(link => (
                  <li key={link.name}><Link to={link.path} className="hover:text-accent transition-colors">{link.name}</Link></li>
              ))}
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 dark:text-light tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4">Get the latest AI trends and insights from our experts.</p>
            <form className="mt-4 flex flex-col sm:flex-row">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md bg-white dark:bg-primary border border-slate-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" />
              <button type="submit" className="mt-2 sm:mt-0 sm:ml-2 bg-accent text-primary font-bold py-2 px-4 rounded-md hover:bg-accent-hover transition-colors">Subscribe</button>
            </form>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} A2B AI Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;