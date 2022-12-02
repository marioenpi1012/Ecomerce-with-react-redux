import React from 'react'
import Style from './Contact.module.scss';
import AnimatedComponent from '../../UI/AnimatedComponent';
import { motion } from 'framer-motion'
const Contact = () => {
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
        <AnimatedComponent className={Style.Contact}>
            <section className={Style.container}>
                <div className={Style.form}>
                    <h1 className={Style.header}>
                        Love to hear from you, <br />
                        Get in touch 👋
                    </h1>
                    <form>
                        <div className={Style.personalInformation}>
                            <div className={Style.fullName}>
                                <label htmlFor="name">Your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className={Style.email}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email'/>
                            </div>
                        </div>
                        <div className={Style.message}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <motion.input 
                            type="button"
                            value="Submit" 
                            whileTap={{scale:0.9}}
                            whileHover={{scale:1.1}}
                        />
                    </form>
                </div>
            </section>
        </AnimatedComponent>
    )
}

export default Contact