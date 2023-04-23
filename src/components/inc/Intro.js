import React from 'react'
import introv from '../../assets/video/futuristic.mp4'

export default function Intro() {
  return (
    <div className='newpage'>
      <div className='intro'>
        <div className="overlay"></div>
        <video src={introv} autoPlay loop muted></video>
        <div className='content'>
            <h1>Bienvenid@ a nuestra página web</h1>
            <h3>Nuestras soluciones tecnológicas, visan la mejora de productividad de tu empresa.</h3>

        </div>
      </div>
    </div>
  )
}
