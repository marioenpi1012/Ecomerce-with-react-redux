import React from 'react'

const Contact = () => {
    return (
        <div className='Contact'>
            <div className="header">
                Get in touch
            </div>
            <div className="container">
                <div className="mini-header">Customer Service</div>
                <div className="line"></div>
                <div className="info">
                    <div className="store">
                        <div className="title">Flagship Store</div>
                        <div className="text">Downtown Houston, Houston, TX</div>
                    </div>
                    <div className="hours">
                        <div className="title">
                            Opening Hours
                        </div>
                        <div className="text">
                            <div>Monday-Friday</div>
                            <div>9:00am - 7:00pm EST</div>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="title">
                            Contact us
                        </div>
                        <div className="text">
                            <div className="number">1-9000-00-000</div>
                            <div className="email">
                                info@store.com</div>
                            </div>
                    </div>
                </div>
                <div className="inquiries">
                    <div className="mini-header">Inquiries</div>
                    <p>
                        For questions regarding our products and services you can also contact us by filling out the form below.
                    </p>
                </div>
                <div className="form">
                    <form action="">
                        <div className='full-name'>
                            <label htmlFor="name">First Name</label>
                            <input type="text" id='input-first-name' className='name'  />
                            <label htmlFor="last-name" id='last-name'>Last Name</label>
                            <input type="text" className='last-name'  />
                        </div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email'/>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name='subject' />
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        <input type="submit" value="Submit" />
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Contact