import style from '../style/Landing.module.scss'
import BackgroundImage from './UI/BackgroundImage';
import { useEffect, useRef } from 'react';
import { gsap }  from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";


const Landing = () =>{
    const ref = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(`.${style.page}`);

        const ctx = gsap.context(()=>{
            gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                start:"top top",
                trigger: ref.current,
                pin: true,
                invalidateOnRefresh: true,
                scrub: 1,
                end: "+=" + ref.current.offsetWidth
            }
        });

        })
        

        return () => ctx.revert();
    },[]);

    return (
        <>
            <div className={style.Landing} ref={ref} >
                <div className={style.container} >
                    <div className={style.page} >
                        <BackgroundImage image='Landing1' className={`${style.image} ${style.imageLeft}`} />
                        <div className={style.collection}>
                            <h1 className={style.title}>
                                <span>Exclusive</span>
                                <span>Collection</span>
                            </h1>
                            <p className={style.subtitle}>on sale</p>
                        </div>
                        <BackgroundImage image='Landing2' className={`${style.image} ${style.imageRight}`} />
                    </div>
                    <div className={style.page}   >
                        <BackgroundImage image='Landing3' className={`${style.image} ${style.imageLeft}`} />

                        <div className={style.collection}>
                            <h1 className={style.title}>
                                <span>Narvick's</span>
                                <span>Collection</span>
                            </h1>
                            <p className={style.subtitle}>on sale</p>
                        </div>
                        <BackgroundImage image='Landing4' className={`${style.image} ${style.imageRight}`} />
                    </div>
                    <div className={style.page}   >
                        <BackgroundImage image='Landing5' className={`${style.image} ${style.imageLeft}`} />
                        <div className={style.collection}>
                            <h1 className={style.title}>
                                <span>Limited</span>
                                <span>Edition</span>
                            </h1>
                            <p className={style.subtitle}>on sale</p>
                        </div>
                        <BackgroundImage image='Landing6' className={`${style.image} ${style.imageRight}`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;