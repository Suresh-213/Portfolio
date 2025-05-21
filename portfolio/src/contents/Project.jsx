import React, { useState } from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function Project() {
  const [isOpen, setopen] = useState(false)
  return (
    <div>


      <div className='navbar navbar-expand-lg navbar-dark bg-secondary px-3'   >
        <div className='container-fluid'>



          {/* toggler button  */}
          <div className='container-fluid' >
            <Link to='/' className='detailsLink  navbar-brand fade-in' >
              <span> Project</span>
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


      {/* <!-- Section Heading --> */}
      <div class="row">
        <div class="section-title">
          <h2 class="animated-heading highlight-role2">Projects</h2>
        </div>
      </div>

      {/* <!-- Subheading --> */}
      <div class="row">
        <div class="portfolio-subtitle">
          <h2 class="sub-heading">Academic Projects</h2>
        </div>
      </div>

      {/* <!-- Project 1 --> */}
      <div class="portfolio-item project-item">
        <h2 class="project-title">PROJECT FOR POST GRADUATE</h2>

        <h3 class="highlight-role3">
          <i class="fa fa-star"></i> A Fine Tuned Model for Multi-classification and Prediction of Lung Disease Using X-ray Images and Machine Learning
        </h3>

        <p class="project-description">
           This project involves building a smart computer model that can look at chest X-ray
            images and identify different types of lung diseases.
            Instead of just saying whether a person is healthy or sick, the model can tell exactly
            which disease it might be — like pneumonia, tuberculosis,
            or COVID-19.

            To do this, machine learning techniques are used to "train" the model on many X-ray
            images.
            Fine-tuning means improving a pre-trained model (like one already good at reading
            images)
            so it works better on lung disease detection. The goal is to help doctors make faster
            and more accurate diagnoses using technology.
        </p>
      </div>

      {/* <!-- Project 2 --> */}
      <div class="portfolio-item project-item-alt">
        <h3 class="highlight-role3">
          <i class="fa fa-star"></i> IR Wireless Underwater Communication System
        </h3>

        <p class="project-description">
          The IR (Infrared) Wireless Underwater Communication System is a technology designed to
          transmit data underwater
          without using cables. Instead of using traditional radio signals—which don’t travel well
          in water—this system
          uses infrared light, which performs better for short-range communication in underwater
          environments.
        </p>

        <h4 class="advantage-title">Advantages</h4>
        <ul class="project-list">
          <li>Low cost</li>
          <li>Energy efficient</li>
          <li>Simple design</li>
        </ul>
      </div>


      {/* <!------project item end------> */}







    </div >
  )
}

export default Project