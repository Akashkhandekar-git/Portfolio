import Email from "../../assets/mail_icon.svg"
import Mobile from "../../assets/call_icon.svg"
import Location from "../../assets/location_icon.svg"
import "./Contact.css";
import { useState } from "react";


const Contact = () => {

    const [contactFormData, setContactFormData] = useState({

        name:"",
        email:"",
        message:""

    })

    const handleFormData =(e)=>{
        const {name, value} = e.target;
        setContactFormData((prevData)=> ({...prevData, [name] : value }))

    }

    const handleFormSubmit =(e)=>{
        e.preventDefault();
        const {name, email , message} =  contactFormData
        alert(`Name: ${name} \nEmail: ${email} \nMessage: ${message}`)

    }




  return (
    <>

     <div id="contact" className='container'>
        <div className='row'>
            <div className="col contact">
                <div className='Contact_Title'>
            <h1>Get in touch</h1>
        </div>

        <div className='d-flex'>
            <div className='Contact_left col-5 me-5'>

                <h1>Let's talk</h1>

                <p>
                    I'm currently available to take on new project,
                    so feel free to send me a message about anything that you want me to work on.
                    You can contact anytime.
                </p>

                    <div className='Contact_Left_Detail'>
                        <img className='email' src={Email} alt="" />
                        <p>aakash.khandekar22@gmail.com</p>
                    </div>
                    <div className='Contact_Left_Detail'>
                        <img src={Mobile} alt="" />
                        <p>+91 - 7987331818</p>
                    </div>
                    <div className='Contact_Left_Detail'>
                        <img src={Location} alt="" />
                        <p>Hyderabad, Telangana</p>
                    </div>
            </div>

            <div className='Contact_right col-5 ms-5'>

            <form action="submit" onSubmit={handleFormSubmit}>
             <div className='my-4 contact_form_titles'>
                <div><label htmlFor="">Name</label></div>
                <div className=''><input className='Contact_Input p-3' type="text" placeholder='Enter your name' name="name" value={contactFormData.name} onChange={handleFormData}/></div>
             </div>
                <div className='my-4 contact_form_titles'>
                    <div><label htmlFor="">Email</label></div>
                    <div className='my-1'><input className='Contact_Input p-3' type="email"  placeholder='Enter your email' name="email" value={contactFormData.email} onChange={handleFormData}/></div>
             </div>
                <div className='my-4 contact_form_titles'>
                    <div><label htmlFor="">Write a message here</label></div>
                    <div className='my-1 '><textarea className='Contact_Message p-3' placeholder='Enter your message' name="message" value={contactFormData.message} onChange={handleFormData}></textarea></div>
             </div> 
             <button className="submit" type="submit">Submit</button>
      </form>

    </div>
   </div>
  </div>
 </div>     
</div>
    </>
  )
}

export default Contact