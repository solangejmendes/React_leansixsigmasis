import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function WhiteCard({title, imageSource, text, url}) {
  return (
    <div>  
        <div className="col-md-12">
            <div className="card shadow animate__animated animate__fadeInUp h-100">
                <img src={imageSource} className="w-100 border-bottom" alt="services" />
                <div className="card-body">
                    <h6>{title}</h6>
                    <div className="underline"></div>
                    <p className='card-text text-secondary' style={{ height: '17rem' }}>
                        {
                            text ? text : 'Texto pendiente'
                        }
                    </p>
                    <Link to={url} className="btn btn-link">más información</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

WhiteCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}