import style from '../../style/Category.module.scss';
import BackgroundImage from './BackgroundImage';
const CategoryShow = () =>{
    return (
        <section className={style.CategoryShow} data-scroll-section>
            <div className={style.container}>
                <BackgroundImage image='homeProductCard2'  />
                <BackgroundImage image='homeProductCard1' className={style.largeImageVertical} />
                <BackgroundImage image='homeProductCard4' />
                <BackgroundImage image='homeProductCard3' className={style.topCenter} />
                <BackgroundImage image='homeProductCard6' />
                <BackgroundImage image='homeProductCard5'  className={style.largeImageHorizontal}/>
            </div>
        </section>
    )
}

export default CategoryShow;            