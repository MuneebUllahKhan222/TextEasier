import React from 'react'

function About (props) {

    



  return (
      <div className='container mt-5' style={{color: "black"}}>
      <h1 className='my-3' style={props.enable?{color:"white"}:{color:"black"}}>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Text Easier
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Text Easier is a text editing tool that facilitate its user with the following services:</strong>
        <ul>
            <li>Changing text to UpperCase</li>
            <li>Changing text to lowerCase</li>
            <li>Show total number of word in your text and estimated read time</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About Me
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Hey! I am Muneeb Ullah Khan</strong>, I am an aspiring Web developer currently doing my major in Computer Engineering. As of now i have acquired the following skills:
        <ul>
            <li>HTML, CSS and bootStrap</li>
            <li>JavaScript, Jquery and React.js</li>
            <li>Node.js, Express.js, Ejs and many more back-end technologies</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact Me
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        You can contact me through my email: <strong>muneeb.thekhan222@gmail.com</strong> or drop me a message on my<a href="https://www.linkedin.com/in/muneeb-ullah-khan-434270231/"> LinkedIN account </a>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default About