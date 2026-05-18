import { use } from "react";

const Projects = ( {projectsPromise} ) => {
    const projectsData = use(projectsPromise);

     const projects = projectsData.filter(repo => repo.description && repo.description.trim() !== "");
    // console.log(projects);
   return (
        <div className="w-full bg-[#1a1a1a] min-h-full">
            <div className="bg-black text-[#E2D288] py-4 px-8 mb-8">
                <h1 className="text-4xl font-black tracking-widest">FEATURED PROJECTS</h1>
                <p className="text-xs mt-2 tracking-[0.3em]">━━━━━━━━━━━━━━━━━</p>
            </div>

            <div className="px-8 max-w-full">
                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`border-4 bg-[#0B0D06] p-8 shadow-lg ${index % 2 === 0 ? 'transform -rotate-1 border-[#AFACA1] shadow-[8px_8px_0px_#06b6d4]' : 'transform rotate-2 border-[#4a5759] shadow-[8px_8px_0px_#a78bfa]'}`}
                        >    
                            <div className="bg-[#0B0D06] text-[#E2D288] p-3 mb-4 border-2 border-[#5f0f40] inline-block">
                                <h2 className="text-lg font-black tracking-wider">
                                    ⟡ {project.name.toUpperCase()} ⟡
                                </h2>
                            </div>
                            
                            <p className="font-mono text-sm text-[#AFACA1] mt-4 leading-relaxed min-h-[60px]">
                                {project.description || "No description provided."}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5 mb-5">
                                <span className="border-2 border-[#AFACA1] bg-[#AFACA1] px-3 py-1 font-black text-xs text-black">
                                    {project.language || "N/A"}
                                </span>
                                <span className="border-2 border-[#4a5759] bg-[#4a5759] px-3 py-1 font-black text-xs text-black">
                                    {project.created_at.split("T")[0]}
                                </span>
                            </div>

                            <div className="flex gap-3 flex-wrap">
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="border-4 border-[#5f0f40] bg-[#5f0f40] px-4 py-2 text-sm font-black text-black hover:-translate-y-1 transition"
                                >
                                    GitHub
                                </a>

                                {project.homepage && (
                                    <a
                                        href={project.homepage}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border-4 border-[#4d194d] bg-[#4d194d] px-4 py-2 text-sm font-black text-black hover:-translate-y-1 transition"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Projects;