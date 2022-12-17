import { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Test = () =>{
    const ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        let sections = gsap.utils.toArray(".page");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                start: "top top",
                trigger: ref.current,
                pin: true,
                invalidateOnRefresh: true,
                scrub: 1,
                end: "+=4000"
            }
        });

        ScrollTrigger.refresh();
    },[]);
    return (
        <>
            <section
                ref={ref}
                style={{
                    height:"100vh",
                    overscrollBehavior:"none"
                    }}
                    >
                <div style={{
                    overscrollBehavior:"none",
                    height:"80vh",
                    padding:"5rem  0",
                    width:'300%', 
                    display:'flex', 
                    flexWrap:'nowrap', 
                    }} 
                    >
                    <div  className='page' style={{background:'red', height:'100%', width:'100%', position:"relative"}}></div>
                    <div className='page' style={{background:'blue', height:'100%', width:'100%', position:"relative"}}></div>
                    <div className='page' style={{background:'green', height:'100%', width:'100%', position:"relative"}}></div>
                </div>
                
            </section>
        </>

    )
}

export default Test