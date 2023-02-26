import React from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function MyWork({workPortfolio}) {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id='work'>
        <Container>
            <div className='row text-start'>
                <h2 className='bebas xl-font text-start'>MY WORK</h2>
                <div className='work-portfolio'>
                <Carousel responsive={responsive}>
                    {workPortfolio.map((job)=>(

                      <a href={job.url} target="_blank" className='button-port'>
                        <div className='overlay-port'>
                          <h4 className='bold text-white'>{job.name}</h4>
                          <p className='small text-white'>{job.description}</p>
                          <a className='btn btn-primary' href={job.url} target="_blank">View live</a>
                        </div>
                        <img src={job.image} alt={job.name} className="img-fluid portfolio" />
                      </a>
                    ))}
                  </Carousel>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MyWork
