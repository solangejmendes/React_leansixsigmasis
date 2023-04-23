import React from 'react';
import automation from '../images/automation.jpg';

export default function Bimage1() {
  return (
    <div>
        {/*-- Background image --*/}
        <div
            id="intro-example"
            className="p-5 text-center bg-image navbar-text"
            style={{'background-image': {automation}}}
        >
            <div className="mask" style={{'background-color': 'rgba(0, 0, 0, 0.7)'}}>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                <h5 className="mb-4">Best & free guide of responsive web design</h5>
                <a
                    className="btn btn-outline-light btn-lg m-2"
                    href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                    role="button"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                >Start tutorial</a
                >
                <a
                    className="btn btn-outline-light btn-lg m-2"
                    href="https://mdbootstrap.com/docs/standard/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    role="button"
                >Download MDB UI KIT</a
                >
                </div>
            </div>
            </div>
        </div>
        {/*-- Background image --*/}
    </div>
  )
}
