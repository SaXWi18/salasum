import React from 'react'
import '../Component/Services.css'

function Services() {
  return (
    <div class="services" id='3'>
        <div className="ServSec">
          <div className="ServSection">
            <div className="ServArea">
              <h2 className="ServMain">
                Services
              </h2>
              <p className="ServDet">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus ipsam molestias, eos praesentium quod ex provident doloremque nemo, doloribus quam et neque beatae aut, suscipit quae officia dolorum voluptas!
              </p>
            </div>
          </div>
        </div>
        
        <div className="ImageClassForServ">
          <div className="ServiceImage">
            <img class="ImageS" src="https://www.alphasoftware.com/hs-fs/hubfs/manufacturing%20quality%20control%20apps.jpg?width=1073&name=manufacturing%20quality%20control%20apps.jpg" alt="ServiceImage" />
          </div>
        </div>
        
    </div>
  )
}

export default Services