
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaUser, FaLinkedin } from 'react-icons/fa';
import { GiVillage } from 'react-icons/gi';



const educationData = [
  {
    title: "Bachelor's Degree",
    date: "2021 - 2024",
    cgpa: "7.55",
    institution: "Adhiyamaan College Of Engineering, Hosur",
  },
  {
    title: "Diploma",
    date: "2017 - 2020",
    percentage: "68%",
    institution: "Adhiyamaan Polytechnic College, Hosur",
  },
  {
    title: "SSLC",
    date: "2016 - 2017",
    percentage: "76.8%",
    institution: "Government High School Andevanapally",
  }
];

function About() {
  const [isOpen, setopen] = useState(false)
  return (
    <div>



      <div className='navbar navbar-expand-lg navbar-dark bg-secondary px-3'   >
        <div className='container-fluid'>



          {/* toggler button  */}
          <div className='container-fluid' >
             <Link to='/' className='detailsLink  navbar-brand fade-in' >
              About <span> Me</span>
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

      <section className="home active section section-home" id="home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, My Name Is <span className="name">Suresh kumar</span>
              </h3>
              <h3 className="my-profession">
                I'm a Java <span className="highlight-role">Full-Stack Developer</span>
              </h3>
              <h2><span> Career Objective:</span></h2>
              <p>
                As a passionate Java Full Stack Developer, I aim to build robust, scalable web
                applications using my expertise in Html, Css, react js , and JavaScript frameworks. I am committed
                to continuous learning and leveraging my skills to contribute to innovative and efficient
                software solutions.
              </p>
              <a href="./sureshkumar.pdf" download className="computer btn">
                Download CV
              </a>
            </div>



          </div>
        </div>
      </section>




      <div className="row-education">
        {/* Degree Education */}
        <h1 className='title'>Educations:</h1> <br />
        <div className="education padd-15">
          <h3 className="title">Degree Education</h3>
          <div className="timeline-box padd-15">
            <div className="timeline shadow-dark">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2021 - 2024</h3>
                <h4 className="timeline-title">Bachelor's Degree</h4>
                <h5>Electronics And Communication</h5>
                <p className="timeline-text">CGPA: 7.55</p>
                <p className="timeline-text">Adhiyamaan College Of Engineering, <br /> Hosur</p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2017 - 2020</h3>
                <h4 className="timeline-title">Diploma</h4>
                <h5>Electronics And Communication</h5>
                <p className="timeline-text">Percentage: 68%</p>
                <p className="timeline-text">Adhiyamaan Polytechnic College,
                  <br /> Hosur</p>
              </div>
            </div>
          </div>
        </div>

        {/* School Education */}
        <div className="education-school padd-15">
          <h3 className="title">School Education</h3>
          <div className="timeline-box padd-15">
            <div className="timeline shadow-dark">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2016 - 2017</h3>
                <h4 className="timeline-title">SSLC</h4>
                <p className="timeline-text">Percentage: 76.8%</p>
                <p className="timeline-text">Government High School Andevanapally</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*   about section */}
      <div className="row ">
        {/* About Content */}


        {/* Personal Info */}
        <div className='row-details' >
          <div className="row-details ">
            <div className="personal-info padd-15">
              <div><h2>personal Details</h2></div>
              <picture>
                <source media="(min-width: )" srcset="" />
                <img src="" alt="" />
              </picture>
              <div className="row">

                <div className="info-item padd-15">
                  <p><FaUser /> Name: <span>Suresh Kumar B</span></p>
                </div>
                <div className="info-item padd-15">
                  <p><MdEmail /> Email: <span>sureshman9591@gmail.com</span></p>
                </div>
                <div className="info-item padd-15">
                  <p><MdPhone /> Phone No: <span>9025657402</span></p>
                </div>
                <div className="info-item padd-15">
                  <p><GiVillage /> Native: <span>Hosur</span></p>
                </div>
                <div className="info-item padd-15">
                  <p><MdLocationOn /> Cuurent Location: <span>Bangalore</span></p>
                </div>
                <div className="info-item padd-15">
                  <p>
                    <FaLinkedin /> Linkedin:
                    <span>
                      <a
                        href="https://linkedin.com/in/suresh-kumar-a28788207"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/suresh-kumar-a28788207
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>




    </div>
  )
}

export default About