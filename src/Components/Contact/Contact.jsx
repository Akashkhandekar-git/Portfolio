import Email from "../../assets/mail_icon.svg";
import Mobile from "../../assets/call_icon.svg";
import Location from "../../assets/location_icon.svg";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {

  const [result, setResult] = useState("");
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "c605b411-744e-42d5-84cd-2c202360d847");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

    alert('Email sent successfully..!!');
  };

  return (
    <div id="contact" className="contact_section">

      <h1 className="Contact_Title">Get in touch</h1>

      <div className="contact_wrapper">

        {/* LEFT SIDE */}
        <div className="Contact_left">
          <h1>Let's talk</h1>

          <p>
            I'm currently available to take on new projects, so feel free to contact me
            about anything you want me to work on. You can message me anytime.
          </p>

          <div className="Contact_Left_Detail">
            <img src={Email} alt="" />
            <p>aakash.khandekar22@gmail.com</p>
          </div>

          <div className="Contact_Left_Detail">
            <img src={Mobile} alt="" />
            <p>+91 - 8109188492</p>
          </div>

          <div className="Contact_Left_Detail">
            <img src={Location} alt="" />
            <p>Hyderabad, Telangana</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="Contact_right">
          <form onSubmit={onSubmit}>
            <div className="contact_form_group">
              <label>Name</label>
              <input
                type="text"
                className="Contact_Input"
                name="name"
                placeholder="Enter your name"
                value={contactFormData.name}
                onChange={handleFormData}
              />
            </div>

            <div className="contact_form_group">
              <label>Email</label>
              <input
                type="email"
                className="Contact_Input"
                name="email"
                placeholder="Enter your email"
                value={contactFormData.email}
                onChange={handleFormData}
              />
            </div>

            <div className="contact_form_group">
              <label>Write a message</label>
              <textarea
                className="Contact_Message"
                name="message"
                placeholder="Enter your message"
                value={contactFormData.message}
                onChange={handleFormData}
              />
            </div>

            <button className="submit" type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
