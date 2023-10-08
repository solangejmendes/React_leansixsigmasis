import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'



export default function SmallCard({title, imageSource, url}) {
  return (
    <div>
        <div className='container card text-center bg-dark animate__animated animate__fadeInUp h-100'>
            <div className='overflow'>
                <img src={imageSource} alt="" className='card-img-top' style={{ height: '10rem' }}/>
            </div>
            <div className='card-body text-light'>
                <h6 className="card-title">{title}</h6>
                <Link to={url} className='btn btn-outline-secondary rounded-0' target="_blank" rel="noreferrer">
                    más detalle
                </Link>
            </div>
        </div>

    </div>
  )
}

SmallCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
}