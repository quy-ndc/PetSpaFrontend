import React from "react";
import "./service-page.css";
import { Link } from "react-router-dom";
import catImage from "../../assets/images/cat-png.png";
import clinicalImage from "../../assets/images/clinical-image.jpg"
import surgicalImage from "../../assets/images/surgical-image.jpg"
import hoslisticImage from "../../assets/images/hoslistic-image.jpg"
import groomingImage from "../../assets/images/grooming-image.jpg"

const ServicePage: React.FC = () => {

    return (
        <>
            <section className="service-display">
                <div className="service-display-header">
                    <h1>Our service</h1>
                    <p>Our establishment can provide you and your with all you need</p>
                </div>
                <div className="service-display-container">
                    <Link to="clinical" className="service-display-item">
                        <div className="service-item-image">
                            <img src={clinicalImage} />
                        </div>
                        <div className="service-item-content">
                            <h3>Clinical</h3>
                            <div className="service-item-description">
                                Comprehensive clinical pet care service: diagnostics, treatments, wellness programs for your pets.
                            </div>
                            <span>→</span>
                        </div>
                    </Link>
                    <Link to="surgical" className="service-display-item">
                        <div className="service-item-image">
                            <img src={surgicalImage} />
                        </div>
                        <div className="service-item-content">
                            <h3>Surgical</h3>
                            <div className="service-item-description">
                                Expert surgical pet care: precision procedures, post-op care, and recovery support for pets.
                            </div>
                            <span>→</span>
                        </div>
                    </Link>
                    <Link to="hoslistic" className="service-display-item">
                        <div className="service-item-image">
                            <img src={hoslisticImage} />
                        </div>
                        <div className="service-item-content">
                            <h3>Holistic therapy</h3>
                            <div className="service-item-description">
                                Holistic pet therapy: natural treatments, stress relief, and wellness for your pets.
                            </div>
                            <span>→</span>
                        </div>
                    </Link>
                    <Link to="grooming" className="service-display-item">
                        <div className="service-item-image">
                            <img src={groomingImage} />
                        </div>
                        <div className="service-item-content">
                            <h3>Grooming</h3>
                            <div className="service-item-description">
                                Professional pet grooming: baths, haircuts, nail trims, and styling for your pets.
                            </div>
                            <span>→</span>
                        </div>
                    </Link>
                </div>
            </section>

            <img className="rabbit-image" src="https://www.theanimaldoctors.org/wp-content/uploads/2023/04/bunny-d-2.svg" />
            <section className="service-page-extra">
                <div className="service-page-extra-left">
                    <h2>Why choose us</h2>
                    <div className="service-page-extra-left-content">
                        <p>Discover why we stand out: Our commitment to your pet's well-being is unparalleled. With expert care, tailored solutions, and a warm, welcoming environment, we prioritize excellence, trustworthiness, and the highest standards of service, ensuring your pet's happiness and health.</p>
                        <p>Join our family today and experience the difference: Our dedicated team ensures personalized attention for every furry friend. With a focus on reliability and loving care, we provide a safe and nurturing environment where your pet can thrive. Trust us with your pet's well-being</p>
                    </div>
                    <Link to="pricing">See pricing</Link>
                </div>
                <div className="service-page-extra-right">
                    <img src={catImage} />
                </div>
            </section>
        </>
    );
};

export default ServicePage;
