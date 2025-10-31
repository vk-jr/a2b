
import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
    
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-light">Let's Build Together</h1>
            <p className="mt-4 text-lg text-medium">
              Have a project in mind or just want to learn more about how AI can transform your business? We'd love to hear from you.
            </p>
            
            <div className="mt-12 space-y-8">
                <div>
                    <h3 className="text-xl font-bold font-display text-light">Schedule a Call</h3>
                    <p className="mt-2 text-medium">The fastest way to get started. Book a free, no-obligation discovery call with one of our AI strategists.</p>
                    <a href="#" className="mt-4 inline-block bg-accent text-primary font-bold py-3 px-8 rounded-md hover:bg-accent-hover transition-all">
                        Book via Calendly
                    </a>
                </div>
                <div>
                    <h3 className="text-xl font-bold font-display text-light">Email Us</h3>
                    <p className="mt-2 text-medium">For general inquiries or partnership opportunities.</p>
                    <a href="mailto:hello@a2b.ai" className="mt-2 text-accent text-lg font-semibold hover:text-accent-hover">hello@a2b.ai</a>
                </div>
                 <div>
                    <h3 className="text-xl font-bold font-display text-light">Frequently Asked Questions</h3>
                    <p className="mt-2 text-medium">Find quick answers to common questions about our process, services, and pricing.</p>
                    <Link to="/faq" className="mt-2 text-accent text-lg font-semibold hover:text-accent-hover">Visit our FAQ page &rarr;</Link>
                </div>
            </div>
          </div>
          
          {/* Right Side: Form */}
          <div className="bg-primary p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold font-display text-light mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-medium">Name</label>
                  <input type="text" id="name" required className="mt-1 block w-full bg-secondary border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-medium">Email</label>
                  <input type="email" id="email" required className="mt-1 block w-full bg-secondary border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"/>
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-medium">Company Name</label>
                <input type="text" id="company" className="mt-1 block w-full bg-secondary border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"/>
              </div>

               <div>
                <label htmlFor="project-type" className="block text-sm font-medium text-medium">Project Type</label>
                <select id="project-type" className="mt-1 block w-full bg-secondary border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent">
                    <option>Workflow Automation</option>
                    <option>Custom AI Agent</option>
                    <option>Data System</option>
                    <option>AI Strategy</option>
                    <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-medium">Project Description</label>
                <textarea id="description" rows={4} className="mt-1 block w-full bg-secondary border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"></textarea>
              </div>

              <div>
                <button type="submit" className="w-full bg-accent text-primary font-bold py-3 px-6 rounded-md hover:bg-accent-hover transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
