import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share, BookOpen } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPost = {
    title: 'The Future of AI in Business Automation: Trends to Watch in 2024',
    slug: 'future-ai-business-automation-2024',
    content: `
      <p>Artificial Intelligence is revolutionizing the way businesses operate, and 2024 promises to be a pivotal year for AI-driven automation. From intelligent process automation to predictive analytics, companies are discovering new ways to leverage AI to streamline operations, reduce costs, and improve customer experiences.</p>

      <h2>The Current State of Business Automation</h2>
      <p>Business automation has evolved far beyond simple rule-based systems. Today's AI-powered automation solutions can handle complex decision-making processes, understand natural language, and even learn from experience. This evolution has opened up new possibilities for businesses across all industries.</p>

      <h2>Key Trends Shaping AI Automation in 2024</h2>
      
      <h3>1. Intelligent Document Processing</h3>
      <p>One of the most significant trends we're seeing is the advancement of intelligent document processing (IDP). AI systems can now extract, classify, and process information from unstructured documents with remarkable accuracy, reducing manual data entry by up to 90%.</p>

      <h3>2. Conversational AI Integration</h3>
      <p>Chatbots and virtual assistants are becoming more sophisticated, capable of handling complex customer inquiries and even performing transactions. The integration of large language models has made conversational AI more natural and effective than ever before.</p>

      <h3>3. Predictive Analytics and Decision Making</h3>
      <p>AI systems are increasingly being used to predict outcomes and make autonomous decisions. From inventory management to customer behavior prediction, businesses are leveraging AI to stay ahead of trends and make data-driven decisions.</p>

      <h2>Implementation Strategies for Success</h2>
      <p>Successfully implementing AI automation requires careful planning and execution. Here are key strategies we recommend:</p>

      <ul>
        <li>Start with pilot projects to demonstrate value</li>
        <li>Ensure data quality and accessibility</li>
        <li>Invest in employee training and change management</li>
        <li>Choose the right technology partners</li>
        <li>Measure and optimize continuously</li>
      </ul>

      <h2>Challenges and Considerations</h2>
      <p>While AI automation offers tremendous benefits, businesses must also consider potential challenges including data privacy, ethical AI use, and the need for human oversight in critical processes.</p>

      <h2>Looking Ahead</h2>
      <p>As we move through 2024, we expect to see even more sophisticated AI automation solutions that can adapt to changing business needs in real-time. The key to success will be finding the right balance between automation and human expertise.</p>

      <p>At VoidCraftr, we help businesses navigate this complex landscape and implement AI automation solutions that drive real results. If you're ready to explore how AI can transform your operations, we're here to help.</p>
    `,
    author: 'Alex Rodriguez',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Automation',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    tags: ['AI', 'Automation', 'Business Transformation', 'Machine Learning', 'Digital Innovation']
  };

  const relatedPosts = [
    {
      title: 'Machine Learning ROI: Measuring Success in AI Projects',
      slug: 'machine-learning-roi-measuring-success',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      readTime: '7 min read'
    },
    {
      title: 'Building Scalable Web Applications: Best Practices for 2024',
      slug: 'scalable-web-applications-best-practices',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      readTime: '12 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
            {blogPost.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{blogPost.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{blogPost.readTime}</span>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
              <Share className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
                alt={blogPost.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{blogPost.author}</p>
                <p className="text-sm text-gray-600">CEO & Founder at VoidCraftr</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
              <Share className="h-5 w-5" />
              <span>Share Article</span>
            </button>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI automation can drive success for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Get Free Consultation
            <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;