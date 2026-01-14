'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../components/ThemeContext'

export function DarkModeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-slate-200 rounded-full p-1">
        <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
          <Sun className="w-4 h-4 text-yellow-500" />
        </div>
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-slate-200 dark:bg-slate-700 rounded-full p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-slate-900 rounded-full shadow-md flex items-center justify-center"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
        style={{
          x: theme === 'dark' ? 24 : 0
        }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: theme === 'dark' ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {theme === 'light' ? (
            <Sun className="w-4 h-4 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 text-blue-400" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}