import React from 'react'
import Container from 'react-bootstrap/Container';
import Rodrigo from '../images/rodrigo.jpg'
import Button from './Button'

function About() {
  return (
    <div id="about-me">
      <Container>
        <div className='row'>
            <div className='col-8 col-md-4 col-lg-3'>
                <div className='image-round'>
                    <img src={Rodrigo} alt="Rodrigo Menezes Web Developer" />
                </div>
            </div>
            <div className='col-xs-12 col-md-8 col-lg-6 offset-lg-1 text-start'>
                <h2 className='xl-font bebas'>ABOUT ME</h2>
                <hr />
                <p className='roboto thin-text dark-gray'>
                As a full stack web developer, I offer a comprehensive range of development services that are tailored to meet the unique needs of my clients. With extensive experience in both front-end and back-end development, I am well-equipped to handle projects of all sizes and complexities. My expertise in HTML, CSS, JavaScript, and other programming languages enables me to create dynamic and responsive websites that are both visually appealing and user-friendly.</p>

                <p className='roboto thin-text dark-gray'>I pride myself on my ability to deliver high-quality solutions that exceed my clients' expectations. Whether you need a custom website, e-commerce platform, or web application, I am committed to providing reliable and efficient services that are designed to help you achieve your goals. With a focus on customer satisfaction, I work closely with my clients throughout the development process to ensure that their vision is realized and their needs are met. If you're looking for a skilled and experienced full stack web developer, look no further.
                </p>
                <Button btnClass="btn btn-primary" nameBtn="Contact me!" linkBtn="#contact" />
            </div>
        </div>
      </Container>
    </div>
  )
}

export default About
