import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section 
            id="home" 
            className="w-full lg:w-[80vw] mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-24 relative overflow-hidden"
        >

            {/* Left Side - Text */}
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-left mb-10 md:mb-0 px-12 md:px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Hi, I'm <span className="text-blue-600">Mohit Kumar Yadav</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8 leading-relaxed">
                    I'm a <strong>Life Science Research Professional</strong>.<br />
                    Completed Master of Science from Rajasthan University.<br />
                    Specialized research: Breast Cancer & Metformin Impact on Cell Viability.<br />
                    Expertise in scientific research, laboratory experiments, and data analysis.<br />
                    Let's connect and explore <strong>research collaborations</strong>!
                </p>
                
                {/* Buttons */}
                <div className="flex gap-6 mb-6">
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition"
                    >
                        Contact Me
                    </Link>

                    <Link
                        to="experience" 
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="px-6 py-3 border border-gray-800 rounded-xl cursor-pointer hover:bg-gray-100 transition"
                    >
                        View Research Work
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 mt-4 justify-center md:justify-start text-gray-700">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.92 4.92 0 0 1 1.76 1.01 4.92 4.92 0 0 1 1.01 1.76c.163.46.347 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.01 1.76 4.92 4.92 0 0 1-1.76 1.01c-.46.163-1.26.347-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.76-1.01 4.92 4.92 0 0 1-1.01-1.76c-.163-.46-.347-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.01-1.76 4.92 4.92 0 0 1 1.76-1.01c.46-.163 1.26-.347 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.775.127 4.847.312 4.042.603a6.902 6.902 0 0 0-2.51 1.62A6.902 6.902 0 0 0 .603 4.042C.312 4.847.127 5.775.07 7.052.012 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.057 1.277.242 2.205.533 3.01a6.902 6.902 0 0 0 1.62 2.51 6.902 6.902 0 0 0 2.51 1.62c.805.291 1.733.476 3.01.533C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.277-.057 2.205-.242 3.01-.533a6.902 6.902 0 0 0 2.51-1.62 6.902 6.902 0 0 0 1.62-2.51c.291-.805.476-1.733.533-3.01.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.057-1.277-.242-2.205-.533-3.01a6.902 6.902 0 0 0-1.62-2.51 6.902 6.902 0 0 0-2.51-1.62c-.805-.291-1.733-.476-3.01-.533C15.668.012 15.259 0 12 0z" />
                            <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4z" />
                            <circle cx="18.406" cy="5.594" r="1.44" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 0 0 2.163-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.936 13.936 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723a4.902 4.902 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.934 4.934 0 0 1-2.224.085c.627 1.956 2.444 3.379 4.6 3.419A9.867 9.867 0 0 1 .96 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634a9.936 9.936 0 0 0 2.457-2.548l-.047-.02z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 11.268h-3v-5.604c0-1.336-.027-3.057-1.863-3.057-1.863 0-2.15 1.452-2.15 2.955v5.706h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.563 2.84-1.563 3.037 0 3.6 2 3.6 4.59v5.606z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <img
                    src="/hero.jpg"
                    alt="Mohit Yadav"
                    className="w-74 h-74 md:w-106 md:h-106 lg:w-116 lg:h-116 object-cover object-top rounded-full shadow-2xl border-4 border-blue-500"
                />
            </div>
        </section>
    );
}