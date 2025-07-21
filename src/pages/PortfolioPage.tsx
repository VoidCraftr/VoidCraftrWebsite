import React, { useState } from 'react';
import { ExternalLink, Star, Filter } from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Customer Support System',
      client: 'TechFlow Inc.',
      industry: 'Technology',
      category: 'ai-automation',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Automated customer support system that reduced response time by 75% and increased customer satisfaction.',
      challenge: 'High volume of repetitive customer queries causing delays in support responses',
      solution: 'Implemented AI chatbot with natural language processing and automated ticket routing',
      technologies: ['Python', 'OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL'],
      results: ['75% reduction in response time', '40% increase in customer satisfaction', '60% reduction in support costs'],
      testimonial: {
        text: "VoidCraftr's AI solution transformed our customer support. We now handle 3x more queries with the same team.",
        author: "Sarah Johnson, CTO"
      },
      rating: 5,
      duration: '3 months'
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      client: 'RetailMax',
      industry: 'Retail',
      category: 'web-mobile',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      description: 'Cross-platform mobile app that increased mobile sales by 150% and improved user engagement.',
      challenge: 'Poor mobile experience leading to high cart abandonment rates',
      solution: 'Built React Native app with streamlined checkout and personalized recommendations',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
      results: ['150% increase in mobile sales', '40% reduction in cart abandonment', '200% increase in user engagement'],
      testimonial: {
        text: "The mobile app exceeded our expectations. Our mobile conversion rates have never been higher.",
        author: "Mike Chen, CEO"
      },
      rating: 5,
      duration: '4 months'
    },
    {
      id: 3,
      title: 'Enterprise CRM Integration',
      client: 'GlobalCorp',
      industry: 'Manufacturing',
      category: 'enterprise',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      description: 'Integrated multiple legacy systems into a unified CRM platform, improving data accuracy by 95%.',
      challenge: 'Data scattered across multiple systems causing inefficiencies and errors',
      solution: 'Custom API integrations connecting Salesforce, ERP, and legacy databases',
      technologies: ['Salesforce', 'REST APIs', 'Python', 'PostgreSQL', 'Docker'],
      results: ['95% improvement in data accuracy', '50% reduction in manual data entry', '30% increase in sales productivity'],
      testimonial: {
        text: "Finally, all our systems talk to each other. This integration has been a game-changer for our sales team.",
        author: "Jennifer Davis, VP Sales"
      },
      rating: 5,
      duration: '2 months'
    },
    {
      id: 4,
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      category: 'web-mobile',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      description: 'Real-time analytics dashboard for healthcare providers to track patient outcomes and optimize care.',
      challenge: 'Manual reporting processes and lack of real-time insights into patient care metrics',
      solution: 'Built comprehensive analytics platform with real-time dashboards and predictive insights',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      results: ['Real-time reporting capabilities', '35% improvement in patient outcomes', '50% reduction in reporting time'],
      testimonial: {
        text: "This platform has revolutionized how we track and improve patient care. Absolutely incredible work.",
        author: "Dr. Robert Kim, Chief Medical Officer"
      },
      rating: 5,
      duration: '5 months'
    },
    {
      id: 5,
      title: 'Supply Chain Automation',
      client: 'LogisticsPro',
      industry: 'Logistics',
      category: 'ai-automation',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      description: 'AI-driven supply chain optimization that reduced costs by 30% and improved delivery times.',
      challenge: 'Inefficient supply chain management leading to high costs and delays',
      solution: 'Machine learning algorithms for demand forecasting and route optimization',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      results: ['30% reduction in logistics costs', '25% improvement in delivery times', '20% reduction in inventory waste'],
      testimonial: {
        text: "The AI optimization has transformed our operations. We're now more efficient than ever before.",
        author: "Lisa Wang, Operations Director"
      },
      rating: 5,
      duration: '4 months'
    },
    {
      id: 6,
      title: 'Financial Dashboard App',
      client: 'FinanceFirst',
      industry: 'Finance',
      category: 'web-mobile',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg',
      description: 'Comprehensive financial management platform with advanced analytics and reporting capabilities.',
      challenge: 'Manual financial processes and lack of real-time visibility into financial metrics',
      solution: 'Built responsive web application with automated reporting and interactive dashboards',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js'],
      results: ['80% reduction in report generation time', '95% improvement in data accuracy', '60% increase in user productivity'],
      testimonial: {
        text: "This platform has streamlined our entire financial workflow. We can't imagine working without it now.",
        author: "David Thompson, CFO"
      },
      rating: 5,
      duration: '3 months'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai-automation', label: 'AI & Automation', count: projects.filter(p => p.category === 'ai-automation').length },
    { id: 'web-mobile', label: 'Web & Mobile', count: projects.filter(p => p.category === 'web-mobile').length },
    { id: 'enterprise', label: 'Enterprise', count: projects.filter(p => p.category === 'enterprise').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our successful projects and see how we've helped businesses transform through innovative technology solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">150+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-300">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur px-2 py-1 rounded-full">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">
                    {project.client}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Key Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Testimonial Preview */}
                  {project.testimonial && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 italic mb-2">
                        "{project.testimonial.text.substring(0, 100)}..."
                      </p>
                      <p className="text-xs text-gray-500">
                        — {project.testimonial.author}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Duration: {project.duration}
                    </span>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                      View Details
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ranks of successful businesses who have transformed their operations with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;