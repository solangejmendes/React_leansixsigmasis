import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionsLSSBB from "../inc/AccordionsLSSBB";

export default function Lssbb() {
    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top" id="lssbb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Certificación Lean Six Sigma Black Belt 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                        <h6 className="text-center">
                            Nuestros servicios de basan fundamentalmente en el desarrollo de software en el entorno de la plataforma Power de Microsoft 365.   
                        </h6>
                        <AccordionsLSSBB />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}