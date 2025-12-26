import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Microscope, Dna, Activity, FlaskConical, FileText, Beaker, Search } from "lucide-react";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const educationData = [
    {
      degree: "Master of Science (M.Sc) - Life Science",
      university: "Rajasthan University",
      period: "Completed",
      description: "Specializing in Oncology. Conducting in-depth research on the impact of Metformin on cancer cell viability and growth inhibition.",
      icon: <Dna className="w-6 h-6 text-blue-600" />,
    },
    {
      degree: "Bachelor of Science (B.Sc)",
      university: "Rajasthan University",
      period: "Completed",
      description: "Graduated with distinction. Built strong foundations in molecular biology, research methodologies, and organic chemistry.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    },
  ];

  const researchItems = [
    {
      title: "Metformin & Oncology",
      desc: "Investigating the molecular mechanisms by which Metformin influences breast cancer progression via AMPK pathway activation.",
      icon: <Microscope className="w-6 h-6 text-blue-600" />,
      tag: "Main Research"
    },
    {
      title: "Cell Proliferation",
      desc: "Analyzing the inhibitory effects of biguanides on mTOR signaling in various cancer cell lines.",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      tag: "Analysis"
    },
    {
      title: "Lab Methodologies",
      desc: "Applying PCR, ELISA, and advanced microscopy to quantify protein expression and cellular changes.",
      icon: <Beaker className="w-6 h-6 text-blue-600" />,
      tag: "Lab Work"
    }
  ];

  const skills = [
    "Life Science Research",
    "Cancer Cell Studies",
    "Mechanistic Investigation",
    "Data Analysis",
    "Lab Techniques (PCR, ELISA)",
    "Scientific Reporting",
    "Cell Culture",
    "Microscopy",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section 
      ref={containerRef} 
      id="experience"  /* Changed ID to match Navbar */
      className="relative w-full bg-slate-50 overflow-hidden py-24 px-6 md:px-12"
    >
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-32">
        
        {/* Education Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-16">
            Academic <span className="text-blue-600">Journey</span>
          </motion.h2>

          <div className="relative border-l-4 border-blue-100 ml-4 md:ml-1/2 space-y-12">
            {educationData.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative pl-8 md:pl-12">
                <div className="absolute -left-3.5 top-1 bg-white border-4 border-blue-500 w-6 h-6 rounded-full shadow-md z-10"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 relative group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">{item.icon}</div>
                      <h3 className="text-xl font-bold text-slate-800">{item.degree}</h3>
                    </div>
                    <span className="mt-2 md:mt-0 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full w-fit">
                      {item.university} • {item.period}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-16">
            Research <span className="text-blue-600">Focus</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchItems.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl border border-blue-100">{item.icon}</div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded">{item.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-4xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Technical <span className="text-blue-600">Expertise</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 mb-12">Methods and tools utilized in laboratory environments.</motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-700 font-medium hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default flex items-center gap-2">
                <FileText className="w-4 h-4 opacity-50" />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;