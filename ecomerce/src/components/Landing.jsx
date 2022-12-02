import style from '../style/Landing.module.scss'
import BackgroundImage from './UI/BackgroundImage';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin( ScrollTrigger)
const Landing = () =>{
    const ref = useRef(null)
    useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
        console.log(ref.current.offsetWidth);
        console.log(ref.current.clientWidth);
        console.log({ current: ref.current });
        let sections = gsap.utils.toArray('.Landing_page__T05jg');
        console.log({sections})
        gsap.to(sections, {
            xPercent: - 100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            start: "top top",
            trigger: ref.current,
            scroller: '.Home_Home__xmXlj',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => `+=${ref.current.offsetWidth}`,
            },
        });
        ScrollTrigger.refresh();
        });
    }, []);
    const titles = ["Exclusive Collection", "Narvick's Collection", "Limited Editon"]
    return ( 
        <div className={style.Landing} data-scroll-section   >
            <div className={style.container} ref={ref}  >
                {
                    titles.map((title, i) =>(
                        <div className={style.page} key={i} >
                            <BackgroundImage image={`Landing${i+1}`} className={`${style.image} ${style.imageLeft}`} />
                            <div className={style.collection}>
                                <h1 className={style.title}>
                                    {title}
                                </h1>
                                <p className={style.subtitle}>on sale</p>
                            </div>
                            <BackgroundImage image={`Landing${i+2}`}  className={`${style.image} ${style.imageRight}`} />
                        </div>
                    ))
                }
                {/* <div className={style.page} data-scroll >
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
                <div className={style.page} ref={sectionRef} data-scroll >
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
                <div className={style.page} ref={sectionRef} data-scroll >
                    <div className={style.collection}>
                        <h1 className={style.title}>
                            <span>Limited</span>
                            <span>Edition</span>
                        </h1>
                        <p className={style.subtitle}>on sale</p>
                    </div>
                    <BackgroundImage image='Landing5' className={`${style.image} ${style.imageLeft}`} />
                    <BackgroundImage image='Landing6' className={`${style.image} ${style.imageRight}`} />
                </div> */}
            
            </div>
        </div>
    )
}

export default Landing;