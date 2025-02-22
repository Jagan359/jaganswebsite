import { motion } from "framer-motion";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        className="text-6xl font-bold"
      >
        🚧
      </motion.div>
      <h1 className="text-3xl font-semibold mt-4">Under Construction</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1, 0, 1, 1] }}
        transition={{ duration: 2, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1], repeat: Infinity, repeatDelay: 0.5 }}
        className="mt-4 text-2xl text-blue-400"
      >
        Jagan's Web App
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="mt-2 text-gray-400"
      >

        Coming Soon...
      </motion.p>
    </div>
  );
}
