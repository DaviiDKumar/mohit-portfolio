import React from 'react';

const MetforminResearch = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900" id="research-highlight">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Research & Publication
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Paper Content Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700">
          <div className="p-8 md:p-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full mb-4">
              Scientific Review
            </span>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              The Impact of Metformin on Breast Cancer Progression: A Review of Recent Studies
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-gray-600 dark:text-gray-300">
              <div className="md:col-span-2">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 italic">Abstract & Findings</h4>
                <p className="mb-4 leading-relaxed">
                  This review synthesizes recent clinical and preclinical evidence regarding the anti-neoplastic properties of Metformin. Beyond its role in glucose management, the study explores its ability to activate the <strong>AMPK pathway</strong>, leading to the inhibition of <strong>mTOR signaling</strong>—a critical driver in breast cancer cell proliferation.
                </p>
                <p className="leading-relaxed">
                  Key outcomes highlighted include reduced tumor latency in HER-2/neu models and significant improvements in overall survival (OS) for diabetic patients undergoing adjuvant therapy.
                </p>
              </div>

              {/* Quick Info Sidebar */}
              <div className="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase mb-4 tracking-widest">
                  Key Insights
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✔</span> mTOR Inhibition
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✔</span> Insulin Sensitization
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✔</span> Reduced Metastasis Risk
                  </li>
                </ul>
                
                <a 
                  href="https://www.academia.edu/144624522/The_Impact_of_Metformin_on_Breast_Cancer_Progression_A_Review_of_Recent_Studies_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Read Full Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetforminResearch;