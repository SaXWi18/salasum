import React from 'react'
import '../Component/Contact.css'

function Contact() {
  return (
    <div class="contact" id='4'>
        <div class="ContactName">
          <h1 class="ContactCon">Contact Us</h1>
        </div>

        <div class="ConctactItems">
          <div className="Adress">
            <ul>
              <h2 class="AddressMain">ADDRESS</h2>
              <li>
                "Salasum Industrial Service"
              </li>
              <li>
                Denagamuwa Road,
              </li>
              <li>Godawela,</li>
              <li>Polgahawela.</li>
            </ul>
          </div>

          <div className="ContactNo">
            
            <ul>
              <h2 class="AddressMain">Contact No.</h2> 
              <li>
                0713383244
              </li>
              <li>
                0372244822
              </li>
            </ul>
          </div>

          <div className="Email">
            <ul>
              <h2 className="AddressMain">
                E-mail Adderss
              </h2>
              <li>
                somtharanjith@gmail.com
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Contact