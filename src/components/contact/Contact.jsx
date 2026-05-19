import { useState } from "react";
import { useNavigate } from "react-router";

const Contact = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handlePrev = () => {
        navigate(-1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className="w-full space-y-10 animate-fadeIn">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-zinc-100 tracking-wide">
                        Contact
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

            <div className="grid md:grid-cols-3 gap-6 ">
                <div className="md:col-span-1 p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl space-y-5 hover:border-zinc-700/50 transition duration-300">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500">
                        Get In Touch
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        I'm currently looking for full-time opportunities, internship roles or freelance collaboration. If you have an Opportunity for me, feel free to send a message!
                    </p>
                    
                    <div className="w-full h-px bg-zinc-805 my-4"></div>

                    <div className="space-y-3.5 text-xs">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            <span className="text-zinc-350 font-medium">Responsive to emails within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            <span className="text-zinc-350 font-medium">Located in Uttara, Dhaka</span>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl hover:border-zinc-700/50 transition duration-300">
                    {submitted ? (
                        <div className="py-10 flex flex-col items-center justify-center text-center space-y-4 animate-scaleUp">
                            <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-base font-bold text-zinc-100">Message Sent Successfully!</h4>
                                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                                    Thank you for reaching out, Tarek Abdullah Miraj will get back to you as soon as possible.
                                </p>
                            </div>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="px-4 py-2 text-xs font-semibold bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-350 hover:text-zinc-200 rounded-xl transition duration-200 mt-2"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h3 className="text-lg font-bold text-zinc-200">
                                Send a Message
                            </h3>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Miraj"
                                        className="w-full px-4 py-2.5 text-xs text-zinc-300 bg-zinc-900/60 border border-zinc-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500/25 focus:outline-none transition duration-200 placeholder:text-zinc-650"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="miraj@example.com"
                                        className="w-full px-4 py-2.5 text-xs text-zinc-300 bg-zinc-900/60 border border-zinc-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500/25 focus:outline-none transition duration-200 placeholder:text-zinc-650"
                                    />
                                </div>
                            </div>

                           
                            <div className="space-y-1.5">
                                <label htmlFor="subject" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Proposal"
                                    className="w-full px-4 py-2.5 text-xs text-zinc-300 bg-zinc-900/60 border border-zinc-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500/25 focus:outline-none transition duration-200 placeholder:text-zinc-650"
                                />
                            </div>

                          
                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your queries or questions here..."
                                    className="w-full px-4 py-2.5 text-xs text-zinc-300 bg-zinc-900/60 border border-zinc-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500/25 focus:outline-none transition duration-200 placeholder:text-zinc-650 resize-none"
                                ></textarea>
                            </div>

                          
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-[#0c0c0e] rounded-xl transition duration-300 shadow-md shadow-amber-500/10 active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;