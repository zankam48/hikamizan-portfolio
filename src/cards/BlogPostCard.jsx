const BlogPostCard = ({ post, darkMode }) => {
    return (
      <div 
        id={`blog-${post.id}`} 
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
      >
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.date}</div>
            <div className="flex space-x-2">
              {post.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className={`text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} px-2 py-1 rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <h3 className="font-bold text-xl mb-2">{post.title}</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-4`}>{post.excerpt}</p>
          
          <a 
            href="#" 
            className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium`}
          >
            Read more
          </a>
        </div>
      </div>
    );
};

export default BlogPostCard;