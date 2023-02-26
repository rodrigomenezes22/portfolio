import React from 'react'
import Container from 'react-bootstrap/Container'
import htmlIcon from "../images/html-5.svg"
import cssIcon from "../images/css-3.svg"
import jsIcon from "../images/js.svg"
import jQuery from "../images/jquery.svg"
import phpIcon from "../images/php.svg"
import reactIcon from "../images/react.svg"
import adobeIllustrator from "../images/adobe-illustrator.svg"
import adobePhotoshop from "../images/adobe-photoshop.svg"
import adobeXD from "../images/adobe-xd.svg"
import adobePremiere from "../images/adobe-premiere.svg"
import adobeAfferEffects from "../images/after-effects.svg"

function Skills() {
  return (
    <div id='skills'>
      <Container>
        <div className='row'>
            <h2 className='bebas xl-font text-start text-white mb-4' >Skills</h2>
            <div className='icons-1'>
                <div className='icon-wrapper text-start'>
                    <img src={htmlIcon} alt="HTML 5" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={cssIcon} alt="CSS 3" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={jsIcon} alt="JavaScript" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={jQuery} alt="jQuery" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={phpIcon} alt="PHP" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={reactIcon} alt="REACT" className='icon-skill' />
                </div>
            </div>
            <div className='icons-2 mt-5'>
                <div className='icon-wrapper text-start'>
                    <img src={adobeIllustrator} alt="Adobe Illustrator" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={adobePhotoshop} alt="Adobe Photoshop" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={adobeXD} alt="Adobe XD" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={adobePremiere} alt="Adobe Premiere" className='icon-skill' />
                </div>
                <div className='icon-wrapper text-start'>
                    <img src={adobeAfferEffects} alt="Adobe After Effects" className='icon-skill' />
                </div>

            </div>
        </div>
      </Container>
      <div className='overlay'></div>
    </div>
  )
}

export default Skills
