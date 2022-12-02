import style from '../style/Landing.module.scss'
import BackgroundImage from './UI/BackgroundImage';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin( ScrollTrigger)
const Landing = () =>{
    const ref = useRef(null)
    const sectionRef = useRef(null)
    useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
        console.log(ref.current.offsetWidth);
        console.log(ref.current.clientWidth);
        console.log({ current: ref.current });
        let sections = gsap.utils.toArray(sectionRef.current);
        console.log({sections})
        gsap.to(sections, {
            xPercent: - 100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            start: "top top",
            trigger: ref.current,
            scroller:  style.Home,
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => `+=${ref.current.offsetWidth}`,
            },
        });
        ScrollTrigger.refresh();
        });
    }, []);
    return ( 
        <div className={style.Landing} data-scroll-section   >
            <div className={style.container} ref={ref}  >
                <div className={style.page} >
                    <div className={style.collection}>
                        <h1 className={style.title}>
                            <span>Exclusive</span>
                            <span>Collection</span>
                        </h1>
                        <p className={style.subtitle}>on sale</p>
                    </div>
                    <BackgroundImage image='Landing1' className={`${style.image} ${style.imageLeft}`} />
                    <BackgroundImage image='Landing2' className={`${style.image} ${style.imageRight}`} />
                </div>
                <div className={style.page} ref={sectionRef} >
                    <div className={style.collection}>
                        <h1 className={style.title}>
                            <span>Narvick's</span>
                            <span>Collection</span>
                        </h1>
                        <p className={style.subtitle}>on sale</p>
                    </div>
                    <BackgroundImage image='Landing3' className={`${style.image} ${style.imageLeft}`} />
                    <BackgroundImage image='Landing4' className={`${style.image} ${style.imageRight}`} />
                </div>
                <div className={style.page} >
                    <div className={style.collection}>
                        <h1 className={style.title}>
                            <span>Limited</span>
                            <span>Edition</span>
                        </h1>
                        <p className={style.subtitle}>on sale</p>
                    </div>
                    <BackgroundImage image='Landing5' className={`${style.image} ${style.imageLeft}`} />
                    <BackgroundImage image='Landing6' className={`${style.image} ${style.imageRight}`} />
                </div>
            
            </div>
        </div>
    )
}

export default Landing;