// import styled from "styled-components";
import "./Contact.css"
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return(
    <>
    <Navbar/>
     <div className="contact-box">
      <h5>CONTACT ME</h5>
      <div className="embed-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5411508953757!2d80.22350167454509!3d12.872886117035941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b8c90befe2b%3A0x170ab8b5b21bb530!2sSathyabama%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1703059863621!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}}  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact-section">
      <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">E-mail</label>
  <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Email"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Message</label>
   <textarea rows={5} cols={50} class="form-control" id="formGroupExampleInput2" placeholder="Enter your Message"></textarea>
</div>
<div class="mb-3">
   <button type="button" className="btn btn-primary">Submit</button>
</div>
      </div>
     </div>
     <Footer/>
    </>
  );
};

export default Contact;
