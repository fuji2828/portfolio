"use client";

import { motion } from "framer-motion";

export default function PassionCard({ title, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl overflow-hidden shadow-lg cursor-pointer relative h-96"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-end justify-start p-4">
        <h3 className="text-white font-bold text-2xl">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
