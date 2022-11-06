import React from 'react'
import "../src/Home.css"
import zuri_intern from "../src/images/zuri.png"
import i4g  from "../src/images/I4G.png"
import redot from "../src/images/redot.png"


function FormDisabledExample() {
  let name ="Allen kayode";
  return (
   <div>
    <body>
    <div className='Form'>
      <h1>Contact Me</h1>
      <h5>Hi there, contact me to ask me about anything you have in mind</h5>
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id=" first_name validationCustom01" placeholder='First Name' required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="last_name  validationCustom02" placeholder='Last Name' required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control email" id=" email  exampleFormControlInput1" placeholder="name@example.com" />
</div>
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Message</label>
    <textarea class="form-control is-invalid text-area"  id=" message validationTextarea" placeholder="Send me a message and i'll reply soon" required></textarea>
    <div class="invalid-feedback">
  </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input checkBox" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label label_check " for="invalidCheck">
        you agree to providing to {name} who you may contact
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button id='btn_submit' class=" btn btn-primary" type="submit">Send Message</button>
  </div>

  
</form>

  
</div>


<div className='footer_contact' >
  
      <div>
          <img src={zuri_intern} alt="i4g logo"/>
          <img className="red-dot" src={redot} alt="redDot" />
        </div>

        <p> HNG INTERNSHIP 9 FRONTEND TASK</p>

        <div>
          <img src={i4g} alt="I4G" />
        </div>
        
        </div>
  
</body>

      </div>
  );
}

export default FormDisabledExample;