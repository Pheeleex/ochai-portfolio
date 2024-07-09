import { useState } from "react"

const contact = () => {
    const [contactForm, setContactForm] = useState({
        email: '',
        fullname: '',
        message: '',
    })
    const handleChange = () => {
        const[name, value] = e.target
        setContactForm(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(contactForm)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input type="email" 
                name="" id="" 
                placeholder="Enter Email" 
                value={contactForm.email} 
                onChange={handleChange}/>

                <input type="text"
                    name="fullname" 
                    placeholder="Enter Fullname" 
                    value={contactForm.fullname}
                    onChange={handleChange} />

                <input type="message" 
                    name="message" 
                    placeholder="Enter Message" 
                    value={contactForm.message}
                    onChange={handleChange}/>
            </form>
        </div>
    )
}
export default contact