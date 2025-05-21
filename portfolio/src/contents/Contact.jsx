import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [isOpen, setopen] = useState(false)
  return (
    <div>


      <div className='navbar navbar-expand-lg navbar-dark bg-secondary px-3'   >
        <div className='container-fluid'>



          {/* toggler button  */}
         <div className='container-fluid' >
                      <Link to='/' className='detailsLink  navbar-brand fade-in' >
                       <span>  Contact</span>
                      </Link>
            <button className='navbar-toggler' type='button'
              onClick={
                () => setopen(!isOpen)
              } >
              <span className='navbar-toggler-icon'></span>

            </button>

          </div>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} >
            <ul className='navbar-nav   ms-auto'>
              <Link to='/' className='detailsLink ' > Home</Link>
              <Link to='/about' className='detailsLink ' >About</Link>
              <Link to='/skills' className='detailsLink ' >Skills</Link>
              <Link to='/project' className='detailsLink ' >Project</Link>
              <Link to='/contact' className='detailsLink ' >Contact</Link>


            </ul>
          </div>
        </div>





      </div>

      <section className="contact-container" id="contact">
        <div className="row">
          <div className="section-title padd-15">
            <h2 className="highlight-role2 animated-heading">Contact Me</h2>
          </div>
        </div>

        <h3 className="contact-title padd-15">Have You Any Questions?</h3>
        <h4 className="contact-sub-title padd-15">I'm At Your Services</h4>

        <div className='contact-details'> 


          <div className="row contact-info">
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-phone"></i></div>
              <h4>Call Us On</h4>
              <p>+91 9025657402</p>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-envelope"></i></div>
              <h4>Email</h4>
              <p>sureshkumar9591@gmail.com</p>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fab fa-linkedin"></i></div>
              <h4>LinkedIn</h4>
              <p>
                <a href="https://www.linkedin.com/in/suresh-kumar-a28788207" target="_blank" rel="noopener noreferrer">
                  Visit my LinkedIn
                </a>
              </p>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
              <h4>Location</h4>
              <p>Bangalore</p>
            </div>
          </div>
        </div>

        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form padd-15"
        >
          <input type="hidden" name="access_key" value="e4884e4a-23fd-4679-b1bc-3f412513e047" />
          <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
          <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required />
          <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
          <button type="submit">
            Submit <img src="/assets/arrow_icon.png" alt="arrow icon" />
          </button>
        </form>
      </section>







    </div>
  )
}

export default Contact