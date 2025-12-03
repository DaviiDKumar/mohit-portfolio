// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-28 px-6 bg-blue-500 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Heading on left */}
        <div className="md:w-1/3 ">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 md:mb-0">
            About Me
          </h2>
          <h2 className=" text-white mt-6 mb-6 md:mb-0">
          "Bridging the gap between molecular theory and laboratory precision, I focus on understanding cancer cell viability to drive therapeutic breakthroughs."
          </h2>
        </div>

        {/* Content on right */}
        <div className="md:w-2/3 text-gray-100 text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            I'm <span className="font-semibold">Mohit Yadav</span>, currently pursuing 
            <strong> Master of Science in Life Science</strong> from Rajasthan University.
          </p>

          <p>
            My ongoing research focuses on <strong>Breast Cancer</strong> and 
            studying the <strong>impact of Metformin on cancer cell viability and growth inhibition</strong>.
          </p>

          <p>
            I am a dedicated <strong>Research Trainee</strong>, passionate about laboratory experiments, 
            data analysis, and scientific collaborations to contribute to impactful research.
          </p>

          {/* Cards Section */}
          <div className="mt-12 grid grid-cols-1 text-black md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl text-blue-500 font-bold mb-2">Education</h3>
              <p>Master of Science in Life Science, Rajasthan University</p>
            </div>

            <div className="bg-white  p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl text-blue-500 font-bold mb-2">Research Focus</h3>
              <p>Breast Cancer & Metformin Impact on Cancer Cell Viability</p>
            </div>

            <div className="bg-white  p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl text-blue-500 font-bold mb-2">Skills</h3>
              <p>Laboratory Experiments, Data Analysis, Scientific Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
