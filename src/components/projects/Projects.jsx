import { use } from "react";
import { useNavigate } from "react-router";

const Projects = ( {projectsPromise} ) => {
    const navigate = useNavigate();
    const handlePrev = () => {
        navigate(-1);
    }
    
    const projectsData = use(projectsPromise);
    const projects = projectsData.filter(repo => repo.description && repo.description.trim() !== "");

    return (
        <div className="w-full space-y-10 animate-fadeIn">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-zinc-100 tracking-wide">
                        Projects
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

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl flex flex-col justify-between hover:border-zinc-750 hover:shadow-xl group transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition duration-300"></div>

                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-base font-bold text-zinc-200 group-hover:text-amber-400 transition duration-300">
                                    {project.name}
                                </h3>
                                
                                <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-md">
                                    Repo
                                </span>
                            </div>

                            <p className="text-xs text-zinc-400 leading-relaxed min-h-[50px] line-clamp-3">
                                {project.description || "No description provided."}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1 text-[10px]">
                                {project.language && (
                                    <span className="px-2.5 py-1 font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg">
                                        {project.language}
                                    </span>
                                )}
                                <span className="px-2.5 py-1 font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg">
                                    Updated: {project.updated_at ? project.updated_at.split("T")[0] : project.created_at.split("T")[0]}
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6 pt-4 border-t border-zinc-850 relative z-10">
                            <a
                                href={project.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-2 text-center text-xs font-semibold bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-350 hover:text-zinc-200 rounded-xl transition duration-200"
                            >
                                GitHub Repo
                            </a>

                            {project.homepage ? (
                                <a
                                    href={project.homepage}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 py-2 text-center text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-[#0c0c0e] rounded-xl transition duration-200"
                                >
                                    Live Demo
                                </a>
                            ) : (
                                <div className="flex-1 py-2 text-center text-xs font-semibold bg-zinc-900/30 border border-transparent text-zinc-600 rounded-xl cursor-not-allowed">
                                    No Demo
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;