import Product from "../Product"
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'
import { useRef, useState } from "react"
import Style from '../../style/Slider.module.scss'
// Swiper js
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
SwiperCore.use([Navigation, Pagination])

const Slider = ({data}) =>{
    const items = useRef(null)
    const [translateX, setTranslateX] = useState(0)
    const next = (e) => {
        setTranslateX(translateX - 100)
        items.current.style.transform = `translateX(${translateX}%)`
        console.log({translateX})
    }
    console.log(data.length)
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const paginationRef = useRef(null)
    const customSwiperParams = {
        observer:true,
        observerParents:true,
        navigation:{
            prevEl:navigationPrevRef.current,
            nextEl:navigationNextRef.current,
        },
        pagination:{
            el:paginationRef.current
        },
        loop:true,
        breakpoints:{
            1378:{slidesPerView:5, slidesPerGroup:5},
            998:{slidesPerView:4, slidesPerGroup:4},
            768:{slidesPerView:3, slidesPerGroup:3},
            600:{sliderPerView:1, slidesPerGroup:1}
        },
        spaceBetween:30,
    }
    return (
        <div className={Style.Slider}>
            <div className={Style.container}>
                    <div className="swiper-button-prev" ref={navigationPrevRef} />
                    <div className="swiper-button-next" ref={navigationNextRef} />
                    <div className={`swiper-pagination ${Style.pagination}`} ref={paginationRef} />
                        <Swiper
                            {...customSwiperParams}
                            className={Style.items}
                            onBeforeInit={(swiper)=>{
                                swiper.params.navigation.prevEl = navigationPrevRef.current
                                swiper.params.navigation.nextEl = navigationNextRef.current
                                swiper.params.pagination.el = paginationRef.current
                            }}
                        >
                            {
                                data.map((product)=>(
                                    <SwiperSlide
                                        key={product.id}
                                        >
                                        <Product key={product.id} className={Style.item} product={product} />
                                    </SwiperSlide>
                                    ))
                            }
                        </Swiper>
                            
                
            </div>
        </div>
    )
}

export default Slider