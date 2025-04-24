import React from 'react'

export const Contact = () => {
  return (
    <div className='contact-section-wrapper'>
        <div className='contact-frame'>
            <div className='contact-section'>
                <div className='contact-title section-title'>
                  <span style={{fontSize: "3rem"}}>The Nexus of Collaboration</span><br />
                  Contact Me
                  <form className='contact-form'>
                    <input type="text" placeholder='Name' className='contact-name'/>
                    <input type="email" placeholder='Email' className='contact-email'/>
                    <textarea placeholder='Message' className='contact-message'/>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}
