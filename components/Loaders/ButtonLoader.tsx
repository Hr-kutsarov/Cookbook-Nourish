'use client'

import { IconType } from "react-icons";
import { motion } from 'framer-motion'
import { twMerge } from "tailwind-merge";
import { BiSearch } from "react-icons/bi";
import {RxStar} from 'react-icons/rx'

// Used as a loading button?
const ButtonLoader: React.FC = () => {
    return (
        <motion.div
        className={twMerge('blur-12')}
        initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration:1.8, delay: 0.2, repeat: Infinity}}
      >
        <RxStar 
              size={24} 
            />
      </motion.div>
    )
}

export default ButtonLoader;