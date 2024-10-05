'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react'

export function Footer() {
  const [showHowItWorks, setShowHowItWorks] = useState(false)

  return (
    <footer className="p-4 text-center">
      <button 
        className="text-sm text-gray-400 hover:text-white transition-colors pb-1 border-b border-transparent hover:border-gray-400"
        onClick={() => setShowHowItWorks(!showHowItWorks)}
      >
        How It Works
      </button>
      <AnimatePresence>
        {showHowItWorks && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 text-sm text-gray-400"
          >
            <ol className="list-decimal list-inside space-y-2 max-w-md mx-auto">
              <li>A new challenge topic is announced every week</li>
              <li>Take a photo that fits the theme</li>
              <li>Upload your photo before the deadline</li>
              <li>Vote for your favorite submissions</li>
              <li>Winners are featured on our leaderboard</li>
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}