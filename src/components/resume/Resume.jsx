import { useLoaderData, useNavigate } from "react-router";

const Resume = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handlePrev = () => {
        navigate(-1);
    }

    return (
        <div className="w-full space-y-10 animate-fadeIn">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-zinc-100 tracking-wide">
                        Resume
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

            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1  p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl space-y-5 hover:border-zinc-700/50 transition duration-300">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500">
                        Profile Details
                    </h3>
                    
                    <div className="space-y-4 text-xs">
                        <div>
                            <p className="text-zinc-500 uppercase tracking-wider font-semibold text-[10px]">Full Name</p>
                            <p className="text-zinc-300 font-medium mt-0.5">Tarek Abdullah Miraj</p>
                        </div>
                        <div>
                            <p className="text-zinc-500 uppercase tracking-wider font-semibold text-[10px]">Current Title</p>
                            <p className="text-zinc-300 font-medium mt-0.5">Full Stack Web Developer</p>
                        </div>
                        <div>
                            <p className="text-zinc-500 uppercase tracking-wider font-semibold text-[10px]">Experience Level</p>
                            <p className="text-zinc-300 font-medium mt-0.5">Fresher</p>
                        </div>
                        <div>
                            <p className="text-zinc-500 uppercase tracking-wider font-semibold text-[10px]">Location</p>
                            <p className="text-zinc-300 font-medium mt-0.5">Uttara, Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <div className="px-4 py-2.5 bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Available For Opportunities
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl space-y-4 hover:border-zinc-700/50 transition duration-300">
                    <h3 className="text-lg font-bold text-zinc-200">
                        Professional Summary
                    </h3>
                    <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                        <p>
                            {data?.about?.description || "Greetings. I am a passionate full-stack web developer with an obsessive dedication to creating functional yet visually striking digital experiences. My journey spans modern technologies and a deep commitment to writing code that endures."}
                        </p>
                        <p>
                            I build with React, Node.js, Express, and MongoDB. Clean code is not just a preference—it is a philosophy. I believe the web should be beautiful, accessible, fast, and uncompromisingly intuitive.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold text-zinc-200 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Work Experience
                </h3>

                <div className="p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl hover:border-zinc-700/50 transition duration-300">
                    <div className="relative border-l border-zinc-800 pl-6 space-y-6">
                        <div className="relative">
                            <span className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 border border-[#121214] shadow-sm"></span>
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <div>
                                    <h4 className="text-base font-bold text-zinc-200">Frontend Developer Intern</h4>
                                    <p className="text-xs text-zinc-500 mt-0.5">Zantech</p>
                                </div>
                                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 rounded-md border border-amber-500/20">
                                    2026 - PRESENT
                                </span>
                            </div>
                            <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                                Architecting highly responsive React interfaces, working with React Router layouts and contexts and gaining experience on web systems under senior team mentorship.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl space-y-4 hover:border-zinc-700/50 transition duration-300">
                    <h3 className="text-base font-bold text-zinc-200 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-amber-500 rounded-full"></span>
                        Frontend Stack
                    </h3>
                    
                    <div className="flex flex-wrap gap-2.5 pt-1">
                        {data?.about?.frontendSkills.map((skill) => (
                            <span key={skill} className="px-3 py-1.5 text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition duration-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl space-y-4 hover:border-zinc-700/50 transition duration-300">
                    <h3 className="text-base font-bold text-zinc-200 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-amber-500 rounded-full"></span>
                        Backend & Database Stack
                    </h3>
                    
                    <div className="flex flex-wrap gap-2.5 pt-1">
                        {data?.about?.backendSkills.map((skill) => (
                            <span key={skill} className="px-3 py-1.5 text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition duration-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="p-5 bg-zinc-900/50 border border-zinc-800/60 rounded-2xl text-center hover:border-zinc-700/40 transition duration-200">
                    <span className="block text-2xl lg:text-3xl font-extrabold text-amber-500">10+</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold block mt-1">Projects</span>
                </div>
                <div className="p-5 bg-zinc-900/50 border border-zinc-800/60 rounded-2xl text-center hover:border-zinc-700/40 transition duration-200">
                    <span className="block text-2xl lg:text-3xl font-extrabold text-amber-500">100%</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold block mt-1">Dedication</span>
                </div>
                <div className="p-5 bg-zinc-900/50 border border-zinc-800/60 rounded-2xl text-center hover:border-zinc-700/40 transition duration-200">
                    <span className="block text-2xl lg:text-3xl font-extrabold text-amber-500">∞</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold block mt-1">Learning</span>
                </div>
            </div>
        </div>
    );
};

export default Resume;