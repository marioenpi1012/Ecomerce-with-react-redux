import React from 'react'

const Skeleton = () => {
    const items = [];
    for(let i = 0; i < 20; i++){
        items.push(<div key={i} className="skeletonItem" />)
    }
    
    return (
                <div className="skeletonShop">
                    <div className="skeletonFilter"></div>
                    <div className="skeletonFilter"></div>
                    <div className="skeletonProduct">
                        <div className="skeletonContainer">
                            <div className="skeletonItems">
                                {items}
                            </div>
                        </div>
                    </div>
                    
                </div>
    )
}

export default Skeleton     