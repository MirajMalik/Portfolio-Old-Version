import { use } from "react";

const Projects = ( {projectsPromise} ) => {
    const projectsData = use(projectsPromise);

     const projects = projectsData.filter(repo => repo.description && repo.description.trim() !== "");
    // console.log(projects);
   return (
        <div className="w-full bg-slate-900 text-white px-10 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Featured Projects
                </h1>
                <p className="text-gray-400 mt-2">
                    Selected work from my GitHub repositories
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <div
                        key={project.id}
                        className="bg-[#1e293b] border border-slate-700 rounded-xl p-5 hover:scale-[1.02] transition duration-300 shadow-md"
                    >
                        <h2 className="text-xl font-semibold">
                            {project.name}
                        </h2>
                        <p className="text-sm text-gray-300 mt-2 min-h-[40px]">
                            {project.description ||"No description provided."}
                        </p>

                        <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                            <span className="px-2 py-1 bg-slate-800 rounded-md">
                                {project.language || "N/A"}
                            </span>

                            <span> {project.created_at.split("T")[0]}</span>
                        </div>

                        <div className="flex gap-3 mt-5">
                            <a
                                href={project.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 rounded-lg transition"
                            >
                                GitHub
                            </a>

                            {project.homepage && (
                                <a
                                    href={project.homepage}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 text-sm bg-amber-500 text-black hover:bg-amber-400 rounded-lg transition"
                                >
                                    Live
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Projects;