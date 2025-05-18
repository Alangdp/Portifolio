import { motion } from "framer-motion"

interface BodyProps {
  children: React.ReactNode
}

export default function Body({ children }: BodyProps) {
  return(
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.5 } }}  className="w-full h-full relative xl:min-h-screen select-none">
      { children }
    </motion.div>
  )
}