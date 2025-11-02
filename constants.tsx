import React from 'react';
import type { NavLink, Service, CaseStudy, Differentiator, Testimonial, PricingTier, TeamMember, ProcessStep, FAQ } from './types';

// Icons will be imported from their respective component files
import { WorkflowIcon, DataSystemsIcon, AIAgentsIcon, ProcessOptimizationIcon, StrategyIcon, IntegrationIcon } from './components/icons/ServiceIcons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About Us', path: '/about' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

export const CLIENT_LOGOS = [
    { name: 'InnovateCorp', src: 'https://via.placeholder.com/150x50/FFFFFF/0D0E25?text=InnovateCorp' },
    { name: 'QuantumLeap', src: 'https://via.placeholder.com/150x50/FFFFFF/0D0E25?text=QuantumLeap' },
    { name: 'DataWeave', src: 'https://via.placeholder.com/150x50/FFFFFF/0D0E25?text=DataWeave' },
    { name: 'Synergy Inc.', src: 'https://via.placeholder.com/150x50/FFFFFF/0D0E25?text=Synergy+Inc.' },
    { name: 'Apex Solutions', src: 'https://via.placeholder.com/150x50/FFFFFF/0D0E25?text=Apex+Solutions' },
];

export const SERVICES: Service[] = [
  { icon: <WorkflowIcon />, name: 'Workflow Automation', description: 'Streamline your operations by automating repetitive tasks and complex workflows, freeing up your team to focus on high-value activities.', link: '/solutions/workflow-automation' },
  { icon: <DataSystemsIcon />, name: 'Intelligent Data Systems', description: 'Transform your data into a strategic asset with AI-powered systems that provide actionable insights and drive decision-making.', link: '/solutions/data-systems' },
  { icon: <AIAgentsIcon />, name: 'Custom AI Agents', description: 'Deploy bespoke AI agents to handle customer service, sales outreach, and internal support, operating 24/7 with perfect consistency.', link: '/solutions/ai-agents' },
  { icon: <ProcessOptimizationIcon />, name: 'Process Optimization', description: 'Utilize AI to analyze and re-engineer your business processes, identifying bottlenecks and unlocking new levels of efficiency.', link: '/solutions/process-optimization' },
  { icon: <StrategyIcon />, name: 'AI Strategy & Consulting', description: 'Develop a clear, ROI-driven AI roadmap tailored to your business goals with our expert guidance and strategic planning.', link: '/solutions/ai-strategy' },
  { icon: <IntegrationIcon />, name: 'System Integration', description: 'Seamlessly connect your existing software stack with powerful new AI capabilities, ensuring data flows smoothly across your organization.', link: '/solutions/integration' },
];

export const CASE_STUDIES: CaseStudy[] = [
  { industry: 'E-commerce', challenge: 'High volume of customer support tickets leading to slow response times.', solution: 'Deployed a custom AI agent to handle 80% of inbound queries instantly.', results: '45% reduction in support costs, 95% customer satisfaction.', image: 'https://picsum.photos/seed/casestudy1/600/400' },
  { industry: 'Healthcare', challenge: 'Manual data entry from patient forms was slow and error-prone.', solution: 'Implemented an intelligent data system to automate data extraction and validation.', results: '98% data accuracy, 800 hours saved per month.', image: 'https://picsum.photos/seed/casestudy2/600/400' },
  { industry: 'Logistics', challenge: 'Inefficient routing and scheduling leading to high fuel costs.', solution: 'Developed a process optimization model to create dynamic, AI-powered routes.', results: '15% reduction in fuel costs, 20% faster delivery times.', image: 'https://picsum.photos/seed/casestudy3/600/400' },
];

export const DIFFERENTIATORS: Differentiator[] = [
  { title: 'Get More Output From Less', description: 'Our AI systems identify hidden patterns and turn overlooked inputs into profit-driving outputs.' },
  { title: 'Scale Without Increasing Headcount', description: 'Grow your operations and revenue without adding to your payroll through intelligent automation.' },
  { title: 'Build Fast Without Breaking Systems', description: 'Launch AI solutions in weeks with our modular architecture and rapid, iterative deployment cycles.' },
  { title: 'Deploy Securely With Confidence', description: 'We implement enterprise-grade security with API controls, access management, and compliance checks.' },
  { title: 'Long-Term Partnership & Support', description: 'We provide ongoing optimization, maintenance, and strategic guidance to ensure your success.' },
  { title: 'Dedicated Expert Team', description: 'Our team of AI engineers, data scientists, and consultants are 100% focused on your success.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'A2B transformed our operations. We\'re now handling 3x the volume with the same team size. Their partnership has been a game-changer for our scalability.', name: 'Jane Doe', title: 'COO', company: 'InnovateCorp', image: 'https://picsum.photos/seed/person1/100/100' },
  { quote: 'The custom AI agent they built for us is incredible. It\'s like having a perfect employee who works 24/7. Our customer satisfaction has never been higher.', name: 'John Smith', title: 'Head of Customer Experience', company: 'QuantumLeap', image: 'https://picsum.photos/seed/person2/100/100' },
];

