import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Skils() {
  const [isOpen, setopen] = useState(false)

  const skillsData = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 78 },
    { name: "Java", percentage: 75 },
    { name: "MySQL", percentage: 70 }
  ];

  return (
    <div className="skills-wrapper">
       <div className='navbar navbar-expand-lg navbar-dark bg-secondary px-3'   >
              <div className='container-fluid'>
      
      
      
                {/* toggler button  */}
              <div className='container-fluid' >
                           <Link to='/' className='detailsLink  navbar-brand fade-in' >
                             <span> Skills </span>
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

      <section className="skills-section">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <h4>{skill.name}</h4>
                <span>{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
 
export default Skils;
