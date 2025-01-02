import { motion } from 'framer-motion';

export const SkillPill = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.1 }}
    className="bg-gradient-to-r from-amber-100 to-amber-200 px-4 py-2 rounded-full text-sm font-medium text-amber-800 shadow-sm hover:shadow-md transition-all duration-300"
  >
    {skill}
  </motion.div>
);