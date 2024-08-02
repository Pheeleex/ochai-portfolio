import React, { ChangeEvent, FormEvent, useState } from "react"


interface ContactForm {
    email: string;
    fullname: string;
    message: string;
  }
const Contact: React.FC = () => {
    const [contactForm, setContactForm] = useState<ContactForm>({
        email: '',
        fullname: '',
        message: '',
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setContactForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
    }

     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(contactForm);
  };

    return(
        <div className="form-container flex flex-col justify-center items-center h-screen mt-32 md:mt-36">
                <h1 className="text-3xl my-8 text-white">I would love to hear from you</h1>
    <form onSubmit={handleSubmit} className="form-grid flex flex-col gap-4 w-full max-w-lg border  border-white">
        <div className="form-group flex">
            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={contactForm.email}
                onChange={handleChange}
                className="form-input w-full p-4 bg-transparent border-b border-r outline-none text-white"
            />
            <input
                type="text"
                name="fullname"
                placeholder="Enter Fullname"
                value={contactForm.fullname}
                onChange={handleChange}
                className="form-input w-full p-4 bg-transparent border-b outline-none text-white"
            />
        </div>
        <textarea
            name="message"
            placeholder="Enter Message"
            value={contactForm.message}
            onChange={handleChange}
            className="form-textarea w-full p-4 col-span-2 h-40 resize-none bg-transparent outline-none text-white"
        />
        <button className="bg-transparent border border-white-400 p-2 w-[200px] m-4 text-white cursor-pointer" type="submit">
            Send Message
        </button>
    </form>
</div>

    )
}
export default Contact