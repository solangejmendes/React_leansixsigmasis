import React from 'react';
import PropTypes from 'prop-types'

export default function Accordion({title, body}) {
    return (
      <div>
          <div className='container card text-center bg-dark animate__animated animate__fadeInUp h-100'>
            <div className='accordion'>
                <div className='accordionHeading'>
                    <div className='container'>
                        <h4>
                            {title}
                        </h4>
                        <span>X</span>
                    </div>
                </div>

                <div className='accordionContent'>
                    <div className='container'>
                        <p>
                            {body}
                        </p>
                    </div>
                </div>
            </div>
          </div>
  
      </div>
    )
}


Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string
}
