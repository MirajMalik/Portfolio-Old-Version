import { useNavigate, useLoaderData } from "react-router";

const Blog = () => {
    const navigate = useNavigate();
    const blogs = useLoaderData();

    return (
        <div className="w-full space-y-10 animate-fadeIn">
            <div>
                <h2 className="text-3xl font-bold text-zinc-100 tracking-wide">
                    Articles & Insights
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full mt-2.5"></div>
                <p className="text-zinc-400 mt-4 text-sm max-w-2xl leading-relaxed">
                    Welcome to my digital garden. Here I share my thoughts, learnings and experiences about software development, design and technology.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map(blog => (
                    <article key={blog.id} className="group bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-zinc-700/50 transition duration-500 flex flex-col h-full shadow-lg hover:shadow-xl">
                        <div className="relative overflow-hidden aspect-video">
                            <img 
                                src={blog.image} 
                                alt={blog.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 text-xs font-semibold bg-[#0c0c0e]/80 text-amber-400 backdrop-blur-sm rounded-full border border-amber-500/20">
                                    {blog.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3 font-medium tracking-wide">
                                <time dateTime={blog.date}>{blog.date}</time>
                                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                <span>{blog.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition duration-300 mb-3">
                                {blog.title}
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                                {blog.excerpt}
                            </p>
                            <div className="mt-auto">
                                <button 
                                    onClick={() => navigate(`/blog/${blog.id}`)}
                                    className="flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition duration-300 group/btn"
                                >
                                    Read Article 
                                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
