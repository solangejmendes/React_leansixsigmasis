import React from 'react';
import PropTypes from 'prop-types'


export default function CardTipos({title, imageSource, text, url}) {
  return (
    <div>
        <div className='container card text-center bg-dark animate__animated animate__fadeInUp h-100'>
            <div className='overflow'>
                <img src={imageSource} alt="" className='card-img-top' style={{ height: '18rem' }}/>
            </div>
            <div className='card-body text-light'>
                <h4 className="card-title">{title}</h4>
                <p className='card-text text-secondary' style={{ height: '10rem' }}>
                    {
                        text ? text : 'Texto pendiente'
                    }
                </p>
            </div>
        </div>
    </div>
  )
}

CardTipos.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}