import BackgroundImage from "./BackgroundImage";
import Style from '../../style/Banner.module.scss'
const Banner = ({image, title}) =>{
    return (
        <div className={Style.Banner}>
            <div className={Style.imageWrapper}>
                <img src={image}  alt=""  width="100%" height="100%" />
            </div>
            <div className={Style.container}>
                <h1 className={Style.title}>
                    <span>{title}</span> New Collection
                </h1>
                <div className={Style.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>
    )
}

export default Banner;