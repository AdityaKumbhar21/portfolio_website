import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Plus } from 'lucide-react';
import { api } from '../lib/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check for admin status (simple client-side check for now)
    // Run localStorage.setItem('isAdmin', 'true') in console to enable
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);

    const fetchPosts = async () => {
      try {
        const data = await api.posts.getAll();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    // Provision for DB connectivity
    const newPost = {
      title: "New Blog Post",
      content: "Content...",
      date: new Date().toISOString().split('T')[0]
    };
    await api.posts.create(newPost);
    alert("Create Post functionality provisioned. Check console for API call.");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Thoughts, tutorials, and insights on web development, design, and technology.
            </p>
          </div>
          {isAdmin && (
            <button 
              onClick={handleCreatePost}
              className="btn-secondary flex items-center gap-2 text-sm"
            >
              <Plus size={16} />
              Create Post
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-primary-500 text-sm font-medium group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 