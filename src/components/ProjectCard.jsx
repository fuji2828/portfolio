"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, image, images, year }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = images || [image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

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
            className="relative bg-white rounded-lg max-w-5xl w-full max-h-96 flex overflow-hidden"
          >
            {/* Description */}
            <div className="w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900">{title}</h2>
                {year && <p className="text-sm text-gray-500 mb-4">{year}</p>}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <p className="text-xs text-gray-600 font-semibold">
                  {tech}
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="w-1/2 relative bg-gray-100 flex items-center justify-center">
              <img
                src={imageList[currentImageIndex]}
                alt={`${title} ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {imageList.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    {currentImageIndex + 1} / {imageList.length}
                  </div>
                </>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition z-10"
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