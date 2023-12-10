import React from 'react';
import car from '../../assets/images/carindustry.png';
import food from '../../assets/images/Food.jpg';
import welding from '../../assets/images/men-working-welding.jpg';
import office from '../../assets/images/Standing-in-line-for-iphone5.jpg';
import fundicion from '../../assets/images/fundicion.jpg';
import health from '../../assets/images/hospital.jpg';

export default function Slider() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={car} className="d-block w-100 h-100" alt="car industry"/>
                    </div>
                    <div className="carousel-item">
                        <img src={food} className="d-block w-100 h-100" alt="food and beverage industry"/>
                    </div>
                    <div className="carousel-item">
                        <img src={welding} className="d-block w-100 h-100" alt="welding"/>
                    </div>
                    <div className="carousel-item">
                        <img src={office} className="d-block w-100 h-100" alt="office and services"/>
                    </div>
                    <div className="carousel-item">
                        <img src={fundicion} className="d-block w-100 h-100" alt="fundicion"/>
                    </div>
                    <div className="carousel-item">
                        <img src={health} className="d-block w-100 h-100" alt="healthy sanidad"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
