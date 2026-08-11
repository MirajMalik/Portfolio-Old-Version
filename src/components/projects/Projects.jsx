import { useNavigate } from "react-router";
import featuredProjects from "../../data/featured_projects.json";

const Projects = () => {
    const navigate = useNavigate();
    const handlePrev = () => {
        navigate(-1);
    }

    return (
        <div className="w-full space-y-12 animate-fadeIn">
            {/* Page Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-zinc-100 tracking-wide">
                        Portfolio
                    </h2>
                    <div className="w-12 h-1 bg-amber-500 rounded-full mt-2.5"></div>
                </div>
                
                <button 
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#1a1a1c] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg transition duration-200"
                >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>

            {/* Featured Projects Section */}
            <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {featuredProjects.map((fp) => (
                        <div key={fp.id} className="flex flex-col group bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-zinc-750 transition duration-300">
                            {/* Image Container */}
                            <div className="h-48 overflow-hidden relative border-b border-zinc-800/60 flex-shrink-0">
                                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition duration-300 z-10"></div>
                                <img 
                                    src={fp.image} 
                                    alt={fp.title} 
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                                />
                            </div>
                            
                            {/* Content Container */}
                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                <h4 className="text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition duration-300 line-clamp-1">{fp.title}</h4>
                                
                                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                                    {fp.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {fp.techStack.map(tech => (
                                        <span key={tech} className="px-2 py-0.5 text-[9px] font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Key Features - Optional for compact layout, or limit to 2 */}
                                <ul className="space-y-1 text-[11px] text-zinc-400">
                                    {fp.features.slice(0, 2).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-1.5">
                                            <span className="text-amber-500 mt-0.5">▹</span>
                                            <span className="line-clamp-1">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Actions */}
                                <div className="flex gap-3 pt-4 mt-auto">
                                    {fp.liveLink && (
                                        <a href={fp.liveLink} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center text-[11px] font-bold bg-amber-500 hover:bg-amber-600 text-[#0c0c0e] rounded-xl transition duration-300 shadow-md shadow-amber-500/10 active:scale-[0.98]">
                                            Live Demo
                                        </a>
                                    )}
                                    {fp.githubLink && (
                                        <a href={fp.githubLink} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center text-[11px] font-bold bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 rounded-xl transition duration-300 active:scale-[0.98]">
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;