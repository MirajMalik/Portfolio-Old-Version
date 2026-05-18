import { useLoaderData, useNavigate } from "react-router";

const About = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handlePrev = () => {
        navigate(-1);
    }

    return (
        <div className="w-full bg-[#020403] min-h-full">
            <div className="bg-black text-[#E2D288] py-4 px-8 mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black tracking-widest">ABOUT MIRAJ</h1>
                    <p className="text-xs mt-2 tracking-[0.3em]">━━━━━━━━━━━━━━━━━</p>
                </div>
                <div>
                    <button onClick={handlePrev} className="bg-gray-900 text-brown px-3 py-2 font-bold">prev</button>
                </div>
            </div>

            <div className="px-8 max-w-full">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="border-4 border-[#AFACA1] bg-[#0B0D06] p-8 shadow-lg transform -rotate-1 mb-8">
                            <div className="bg-[#0B0D06] text-[#E2D288] p-4 mb-4 border-2 border-[#2f3e46]">
                                <h2 className="text-xl font-black">⟡ PROFILE ⟡</h2>
                            </div>
                            <div className="space-y-6 font-mono text-sm text-white">
                                <div className="border-l-4 border-[#f87171] pl-4">
                                    <p className="font-black text-[#E2D288]">NAME</p>
                                    <p className="text-[#AFACA1]">Tarek Abdullah Miraj</p>
                                </div>
                                <div className="border-l-4 border-[#06b6d4] pl-4">
                                    <p className="font-black text-[#E2D288]">TITLE</p>
                                    <p className="text-[#AFACA1]">Full Stack Web Developer</p>
                                </div>
                                <div className="border-l-4 border-[#34d399] pl-4">
                                    <p className="font-black text-[#E2D288]">Experience</p>
                                    <p className="text-[#AFACA1]">Fresher</p>
                                </div>
                                <div className="border-l-4 border-[#a78bfa] pl-4">
                                    <p className="font-black text-[#E2D288]">LOCATION</p>
                                    <p className="text-[#AFACA1]">Uttara, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-4 border-[#AFACA1] bg-[#0B0D06] text-[#E2D288] p-6 transform rotate-2">
                            <p className="text-center font-black text-xl">❖ AVAILABLE ❖</p>
                            <p className="text-center text-xs mt-2">FOR NEW PROJECTS</p>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-2 space-y-8">
                        <div className="border-4 border-[#AFACA1] bg-[#0B0D06] p-8 shadow-lg ">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#2f3e46] border-4 border-[#2f3e46] mr-4"></div>
                                <h2 className="text-3xl font-black tracking-wider text-[#E2D288]">WHO AM I</h2>
                            </div>
                            <div className="border-t-4 border-[#2f3e46] pt-6">
                                <p className="font-mono leading-relaxed mb-4 text-justify text-[#AFACA1]">
                                    {data?.about?.description || "Greetings. I am a passionate full-stack web developer with an obsessive dedication to creating functional yet visually striking digital experiences. My journey spans modern technologies and a deep commitment to writing code that endures."}
                                </p>
                                <p className="font-mono leading-relaxed text-justify text-[#AFACA1]">
                                    I build with React, Node.js, and MongoDB. Clean code is not a suggestion—it is a philosophy. I believe the web should be beautiful, accessible, and uncompromisingly honest.
                                </p>
                            </div>
                        </div>

                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-4 border-[#AFACA1] bg-[#0B0D06] p-6 shadow-lg transform -rotate-1">
                                <h3 className="font-black text-[#E2D288] mb-4 text-lg">[ FRONTEND ]</h3>
                                <ul className="font-mono text-sm space-y-2 text-[#AFACA1]">
                                    <li>» React</li>
                                    <li>» Tailwind CSS</li>
                                    <li>» JavaScript</li>
                                    <li>» HTML5 / CSS3</li>
                                </ul>
                            </div>
                            <div className="border-4 border-[#AFACA1] bg-[#0B0D06] p-6 shadow-lg transform rotate-1">
                                <h3 className="font-black text-[#E2D288] mb-4 text-lg">[ BACKEND ]</h3>
                                <ul className="font-mono text-sm space-y-2 text-[#AFACA1]">
                                    <li>» Node.js</li>
                                    <li>» Express</li>
                                    <li>» MongoDB</li>
                                    <li>» REST APIs</li>
                                </ul>
                            </div>
                        </div>

                       {/* experiences */}
                        <div className="border-4 border-[#AFACA1] bg-[#0B0D06] p-8 shadow-lg">
                            <h2 className="text-3xl font-black mb-8 tracking-wider text-[#E2D288]">[ EXPERIENCE ]</h2>
                            <div className="space-y-8">
                                <div className="border-l-8 border-[#2f3e46] pl-6 py-2">
                                    <div className="bg-[#0B0D06] text-[#E2D288] px-3 py-1 inline-block mb-2">
                                        <p className="font-black text-sm">2026 - PRESENT</p>
                                    </div>
                                    <h3 className="font-black text-xl mt-3 text-gray-500"> Frontend Developer Intern</h3>
                                    <p className="font-mono text-xs text-gray-400">Zantech</p>
                                    <p className="font-mono text-sm text-[#AFACA1] mt-2">Architected responsive web applications and mentored by development teams through real projects.</p>
                                </div>
                                {/* <div className="border-l-8 border-blue-700 pl-6 py-2">
                                    <div className="bg-black text-white px-3 py-1 inline-block mb-2">
                                        <p className="font-black text-sm">2020 - 2022</p>
                                    </div>
                                    <h3 className="font-black text-xl mt-3">Full Stack Developer</h3>
                                    <p className="font-mono text-sm text-gray-700 mt-2">Developed and maintained multiple full-stack applications leveraging modern web technologies.</p>
                                </div> */}
                            </div>
                        </div>

                        {/* footer */}
                        <div className="grid grid-cols-3 gap-4 pb-8">
                            <div className="border-4 border-[#0B0D06] bg-[#0B0D06] p-4 text-center transform -rotate-2 text-[#E2D288]">
                                <p className="font-black text-2xl">10+</p>
                                <p className="font-mono text-gray-400 text-xs mt-2">PROJECTS</p>
                            </div>
                            <div className="border-4 border-[#0B0D06] bg-[#0B0D06] p-4 text-center text-[#E2D288]">
                                <p className="font-black text-2xl">100%</p>
                                <p className="font-mono text-gray-400 text-xs mt-2">DEDICATION</p>
                            </div>
                            <div className="border-4 border-[#0B0D06] bg-[#0B0D06] p-4 text-center transform rotate-2 text-[#E2D288]">
                                <p className="font-black text-2xl">∞</p>
                                <p className="font-mono text-gray-400 text-xs mt-2">LEARNING</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
    );
};

export default About;