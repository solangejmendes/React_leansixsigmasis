import React from 'react';
import TrainingCardsCards from '../inc/TrainingCards';

export default function Certicacion() {
    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top" id="servicios">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Certificación 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                        <h6 className="text-center">
                            Ofrecemos certificación acreditada por las entidades internacionales más reconocidas: CSSC, ILSSI, ASQ, IASS.   
                        </h6>
                        <TrainingCardsCards />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
