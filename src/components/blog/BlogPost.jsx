import { useParams, useNavigate, useLoaderData } from "react-router";

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blogs = useLoaderData();
    
    const blog = blogs.find(b => b.id === parseInt(id));

    if (!blog) {
        return (
            <div className="w-full h-[50vh] flex flex-col items-center justify-center animate-fadeIn">
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">Blog Post Not Found</h2>
                <button 
                    onClick={() => navigate("/blog")}
                    className="px-5 py-2.5 text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-[#0c0c0e] rounded-xl transition duration-300"
                >
                    Back to Blog
                </button>
            </div>
        );
    }

    return (
        <article className="w-full animate-fadeIn pb-10">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-10 border border-zinc-800/80 shadow-2xl">
                <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-transparent"></div>
                
                <button 
                    onClick={() => navigate("/blog")}
                    className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-[#0c0c0e]/80 text-zinc-300 hover:text-white backdrop-blur-md rounded-xl border border-zinc-700/50 transition duration-300 hover:border-zinc-500"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>

                <div className="absolute bottom-6 left-6 md:left-10">
                    <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-amber-500 text-[#0c0c0e] rounded-full shadow-lg">
                        {blog.category}
                    </span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 md:px-0">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight mb-6">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-sm text-zinc-400 font-medium tracking-wide">
                        <time dateTime={blog.date}>{blog.date}</time>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span>{blog.readTime}</span>
                    </div>
                </header>

                {/* divider */}
                <div className="w-20 h-1 bg-amber-500/50 rounded-full mx-auto mb-10"></div>
                {/* content */}
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-loose prose-h3:text-amber-400 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-6 text-lg">
                    {blog.content.split('\n\n').map((paragraph, index) => {
                        if (paragraph.trim().startsWith('###')) {
                            return <h3 key={index} className="font-bold">{paragraph.replace('###', '').trim()}</h3>;
                        }
                        if (paragraph.trim() !== '') {
                            return <p key={index}>{paragraph.trim()}</p>;
                        }
                        return null;
                    })}
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
