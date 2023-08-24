'use client'

import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'

import logo from '@/app/logo.svg'

export default function Loading() {

  let [xParam, setXParam] = useState(120)

  const onClick = () => {
    setXParam(Math.random()*500 - 140)
  }

  const basicFullScreen = 'flex flex-row w-full h-full min-h-[100vh] items-center justify-center bg-'
  const sectionPadding = 'p-4'
  const boxStyles = 'flex h-auto auto aspect-square items-center justify-center text-4xl p-2'
  const h1Styles = 'flex text-8xl'

  return (
    <section className={twMerge(basicFullScreen, sectionPadding)}>
          <div className={twMerge('flex flex-row max-w-[240px] flex-wrap relative group')}>
          <motion.div
            className={twMerge(boxStyles)}
            initial={{y: '12vh', opacity: 0}}
              animate={{y: xParam, opacity: 1}}
              transition={{duration:0.4}}
              onClick={onClick}
              >
                <h1 className={twMerge(h1Styles, 'text-green-400 italic')}>N</h1>
          </motion.div>
          <motion.div
            className={twMerge(boxStyles)}
            initial={{y: '24vh', opacity: 0}}
              animate={{y: xParam, opacity: 1}}
              transition={{duration:0.4}}
              onClick={onClick}
              >
                <h1 className={twMerge(h1Styles, 'text-green-500')}>O</h1>
          </motion.div>
          <motion.div
            className={twMerge(boxStyles)}
            initial={{y: '32vh', opacity: 0}}
              animate={{y: xParam, opacity: 1}}
              transition={{duration:0.5}}
              onClick={onClick}
              >
                <h1 className={twMerge(h1Styles, 'text-green-600')}>U</h1>
          </motion.div>
          <motion.div
            className={twMerge(boxStyles)}
            initial={{y: '48vh', opacity: 0}}
              animate={{y: xParam, opacity: 1}}
              transition={{duration:0.7}}
              onClick={onClick}
              >
                <h1 className={twMerge(h1Styles, 'text-teal-800')}>R</h1>
          </motion.div>
          <motion.div
            className={twMerge(boxStyles)}
            initial={{y: '6vh', opacity: 0}}
              animate={{y: xParam, opacity: 1}}
              transition={{duration:0.6, delay: 0.6}}
              onClick={onClick}
              >
                <h1 className={twMerge(h1Styles, 'text-teal-600 italic')}>I</h1>
          </motion.div>
          <motion.div
            className={twMerge(boxStyles)}
            initial={{y: '60vh', opacity: 0}}
              animate={{y: xParam, opacity: 1}}
              transition={{duration:0.6, delay: 0.1}}
              onClick={onClick}
              >
                <h1 className={twMerge(h1Styles, 'text-teal-800')}>S</h1>
          </motion.div>
          <motion.div
            className={twMerge(boxStyles)}
            initial={{y: '72vh', opacity: 0}}
              animate={{y: xParam, opacity: 1}}
              transition={{duration:0.6, delay: 0.3}}
              onClick={onClick}
              >
                <h1 className={twMerge(h1Styles, 'text-teal-900')}>H</h1>
          </motion.div>

          <motion.div
            className={twMerge(boxStyles)}
            initial={{rotate: 360, opacity: 0.1}}
              animate={{rotate: 0, opacity: 0.2}}
              transition={{duration:24, delay: 0, repeat: Infinity}}
              exit={{opacity: 0}}
              onClick={onClick}
              >
                <Link className={twMerge(h1Styles, 'relative -mt-40 text-green-600')} href='/'>
                <Image src={logo} alt='logo-floater'/>
                </Link>
          </motion.div>

          <motion.div
            className={twMerge(boxStyles)}
            initial={{rotate: 0, opacity: 0.1}}
              animate={{rotate: 360, opacity: 0.2}}
              transition={{duration:18, delay: 0.6, repeat: Infinity}}
              exit={{opacity: 0}}
              onClick={onClick}
              >
                <Link className={twMerge(h1Styles, 'relative -mt-24 text-green-600')} href='/'>
                  <Image src={logo} alt='logo-floater'/>
                </Link>
          </motion.div>
          
          </div>

    </section>
  )
}