import React from 'react'

export const Contact = () => {
  return (
    <div className='contact-section-wrapper'>
        <div className='contact-frame'>
            <div className='contact-section'>
                <div className='contact-title section-title'>
                  <span style={{fontSize: "3rem"}}>The Nexus of Collaboration</span><br />
                  Contact Me
                  <form className='contact-form' action="https://getform.io/f/ajjrmvka" method="POST">
                    <input type="text" name="name" placeholder='Name' className='contact-name'/>
                    <input type="email" name="email" placeholder='Email' className='contact-email'/>
                    <textarea name="message" placeholder='Message' className='contact-message'/>
                    <button type="submit" className='contact-submit'>Send</button>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}
