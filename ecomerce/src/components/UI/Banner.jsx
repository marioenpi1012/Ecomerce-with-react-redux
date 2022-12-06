import BackgroundImage from "./BackgroundImage";
import Style from '../../style/Banner.module.scss'
const Banner = ({image}) =>{
    return (
        <div className={Style.Banner}>
            <div className={Style.imageWrapper}>
                <BackgroundImage image={image} className={Style.image} />
            </div>
            <div className={Style.container}>
                <h1 className={Style.title}>New Collection</h1>
                <div className={Style.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>
    )
}

export default Banner;