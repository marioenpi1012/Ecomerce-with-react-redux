import React from "react";
import { motion } from "framer-motion";

const AnimatedComponent = ({children, className = ''}) =>{
    const pageVariants = {
        initial:{
            opacity:0
        },
        animate:{
            opacity:1
        },
        exit:{
            opacity:0
        }
    }
    return (
        <motion.main
            initial='initial'
            animate='animate'
            exit='exit'
            variants={pageVariants}
            transition={{duration:1}}
            className={className}
        >
            {children}
        </motion.main>
    )
}

export default AnimatedComponent