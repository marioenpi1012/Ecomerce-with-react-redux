import React from 'react'
import Style from './Contact.module.scss';
const Contact = () => {
    return (
        <div className={Style.Contact}>
            <div className={Style.header}>
                Get in touch
            </div>
            <div className={Style.container}>
                <div className={Style.miniHeader}>Customer Service</div>
                <div className={Style.line}></div>
                <div className={Style.info}>
                    <div className={Style.store}>
                        <div className={Style.title}>Flagship Store</div>
                        <div className={Style.text}>Downtown Houston, Houston, TX</div>
                    </div>
                    <div className={Style.hours}>
                        <div className={Style.title}>
                            Opening Hours
                        </div>
                        <div className={Style.text}>
                            <div>Monday-Friday</div>
                            <div>9:00am - 7:00pm EST</div>
                        </div>
                    </div>
                    <div className={Style.contact}>
                        <div className={Style.title}>
                            Contact us
                        </div>
                        <div className={Style.text}>
                            <div className={Style.number}>1-9000-00-000</div>
                            <div className={Style.email}>
                                info@store.com</div>
                            </div>
                    </div>
                </div>
                <div className={Style.inquiries}>
                    <div className={Style.miniHeader}>Inquiries</div>
                    <p>
                        For questions regarding our products and services you can also contact us by filling out the form below.
                    </p>
                </div>
                <div className={Style.form}>
                    <form action="">
                        <div className={Style.fullName}>
                            <label htmlFor="name">First Name</label>
                            <input type="text" id='input-first-name' className={Style.name}  />
                            <label htmlFor="last-name" id='last-name'>Last Name</label>
                            <input type="text"   />
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