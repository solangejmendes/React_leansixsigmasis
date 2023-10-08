import React from 'react'
import introv from '../../assets/video/MathDesign.mp4'

export default function Intro() {
  return (
    <div className='newpage'>
      <div className='intro'>
        <div className="overlay"></div>
        <video src={introv} autoPlay loop muted></video>
        <div className='content'>
            <h1>"Si das pescado a un hombre hambriento, lo alimentas durante un día."</h1>
            <h1>"Si le enseñas a pescar, lo alimentas toda su vida."</h1>
            <h3>- Lao Tsé</h3>

        </div>
      </div>
    </div>
  )
}
