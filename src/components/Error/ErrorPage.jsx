import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">

            <div className="border-4 border-black bg-[#f8f6f2] p-10 max-w-xl w-full text-center shadow-[10px_10px_0px_#000]">

                <h1 className="text-7xl font-black mb-4">
                    404
                </h1>

                <h2 className="text-3xl font-black mb-6">
                    PAGE NOT FOUND
                </h2>

                <p className="font-mono text-gray-700 mb-8 leading-7">
                    The page you are looking for does not exist
                    or may have been moved.
                </p>

                <Link to="/">
                    <button className="border-4 border-black bg-lime-300 px-6 py-3 font-black hover:-translate-y-1 transition">
                        GO BACK HOME
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default ErrorPage;