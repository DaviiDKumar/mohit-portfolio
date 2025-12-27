import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-28 px-6 bg-blue-600 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Heading on left */}
        <div className="md:w-1/3 ">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 md:mb-0">
            About Me
          </h2>
          <h3 className="text-xl md:text-2xl text-blue-100 mt-6 leading-relaxed italic">
            "Bridging the gap between molecular theory and laboratory precision, I focus on understanding cancer cell viability to drive therapeutic breakthroughs."
          </h3>
        </div>

        {/* Content on right */}
        <div className="md:w-2/3 text-gray-100 text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            I'm <span className="font-semibold text-white">Mohit Kumar Yadav</span>, a 
            <strong> Master of Science (Life Science)</strong> graduate from Rajasthan University.
          </p>

          <p>
            My specialized research involves <strong>Oncology</strong>, specifically studying the 
            <strong> impact of Metformin on breast cancer progression</strong> and growth inhibition mechanisms.
          </p>

          <p>
            As a <strong>Research Professional</strong>, I am dedicated to laboratory excellence, 
            mechanistic investigations, and contributing to high-impact scientific publications.
          </p>

          {/* Cards Section */}
          <div className="mt-12 grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl text-blue-600 font-bold mb-2">Academic Profile</h3>
              <p className="text-gray-700 text-sm">M.Sc in Life Science, Rajasthan University (Completed)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl text-blue-600 font-bold mb-2">Research Focus</h3>
              <p className="text-gray-700 text-sm">Breast Cancer & Metformin's role in AMPK pathway activation.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl text-blue-600 font-bold mb-2">Publication</h3>
              <p className="text-gray-700 text-sm italic">"The Impact of Metformin on Breast Cancer Progression: A Review..."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}