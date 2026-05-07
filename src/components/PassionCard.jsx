"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PassionCard({ title, image, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="rounded-2xl overflow-hidden shadow-lg cursor-pointer relative h-96"
      >
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-start p-4">
          <h3 className="text-white font-bold text-2xl">
            {title}
          </h3>
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg max-w-4xl w-full flex overflow-hidden"
          >
            {/* image */}
            <div className="w-1/2 flex-shrink-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* description */}
            <div className="w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-700">{title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {description}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
