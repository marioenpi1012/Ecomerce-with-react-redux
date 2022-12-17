import style from '../style/HomeProductCard.module.scss'
import Product from './Product';
import { truncate } from './utils/utils'

const HomeProductCard = ({title, products}) =>{
    return(
        <section className={style.HomeProductCard} data-scroll-section>
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
                            <Product key={product.id} product={product}/>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default HomeProductCard;