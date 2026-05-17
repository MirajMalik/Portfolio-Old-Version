const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="py-16 px-4 text-center">
                <h1 className="text-6xl font-bold text-slate-900 mb-4">Tarek Abdullah Miraj</h1>
                <p className="text-2xl text-blue-600 mb-6 font-semibold">Full Stack Web Developer</p>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Crafting beautiful and functional digital experiences with modern web technologies
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                    Let's Connect
                </button>
            </div>

            {/* Featured Work */}
            <div className="py-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Work</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-8 hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Portfolio Website</h3>
                        <p className="text-slate-700 mb-4">A modern, responsive portfolio website built with React and Tailwind CSS</p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">React</span>
                            <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Tailwind</span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-8 hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">E-Commerce Platform</h3>
                        <p className="text-slate-700 mb-4">Full-stack e-commerce solution with payment integration and admin dashboard</p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Node.js</span>
                            <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;