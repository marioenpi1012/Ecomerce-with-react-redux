import React from 'react'
import Logo from '../images/logo.jpg'
import Designer from '../images/designers.jpg'
const About = () => {
    return (
        <div className='About'>
            <div className="header">Our Story</div>
            <div className="container">
                <div className="brand">
                    <div className="title">The brand</div>
                    <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur atque quasi pariatur modi consequatur minus placeat doloremque, sed possimus repellat reiciendis deserunt beatae mollitia.</p>
                    <p>Hic cumque quas autem dolore quaerat in eligendi rem? Ab vitae odio voluptatum iste soluta esse ratione ipsa. Deserunt quae error non, iure laboriosam amet.</p>
                </div>
                <div className="image"
                    style={{backgroundImage:`url("${Logo}")`}}
                >
                </div>
                <div className="designers">
                <div className="title">The Designers</div>
                <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minima unde laudantium esse recusandae optio porro, sunt deserunt blanditiis voluptates vero asperiores quam cumque officia.</p>
                    <p>Reiciendis quas consequuntur eligendi aliquam ab nulla officiis esse molestias ullam cupiditate praesentium doloremque atque dolorem, illum, fuga nihil? Tempora error earum nemo debitis labore!</p>
                </div>
                <div className="image" id='designer-image' 
                    style={{backgroundImage:`url("${Designer}")`}}
                >
                </div>
            </div>
        </div>
    )
}

export default About