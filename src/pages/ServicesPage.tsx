import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Smartphone, Building2, Database, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'ai-automation',
      icon: <Bot className="h-12 w-12" />,
      title: 'AI-Driven Automation Tools',
      description: 'Transform your business operations with intelligent automation solutions that reduce manual work and increase efficiency.',
      benefits: [
        'Reduce operational costs by up to 60%',
        'Eliminate human error in repetitive tasks',
        'Scale operations without increasing headcount',
        'Improve customer response times',
        '24/7 automated workflows'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI GPT', 'Zapier', 'Microsoft Power Automate'],
      timeline: '8-12 weeks',
      caseStudy: '/portfolio/automation-case-study'
    },
    {
      id: 'web-development',
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Web & Mobile Applications',
      description: 'Build scalable, user-friendly applications that engage customers and drive business growth across all platforms.',
      benefits: [
        'Cross-platform compatibility',
        'Responsive design for all devices',
        'High performance and fast loading',
        'SEO optimized for better visibility',
        'Scalable architecture'
      ],
      technologies: ['React', 'React Native', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      timeline: '12-16 weeks',
      caseStudy: '/portfolio/webapp-case-study'
    },
    {
      id: 'enterprise',
      icon: <Building2 className="h-12 w-12" />,
      title: 'Enterprise Integrations',
      description: 'Seamlessly connect your existing systems and streamline operations with custom integration solutions.',
      benefits: [
        'Unified data across all platforms',
        'Reduced data silos and redundancy',
        'Improved workflow efficiency',
        'Real-time synchronization',
        'Enhanced security and compliance'
      ],
      technologies: ['REST APIs', 'GraphQL', 'Microservices', 'Docker', 'AWS', 'Azure'],
      timeline: '6-10 weeks',
      caseStudy: '/portfolio/integration-case-study'
    },
    {
      id: 'crm-solutions',
      icon: <Database className="h-12 w-12" />,
      title: 'CRM Solutions',
      description: 'Custom CRM systems that help you manage customer relationships and drive sales growth effectively.',
      benefits: [
        'Centralized customer data management',
        'Automated sales pipeline tracking',
        'Advanced analytics and reporting',
        'Integration with existing tools',
        'Mobile access for remote teams'
      ],
      technologies: ['Salesforce', 'HubSpot', 'Supabase', 'PostgreSQL', 'React', 'Node.js'],
      timeline: '10-14 weeks',
      caseStudy: '/portfolio/crm-case-study'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive software development solutions designed to transform your business and drive digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="text-blue-600 mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      {service.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center space-x-2 mb-8">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Typical Project Timeline: <span className="font-semibold text-gray-900">{service.timeline}</span></span>
                    </div>

                    <Link
                      to={service.caseStudy}
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <img
                        src={`https://images.pexels.com/photos/${index === 0 ? '3184291' : index === 1 ? '196644' : index === 2 ? '3184465' : '3184418'}/pexels-photo-${index === 0 ? '3184291' : index === 1 ? '196644' : index === 2 ? '3184465' : '3184418'}.jpeg`}
                        alt={service.title}
                        className="rounded-xl shadow-xl w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-blue-900/20 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and defining project scope' },
              { step: '02', title: 'Design', description: 'Creating user-centered designs and technical architecture' },
              { step: '03', title: 'Development', description: 'Agile development with regular client updates' },
              { step: '04', title: 'Launch & Support', description: 'Deployment, testing, and ongoing maintenance' }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">
                  {phase.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-colors duration-200"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;