import style from '../style/HomeProductCard.module.scss'
import { truncate } from './utils/utils'

const HomeProductCard = ({title, products}) =>{
    return(
        <div className={style.HomeProductCard}>
            <div className={style.container}>
                <div className={style.productsInfo}>
                    <h1 className={style.title}>Featured Products</h1>
                    <p className={style.description}>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Pariatur sit facere provident porro odio,
                        dicta quaerat explicabo, repellat, culpa quas libero voluptates
                        ratione praesentium corrupti.
                    </p>
                </div>
                <div className={style.productsContainer}>
                    {
                        products?.map((product)=>(
                            <div className={style.product} key={product.id}>
                                <div className={style.backgroundImage} style={{backgroundImage:`url(${product.image})`}}></div>
                                <div className={style.productInfo}>
                                    <h2 className={style.title}>{truncate(product.title, 25)}</h2>
                                    <p className={style.price}>${product.price}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default HomeProductCard;