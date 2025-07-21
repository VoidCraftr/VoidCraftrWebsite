import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Articles', count: 12 },
    { id: 'ai-automation', label: 'AI & Automation', count: 4 },
    { id: 'web-development', label: 'Web Development', count: 3 },
    { id: 'enterprise', label: 'Enterprise Solutions', count: 3 },
    { id: 'industry-insights', label: 'Industry Insights', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Future of AI in Business Automation: Trends to Watch in 2024',
      slug: 'future-ai-business-automation-2024',
      excerpt: 'Explore the latest trends in AI automation that are reshaping how businesses operate, from intelligent process automation to predictive analytics.',
      category: 'ai-automation',
      author: 'Alex Rodriguez',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications: Best Practices for 2024',
      slug: 'scalable-web-applications-best-practices',
      excerpt: 'Learn the essential patterns and technologies for building web applications that can grow with your business needs.',
      category: 'web-development',
      author: 'Sarah Kim',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      featured: true
    },
    {
      id: 3,
      title: 'Enterprise Integration Strategies: Connecting Legacy Systems',
      slug: 'enterprise-integration-legacy-systems',
      excerpt: 'A comprehensive guide to modernizing your enterprise architecture while maintaining compatibility with existing systems.',
      category: 'enterprise',
      author: 'Michael Chen',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning ROI: Measuring Success in AI Projects',
      slug: 'machine-learning-roi-measuring-success',
      excerpt: 'Understanding how to quantify the return on investment for your machine learning initiatives and AI automation projects.',
      category: 'ai-automation',
      author: 'Emily Davis',
      date: '2024-01-02',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      featured: false
    },
    {
      id: 5,
      title: 'React Performance Optimization: Advanced Techniques',
      slug: 'react-performance-optimization-techniques',
      excerpt: 'Deep dive into advanced React optimization techniques that can significantly improve your application performance.',
      category: 'web-development',
      author: 'David Park',
      date: '2023-12-28',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Transformation in Healthcare: A Complete Guide',
      slug: 'digital-transformation-healthcare-guide',
      excerpt: 'How healthcare organizations can leverage technology to improve patient outcomes and operational efficiency.',
      category: 'industry-insights',
      author: 'Lisa Wang',
      date: '2023-12-25',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg',
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              VoidCraftr Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, tutorials, and industry trends in AI, automation, and modern software development
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
              <div className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Editor's Choice
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {categories.find(c => c.id === article.category)?.label}
                        </span>
                        <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeCategory === 'all' ? 'All Articles' : categories.find(c => c.id === activeCategory)?.label}
                </h2>
                <p className="text-gray-600">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.filter(article => !article.featured).map((article) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.slug}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-700 text-sm font-medium rounded-full">
                            {categories.find(c => c.id === article.category)?.label}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                          </div>
                          <span>{article.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                          <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest articles on AI, automation, and software development delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;