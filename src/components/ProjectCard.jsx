"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, image }) {

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
    >

      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="text-black font-semibold">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">
          {description}
        </p>

        <p className="text-xs text-gray-500 mt-3">
          {tech}
        </p>

      </div>

    </motion.div>
  );
}