// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Mohit Yadav. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