export const PRICING_TIERS: PricingTier[] = [
    { 
        name: 'Business Partner', 
        price: '$25,000/month',
        label: 'POPULAR',
        description: 'Ongoing development with strategy, custom automation, and optimization.',
        features: [
            'Dedicated AI Engineer',
            'VIP support queue',
            'Documentation and user guides',
            'Live debugging & solution management',
            'Client portal access',
            'Monthly strategy sessions'
        ],
        cta: 'Book Discovery Call',
        ctaPath: '/contact',
        primary: true,
    },
    { 
        name: 'Enterprise Partner', 
        price: 'Custom Pricing',
        description: 'Large-scale operations with advanced infrastructure and compliance needs.',
        features: [
            'Everything in Business Partner',
            'Multiple dedicated engineers',
            'Priority deployment',
            'Custom SLA agreements',
            'Advanced security & compliance',
            'Quarterly business reviews'
        ],
        cta: 'Contact Sales',
        ctaPath: '/contact',
    }
];

export const TEAM_MEMBERS: TeamMember[] = [
    { name: 'Rahul V K', role: 'Founder & Automation Architect', bio: 'Expert in designing scalable automation solutions and large-scale system architecture.', image: 'https://picsum.photos/seed/team1/400/400', linkedin: '#' },
    { name: 'Aman Xavier', role: 'Technical Lead & Automation Architect', bio: 'Leads our development team, specializing in complex integrations and robust workflow design.', image: 'https://picsum.photos/seed/team2/400/400', linkedin: '#' },
    { name: 'Dany Stephan', role: 'Project Manager & Automation Architect', bio: 'Ensures seamless project delivery, aligning strategy with execution from discovery to deployment.', image: 'https://picsum.photos/seed/team3/400/400', linkedin: '#' },
    { name: 'Akhil M S', role: 'UI/UX Designer', bio: 'Designs intuitive and powerful interfaces for our custom dashboards and automation tools.', image: 'https://picsum.photos/seed/team4/400/400', linkedin: '#' },
    { name: 'Parthiv', role: 'Automation Architect', bio: 'A master of no-code platforms, crafting efficient and reliable automation solutions for diverse client needs.', image: 'https://picsum.photos/seed/team5/400/400', linkedin: '#' },
];

export const PROCESS_STEPS: ProcessStep[] = [
    { step: 1, title: 'Discovery & Scoping', description: 'We conduct a deep dive into your business processes, data landscape, and stakeholder journeys to identify the highest-impact automation opportunities.' },
    { step: 2, title: 'Strategy & Planning', description: 'We design an ROI-backed solution with a clear technical architecture, defining timelines and milestones for rapid and effective implementation.' },
    { step: 3, title: 'Development & Implementation', description: 'Using rapid sprint cycles and a modular approach, we build and validate your AI solution, ensuring it integrates seamlessly with your existing systems.' },
    { step: 4, title: 'Deployment & Training', description: 'We manage the secure deployment of the system and provide comprehensive training and documentation to empower your team.' },
    { step: 5, title: 'Optimization & Support', description: 'Our partnership continues post-launch with performance monitoring, ongoing improvements, and strategic consultation to maximize long-term value.' },
];

export const FAQS: FAQ[] = [
    {
        category: 'Getting Started',
        questions: [
            { question: 'What is the onboarding process like?', answer: 'Our onboarding starts with a deep-dive discovery call, followed by a detailed scoping session. We then create a strategic plan and present it for your approval before any development begins.' },
            { question: 'How long does a typical project take?', answer: 'Timelines vary, but thanks to our modular approach, we can often deploy an initial version of a solution within 4-6 weeks, followed by iterative improvements.' },
        ],
    },
    {
        category: 'Services & Solutions',
        questions: [
            { question: 'Can you integrate with our existing software?', answer: 'Absolutely. System integration is a core part of our service. We work with your existing CRM, ERP, and other software to ensure seamless data flow.' },
            { question: 'Are your solutions customizable?', answer: 'Yes, 100%. We do not use templates. Every solution is custom-built to address your specific business challenges and goals.' },
        ],
    },
    {
        category: 'Pricing & Contracts',
        questions: [
            { question: 'What is included in the monthly partnership?', answer: 'Our partnership model includes a dedicated engineer, strategic planning, development, maintenance, and ongoing optimization. It\'s a comprehensive service designed for continuous improvement.' },
            { question: 'Is there a minimum contract length?', answer: 'We typically work with partners on a 6 or 12-month basis to ensure we have enough time to deliver significant, compounding ROI.' },
        ],
    },
];