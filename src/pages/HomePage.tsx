import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Bot, Smartphone, Building2, Star, CheckCircle, Users, Clock, Award } from 'lucide-react';

const HomePage = () => {
  const clientLogos = [
    'TechCorp', 'InnovateLabs', 'DataFlow', 'CloudSystems', 'NextGen'
  ];

  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI-Driven Automation',
      description: 'Transform your business processes with intelligent automation solutions that reduce costs and increase efficiency.',
      link: '/services#ai-automation'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Web & Mobile Development',
      description: 'Build scalable, user-friendly applications that engage your customers and drive business growth.',
      link: '/services#web-development'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Enterprise Integrations',
      description: 'Seamlessly connect your systems and streamline operations with our custom integration solutions.',
      link: '/services#enterprise'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24hr', label: 'Response Time' },
    { number: '5+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      text: "VoidCraftr transformed our entire workflow with their AI automation solution. We've seen a 40% increase in productivity.",
      author: "Sarah Johnson",
      position: "CTO, TechFlow Inc.",
      rating: 5
    },
    {
      text: "The mobile app they developed exceeded our expectations. User engagement increased by 65% in the first month.",
      author: "Michael Chen",
      position: "CEO, StartupX",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Crafting Digital Solutions That 
              <span className="text-blue-400 block">Drive Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              VoidCraftr: Your Partner in Innovative Software Development. 
              We specialize in AI automation, scalable applications, and seamless integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all duration-200 hover:shadow-xl"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
            
            {/* Client Logos */}
            <div className="text-center">
              <p className="text-gray-400 mb-6">Trusted by leading companies</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="text-lg font-semibold px-4 py-2 bg-white/10 rounded-lg backdrop-blur">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge solutions that transform businesses and drive digital innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose VoidCraftr?
              </h2>
              <div className="space-y-4">
                {[
                  'Cutting-edge AI and automation expertise',
                  '98% client satisfaction rate',
                  'Proven track record with 150+ successful projects',
                  '24-hour response time guarantee',
                  'End-to-end development and support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
                alt="Team collaboration"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">5★</div>
                    <div className="text-sm opacity-90">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and discover how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-colors duration-200"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;