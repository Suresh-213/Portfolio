import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "/src/img/pics2.jpg";




function Port() {
    const [isOpen, setopen] = useState(false)
    const[isimg,setimg]=useState(false)

    return (
        <div>
            <div className='navbar navbar-expand-lg navbar-dark bg-secondary px-3'   >

                <div className='container-fluid'>
                    <Link to='/' className='detailsLink  navbar-brand fade-in' >
                        PORT <span> FOlio</span>
                    </Link>

                    {/* toggler button  */}
                    <div >
                        <button className='navbar-toggler' type='button'
                            onClick={
                                () => setopen(!isOpen)
                            } >
                            <span className='navbar-toggler-icon'></span>

                        </button>

                    </div>

                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} >

                        <ul className='navbar-nav   ms-auto'>
                            <Link to='/home' className='detailsLink ' > Home</Link>
                            <Link to='/about' className='detailsLink ' >About</Link>
                            <Link to='/skills' className='detailsLink ' >Skills</Link>
                            <Link to='/project' className='detailsLink ' >Project</Link>
                            <Link to='/contact' className='detailsLink ' >Contact</Link>
                            

                        </ul>
                    </div>

                </div>

            </div>

                      {/* body  */}
                      
                     <div className="container-fluid-xxl page-layout">
  {/* Left Sidebar */}
  <div className="sidebar left-sidebar text-light slide-up">
    <h3 className="ms-3 my-5 display-5">Welcome</h3>
  </div>

  {/* Center Content */}
  <div className="content">
    <div className="content-center">
      <h1>This is</h1>
      <h3>
        Suresh Kumar <br /> I'm a full stack developer
      </h3>

      <button className="btncolor1" onClick={() => setimg(!isimg)}>
        {isimg ? "Hide Profile" : "View Profile"}
      </button>

      {isimg && (
        <img
          src={img1}
          alt="Profile"
          width="350"
          height="350"
          className="content-center-img"
        />
      )}
    </div>
  </div>
</div>


      </div>
                 


      
    

                      
        
    
    )
}

export default Port