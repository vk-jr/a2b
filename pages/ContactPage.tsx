import React from 'react';

const ContactPage: React.FC = () => {
  const inputBaseClasses = "block w-full rounded-lg border-0 py-2.5 px-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-light shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-150";

  const Label: React.FC<{ htmlFor: string; children: React.ReactNode; required?: boolean; optional?: boolean }> = ({ htmlFor, children, required, optional }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-slate-800 dark:text-medium mb-2">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
      {optional && <span className="text-slate-500 ml-1">(Optional)</span>}
    </label>
  );

  return (
    <div className="bg-white dark:bg-primary py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-light">Get Started with A2B</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-medium">
            Speak to an expert and start a plan for your project.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#F9FAFF] dark:bg-secondary/30 p-8 sm:p-12 rounded-2xl shadow-lg border border-slate-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-light mb-8">Let's get to know you</h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <Label htmlFor="first-name" required>First Name</Label>
                  <input type="text" id="first-name" name="first-name" defaultValue="Jane" className={inputBaseClasses} />
                </div>
                <div>
                  <Label htmlFor="last-name" required>Last Name</Label>
                  <input type="text" id="last-name" name="last-name" defaultValue="Doe" className={inputBaseClasses} />
                </div>
              </div>

              <div>
                <Label htmlFor="email" required>Email</Label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" className={inputBaseClasses} />
              </div>

              <div>
                <Label htmlFor="role" required>Your Role within Organization</Label>
                <input type="text" id="role" name="role" placeholder="e.g., CTO, Project Manager, etc." className={inputBaseClasses} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <Label htmlFor="company-name" required>Company Name</Label>
                  <input type="text" id="company-name" name="company-name" placeholder="Your company name" className={inputBaseClasses} />
                </div>
                <div>
                  <Label htmlFor="website" optional>Website</Label>
                  <input type="url" id="website" name="website" placeholder="https://yourcompany.com" className={inputBaseClasses} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <Label htmlFor="phone-number" optional>Phone Number</Label>
                  <input type="tel" id="phone-number" name="phone-number" placeholder="+1 (555) 555-5555" className={inputBaseClasses} />
                </div>
                <div>
                  <Label htmlFor="company-size" required>Company Size</Label>
                  <select id="company-size" name="company-size" required className={`${inputBaseClasses} appearance-none bg-no-repeat`} style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}>
                    <option value="" disabled selected>Select company size</option>
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-1000 employees</option>
                    <option>1000+ employees</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <Label htmlFor="annual-revenue" optional>Annual Revenue</Label>
                  <select id="annual-revenue" name="annual-revenue" className={`${inputBaseClasses} appearance-none bg-no-repeat`} style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}>
                    <option value="" disabled selected>Select annual revenue</option>
                    <option>&lt; $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M - $25M</option>
                    <option>$25M - $100M</option>
                    <option>$100M+</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="project-budget" required>Project Budget</Label>
                  <select id="project-budget" name="project-budget" required className={`${inputBaseClasses} appearance-none bg-no-repeat`} style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}>
                    <option value="" disabled selected>Select project budget</option>
                    <option>&lt; $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="how-can-we-help" required>How Can We Help?</Label>
                <textarea id="how-can-we-help" name="how-can-we-help" rows={5} placeholder="Please describe your project needs and how we can assist you" required className={inputBaseClasses}></textarea>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="email-opt-in" name="email-opt-in" type="checkbox" className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-opt-in" className="text-slate-600 dark:text-medium">Opt into email list for exclusive offerings and bonus AI content</label>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="sms-opt-in" name="sms-opt-in" type="checkbox" className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-800"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="sms-opt-in" className="text-slate-600 dark:text-medium">Opt into SMS and text messages</label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-[#0B57D0] hover:bg-[#0A4FBB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B57D0] dark:focus:ring-offset-primary transition-all duration-200">
                  Submit
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
