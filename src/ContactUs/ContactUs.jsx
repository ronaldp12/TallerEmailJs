import React, {useRef} from 'react'
import './ContactUs.css'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {

    const refForm = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()

        const serviceId = 'service_3llzivd'
        const templateId = 'template_e8rluw8'

        const apiKey = '3ZRRq7XsijGIEh1Wj'

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then(result => 
            console.log(result.text))
        .catch(error => 
            console.log(error.text)
        )
    }

  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div>
            <h2>Contact Us</h2>
            <p>Please fill this form</p>
        </div>
        <fieldset>
            <label htmlFor="">Name</label>
            <input name='username' type="text" placeholder='Ej: Ronald Patiño' required/>
        </fieldset>

        <fieldset>
            <label htmlFor="">Email</label>
            <input type="email" name='email' id='email' placeholder='Ej: ronald@gmail.com' />
        </fieldset>

        <fieldset>
            <label htmlFor="">Email</label>
            <textarea placeholder='type your message' maxLength="500" name="message" id="message"></textarea>
        </fieldset>

        <button>Send</button>
    </form>
  )
}

