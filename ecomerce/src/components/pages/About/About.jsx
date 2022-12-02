import React from 'react'
import Logo from '../../../assets/images/logo.jpg'
import Designer from '../../../assets/images/designers.jpg'
import { motion } from 'framer-motion/dist/framer-motion'

const About = () => {
    const variants = {
        offscreen:{

        },
        onscreen:{
            position:"sticky",
            top:0,

        }
    }
    const pageVariants={
        hidden:{
            opacity:0,
            x:"100vw"
        },
        start:{
            opacity:1,
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.4,
                duration:1
            }
        },
        exit:{
            x: "-100vw",
            transition:{
                ease:"easeInOut",
                duration:1
            }
        }
    }
    return (
        <motion.div 
            className='About'
            initial='hidden'
            animate='start'
            exit='exit'
            variants={pageVariants}
            >
            <div className="header">Our Story</div>
            <div className="container">
                <motion.div 
                    className="brand"
                    variants={variants}
                    initial="offscreen"
                    whileInView="onscreen"
                    >
                    <div className="title">The brand</div>
                    <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur atque quasi pariatur modi consequatur minus placeat doloremque, sed possimus repellat reiciendis deserunt beatae mollitia.</p>
                    <p>Hic cumque quas autem dolore quaerat in eligendi rem? Ab vitae odio voluptatum iste soluta esse ratione ipsa. Deserunt quae error non, iure laboriosam amet.</p>
                </motion.div>
                <motion.div 
                    variants={variants}
                    initial="offscreen"
                    whileInView="onscreen"
                    className="image"
                    style={{backgroundImage:`url("${Logo}")`}}
                    
                    >
                </motion.div>
                <motion.div 
                    className="designers"
                    variants={variants}
                    initial="offscreen"
                    whileInView="onscreen"
                    >
                    <div className="title">The Designers</div>
                    <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minima unde laudantium esse recusandae optio porro, sunt deserunt blanditiis voluptates vero asperiores quam cumque officia.</p>
                    <p>Reiciendis quas consequuntur eligendi aliquam ab nulla officiis esse molestias ullam cupiditate praesentium doloremque atque dolorem, illum, fuga nihil? Tempora error earum nemo debitis labore!</p>
                </motion.div>
                <motion.div
                    className="image" 
                    id='designer-image' 
                    variants={variants}
                    initial="offscreen"
                    whileInView="onscreen"
                    style={{backgroundImage:`url("${Designer}")`}}
                >
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About