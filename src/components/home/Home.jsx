import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className="w-full min-h-screen bg-[#f8f6f2] px-6 lg:px-16 py-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">   
                {/* left */}
                <div className="space-y-8">

                    {/* intro */}
                    <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_#000]">
                        <p className="font-mono text-sm mb-3 text-red-600">
                           {data.about.title}
                        </p>

                        <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                            TAREK <br />
                            ABDULLAH <br />
                            MIRAJ
                        </h1>

                        <div className="border-t-4 border-black mt-6 pt-5">
                            <p className="text-lg font-medium text-gray-800 leading-relaxed">
                                I build web applications using
                                <span className="font-black"> React</span>,
                                <span className="font-black"> Nodejs</span>,
                                and
                                <span className="font-black"> MongoDB</span>.
                                Passionate about AI, Machine Learning and creating digital experiences to gain practical knowlege.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <button className="border-4 border-black bg-lime-300 px-6 py-3 font-black hover:-translate-y-1 transition">
                            VIEW PROJECTS
                        </button>

                        <button className="border-4 border-black bg-cyan-300 px-6 py-3 font-black hover:-translate-y-1 transition">
                            ABOUT ME
                        </button>
                        <button className="border-4 border-black bg-orange-300 px-6 py-3 font-black hover:-translate-y-1 transition">
                            CV
                        </button>
                    </div>
                </div>

                {/* right */}
                <div className="space-y-6">
                    <div className="border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0px_#000]">
                        <div className="bg-black text-yellow-300 inline-block px-4 py-2 mb-6">
                            <p className="font-black tracking-wide">
                                WELCOME TO MY PORTFOLIO
                            </p>
                        </div>

                        <p className="font-mono text-sm leading-7 text-gray-900">
                            I enjoy building full-stack applications
                            and exploring technologies related to artificial
                            intelligence, machine learning.
                            My focus is on creating clean UI, efficient backend
                            systems and practical real-world projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="border-4 border-black bg-white p-5 shadow-[5px_5px_0px_#000]">
                            <p className="font-black text-xl mb-2">Frontend</p>
                            <p className="font-mono text-sm">
                                React <br />
                                Tailwind CSS <br />
                                JavaScript
                            </p>
                        </div>

                        <div className="border-4 border-black bg-white p-5 shadow-[5px_5px_0px_#000]">
                            <p className="font-black text-xl mb-2">Backend</p>
                            <p className="font-mono text-sm">
                                Express <br />
                                Node.js <br />
                                MongoDB
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-16">
                <div className="border-4 border-black bg-blue-100 p-8 shadow-[8px_8px_0px_#000]">
                    <h2 className="text-3xl font-black mb-5">
                        EDUCATION
                    </h2>
                    <p className="font-mono text-sm leading-7 text-gray-800">Southeast University  [2022-2026]</p>

                    <p className="font-mono text-sm leading-7 text-gray-800">
                        Department of Computer Science and Engineering
                    </p>
                    <p className="font-mono text-sm leading-7 text-gray-800">
                       CGPA: 3.83
                    </p>
                    
                </div>

                {/* Goals */}
                <div className="border-4 border-black bg-purple-100 p-8 shadow-[8px_8px_0px_#000]">
                    <h2 className="text-3xl font-black mb-5">
                        CURRENT FOCUS
                    </h2>

                    <div className="space-y-4 font-mono text-sm">
                        <p>→ Full-Stack Development</p>
                        <p>→ AI & Machine Learning</p>
                        <p>→ Building Real-World Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;