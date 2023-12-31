'use client'

import { useCallback, useState } from "react";
import useLoginModal from '@/hooks/authModal';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
    isOpen: boolean;
    onSubmit?: () => void;
    onClose?: () => void;
    title?: string;
    children?: React.ReactNode;
}

const LoginModal: React.FC<ModalProps> = ({
    isOpen,
    title,
    children,
    onSubmit,
    onClose
}) => {
    const handler = useLoginModal();

    return (
    <>
    {handler.isOpen && (
        <motion.div 
        initial={{opacity: 0, y: '-100vh'}}
        animate={{opacity: 1, y: '0'}}
        transition={{
            duration: 0.4,
            type: "spring",
            bounce: 0.15,
        }}
        className="
            flex 
            flex-col 
            justify-center
            bg-slate-50
            p-8
            w-[86%]
            backdrop:blur-md
            md:w-[73%]
            lg:w-[41%]
            rounded-md
            absolute
            "
        >
            <span 
            className="flex flex-col items-end cursor-pointer text-slate-500 hover:text-rose-700"
            onClick={onClose}>
                <IoMdClose size={28}/>
            </span>
            {children}
        </motion.div>
    )}
    </>
    )
}

export default LoginModal;