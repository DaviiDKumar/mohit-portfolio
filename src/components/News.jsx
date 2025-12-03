// src/components/News.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// Ensure these match your actual file names in the public folder
const newsItems = [
  { id: 1, src: "/news-0.jpg", alt: "International Journal Certificate" },
  { id: 2, src: "/news-1.jpg", alt: "Newspaper Clipping Hindi" },
  { id: 3, src: "/news-2.jpg", alt: "Social Media Feature" },
  { id: 4, src: "/news-3.jpg", alt: "Research Feature" },
];

const News = () => {
  const [selectedId, setSelectedId] = useState(null);

  // --- Navigation Logic ---
  const navigate = useCallback((direction) => {
    setSelectedId((prev) => {
      if (prev === null) return null;
      if (direction === "next") {
        return prev === newsItems.length ? 1 : prev + 1;
      } else {
        return prev === 1 ? newsItems.length : prev - 1;
      }
    });
  }, []);

  // --- Keyboard Support (Arrow Keys + Escape) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedId) return;
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "Escape") setSelectedId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, navigate]);

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-950 relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-blue-900/10">
            <Newspaper className="w-3 h-3" />
            <span>Media Coverage</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Insights</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of international journal publications, press clippings, and digital media features recognizing contributions to Oncology.
          </p>
        </motion.div>
      </div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {newsItems.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-container-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative cursor-pointer"
          >
            {/* Glass Border Container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group-hover:border-blue-500/30 group-hover:shadow-blue-500/20 transition-all duration-500 h-80">
              
              {/* Image */}
              <motion.img
                layoutId={`card-image-${item.id}`}
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                   <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 w-12 bg-blue-500 rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL SCREEN MODAL WITH NAVIGATION */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="relative z-10 max-w-6xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image container
            >
              
              {/* --- Navigation Buttons --- */}
              
              {/* Left Arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
                className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-blue-500 hover:border-blue-500 transition-all z-20 hidden md:block"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); navigate("next"); }}
                className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-blue-500 hover:border-blue-500 transition-all z-20 hidden md:block"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-12 right-0 md:right-0 p-3 bg-white/10 border border-white/20 text-white rounded-full hover:bg-red-500/80 hover:border-red-500 transition-colors backdrop-blur-md z-30"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Active Image */}
              {newsItems.map((item) => {
                if (item.id !== selectedId) return null;
                return (
                  <div key={item.id} className="relative w-full flex flex-col items-center">
                    <motion.img
                      layoutId={`card-image-${item.id}`}
                      src={item.src}
                      alt={item.alt}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl shadow-black border border-slate-800 bg-slate-900"
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6 text-center"
                    >
                      <h3 className="text-white text-lg font-bold tracking-wide">
                        {item.alt}
                      </h3>
                      <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest">
                        Gallery {item.id} / {newsItems.length}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default News;