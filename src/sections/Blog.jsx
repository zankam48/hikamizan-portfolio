import BlogPostCard from "../cards/BlogPostCard";

const blogPosts = [
    {
        id: 1,
        title: "Building Simple Neural Network from Scratch",
        excerpt: "A beginner-friendly guide to implementing a neural network using basic math and no frameworks.",
        date: "March 15, 2025",
        tags: ["AI", "Neural Network", "Python"],
        image: "/images/blog/nn.jpg"
    },
    {
        id: 2,
        title: "Understanding How Perspective Projection Works",
        excerpt: "Explore the fundamentals of 3D perspective projection and how it’s used in computer graphics.",
        date: "February 28, 2025",
        tags: ["Graphics", "Math", "3D"],
        image: "/images/blog/persp.png"
    },
    {
        id: 3,
        title: "How gRPC Actually Works",
        excerpt: "An in-depth look at gRPC, protocol buffers, and how to build high-performance APIs.",
        date: "January 20, 2025",
        tags: ["gRPC", "Backend", "Protocol Buffers"],
        image: "/images/blog/grpc.png"
    },
    {
        id: 4,
        title: "Create Mathematical Animation with Manim",
        excerpt: "Bring your math explanations to life with stunning animations using the Manim library.",
        date: "January 10, 2025",
        tags: ["Manim", "Animation", "Math"],
        image: "/images/blog/manim.png"
    }
];


const Blog = ({ darkMode }) => {
  return (
    <section 
      id="blog" 
      className={`py-16 px-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;