import React from 'react'
import '../styles/Contact.css'
import Tanjiro from '../assets/rengoku.jpg'

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${Tanjiro})` }}>

            </div>
            <div className='rightSide'>
                <h1>Contact</h1>
                <form id='contact-form' method='POST'>

                    <label htmlFor='name'>Full Name</label>
                    <input name='name' type='text' placeholder='Enter your Full Name' />
                    <label htmlFor='email'>E-mail Address</label>
                    <input name='email' type='text' placeholder='Enter your E-mail Address' />
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' placeholder='Enter your Message'></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact