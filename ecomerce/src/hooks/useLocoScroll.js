import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

const useLocoScroll = ({start}) =>{
    useEffect(()=>{
        if(!false) return ;
        let locoScroll = null;
        const ref = document.querySelector('.Home_Home__xmXlj')
        console.log({ref})
        locoScroll = new LocomotiveScroll({
            el:ref,
            smooth:true,
            multiplier:1,
            class:'is-reveal'
        });

        locoScroll.on('scroll', ()=>{
            ScrollTrigger.update()
        })

        ScrollTrigger.scrollerProxy(ref, {
            scrollTop(value){
                if(locoScroll){
                    return arguments.length 
                    ? locoScroll.scrollTo(value, 0, 0) 
                    : locoScroll.scrollTo.instance.scroll.y
                }
                return null;
            },
            scrollLeft(value){
                if(locoScroll){
                    return arguments.length 
                    ? locoScroll.scrollTo(value, 0, 0) 
                    : locoScroll.scrollTo.instance.scroll.x
                }
                return null;
            },
        
        });

        const lsUpdate = () =>{
            if(locoScroll){
                locoScroll.update()
            }
        }

        ScrollTrigger.addEventListener('refresh', lsUpdate);
        ScrollTrigger.refresh()
        return()=>{
            if(locoScroll){
                ScrollTrigger.removeEventListener('refresh', lsUpdate)
                locoScroll.destroy();
                locoScroll = null
            }
        }
    }, [start])
}

export default useLocoScroll