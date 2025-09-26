export const containerVariants = {
  hidden: { opacity: 0, y: 30, transform: "translate3d(0, 30px, 0)" },
  visible: {
    opacity: 1,
    y: 0,
    transform: "translate3d(0, 0, 0)",
    transition: { when: "beforeChildren", staggerChildren: 0.12 },
  },
} as const;

export const itemVariants = {
  hidden: { opacity: 0, y: 20, transform: "translate3d(0, 20px, 0)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    transform: "translate3d(0, 0, 0)",
    transition: { duration: 0.6 } 
  },
  hover: { scale: 1.02, transform: "translate3d(0, 0, 0) scale(1.02)" },
} as const;