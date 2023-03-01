import React from 'react'
import Container from 'react-bootstrap/Container'
import brazilFlag from '../images/brasil.svg'
import usaFlag from '../images/usa.svg'
import germanyFlag from '../images/germany.svg'
import italianFlag from '../images/italian.svg'
import spainFlag from '../images/spanish.svg'


function Languages({languagesSection}) {
  return (
    <div id="languages">
        <Container>
            <div className='row justify-content-center'>
                <div className='col-sm-12'>
                    <h2 className='bebas xl-font text-white text-start mb-5' ref={languagesSection}>Languages Spoken</h2>
                </div>
                <div className='col-6 col-md-6 col-lg-4'>
                    <img src={brazilFlag} className="flags" alt="Portugues - Native Speaker" />
                    <p className='text-white roboto mt-3'>Native Speaker</p>
                </div>
                <div className='col-6 col-md-6 col-lg-4'>
                    <img src={usaFlag} className="flags" alt="US English - Business Fluent" />
                    <p className='text-white roboto mt-3'>C1</p>
                </div>
                <div className='col-6 col-md-6 col-lg-4'>
                    <img src={germanyFlag} className="flags" alt="German - B1" />
                    <p className='text-white roboto mt-3'>A2</p>
                </div>
                <div className='col-6 col-md-6 col-lg-4'>
                    <img src={italianFlag} className="flags" alt="Italian - Good Conversational" />
                    <p className='text-white roboto mt-3'>B1</p>
                </div>
                <div className='col-6 col-md-6 col-lg-4'>
                    <img src={spainFlag} className="flags" alt="Spanish - Very good understanding" />
                    <p className='text-white roboto mt-3'>B1</p>
                </div>
            </div>
        </Container>
        <div className='overlay'></div>
    </div>
  )
}

export default Languages
