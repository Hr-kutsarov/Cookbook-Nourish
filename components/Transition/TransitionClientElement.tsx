'use client';
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface TransitionElementProps {
    children: React.ReactNode
}

// slide top to bottom and back, twice

const transitionVariants = {
    initial: {
        y: '100%',
        height: '100%'
    },
    animate: {
        y: '0%',
        height: '0%'
    },
    exit: {
        y: ['0%', '100%'],
        height: ['0%', '100%']
    }
}

const TransitionClientElement: React.FC<TransitionElementProps> = ({children}) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={pathname} className='h-full'>
                <motion.div
                    className='fixed left-0 right-0 bottom-full w-screen z-30 bg-slate-100/10'
                    variants={transitionVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
                >

                </motion.div>
            {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default TransitionClientElement;