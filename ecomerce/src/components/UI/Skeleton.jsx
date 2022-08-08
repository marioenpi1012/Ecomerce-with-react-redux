import React from 'react'
import Style from '../../style/Skeleton.module.scss'
const Skeleton = () => {
    const items = [];
    for(let i = 0; i < 20; i++){
        items.push(<div key={i} className={Style.skeletonItem} />)
    }
    return (
                <div className={Style.skeletonShop}>
                    <div className={Style.skeletonFilter}></div>
                    <div className={Style.skeletonFilter}></div>
                    <div className={Style.skeletonProduct}>
                        <div className={Style.skeletonContainer}>
                            <div className={Style.skeletonItems}>
                                {items}
                            </div>
                        </div>
                    </div>
                    
                </div>
    )
}

export default Skeleton     