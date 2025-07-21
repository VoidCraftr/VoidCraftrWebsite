import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      position: 'CEO & Founder',
      expertise: 'AI & Machine Learning, Business Strategy',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg',
      bio: 'Former tech lead at Google with 10+ years in AI development and business transformation.'
    },
    {
      name: 'Sarah Kim',
      position: 'CTO',
      expertise: 'Full-Stack Development, DevOps',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      bio: 'Expert in scalable architectures and cloud infrastructure with experience at Microsoft Azure.'
    },
    {
      name: 'Michael Chen',
      position: 'Lead AI Engineer',
      expertise: 'Machine Learning, Data Science',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
      bio: 'PhD in Computer Science, specializing in natural language processing and computer vision.'
    },
    {
      name: 'Emily Davis',
      position: 'Senior Developer',
      expertise: 'React, Node.js, Mobile Development',
      image: 'https://images.pexels.com/photos/3756680/pexels-photo-3756680.jpeg',
      bio: 'Full-stack developer with a passion for creating intuitive user experiences and scalable applications.'
    },
    {
      name: 'David Park',
      position: 'UI/UX Designer',
      expertise: 'Product Design, User Research',
      image: 'https://images.pexels.com/photos/3777942/pexels-photo-3777942.jpeg',
      bio: 'Award-winning designer focused on creating beautiful, functional interfaces that users love.'
    },
    {
      name: 'Lisa Wang',
      position: 'Project Manager',
      expertise: 'Agile Methodology, Client Relations',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
      bio: 'PMP-certified project manager ensuring seamless delivery and exceptional client satisfaction.'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Client Success',
      description: 'Your success is our success. We are committed to delivering solutions that drive real business outcomes and ROI.'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client communication and project delivery.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative Partnership',
      description: 'We believe in working closely with our clients as true partners, ensuring transparency and alignment throughout every project.'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to transform businesses through innovative technology solutions.'
    },
    {
      year: '2020',
      title: '50+ Projects Delivered',
      description: 'Reached our first major milestone, establishing ourselves as a trusted development partner.'
    },
    {
      year: '2021',
      title: 'AI Specialization',
      description: 'Expanded into AI and automation services, helping clients leverage intelligent technologies.'
    },
    {
      year: '2022',
      title: 'Enterprise Growth',
      description: 'Started serving Fortune 500 companies with complex integration and automation projects.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Won "Best AI Implementation" award and achieved 98% client satisfaction rating.'
    },
    {
      year: '2024',
      title: '150+ Projects & Growing',
      description: 'Continuing to expand our services and help more businesses achieve digital transformation.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About VoidCraftr
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of passionate technologists dedicated to crafting innovative software solutions that drive business success and digital transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <div className="text-gray-300">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To empower businesses through innovative technology solutions that drive digital transformation, 
                  increase efficiency, and create sustainable competitive advantages in today's rapidly evolving digital landscape.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To be the leading catalyst for business transformation, enabling organizations worldwide to harness 
                  the full potential of AI, automation, and modern software development to achieve unprecedented growth and success.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
                alt="Team collaboration"
                className="rounded-xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
                <div className="text-blue-600 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals with diverse expertise united by a common goal: your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-blue-200">{member.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <p className="text-blue-600 font-medium">{member.expertise}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and commitment to delivering exceptional results
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing list of successful businesses that have transformed their operations with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-colors duration-200"
            >
              Get Started Today
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

export default AboutPage;