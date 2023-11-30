import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'



export default function Card({title, imageSource, text, url}) {
  return (
    <div>
        <div className='container card text-center bg-dark animate__animated animate__fadeInUp h-100'>
            <div className='overflow'>
                <img src={imageSource} alt="" className='card-img-top' style={{ height: '24rem' }}/>
            </div>
            <div className='card-body text-light'>
                <h4 className="card-title">{title}</h4>
                <p className='card-text text-secondary' style={{ height: '6rem' }}>
                    {
                        text ? text : 'Texto pendiente'
                    }
                </p>
                <Link to={url} className='btn btn-outline-secondary rounded-0' rel="noreferrer">
                    más detalle
                </Link>
            </div>
        </div>

    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}