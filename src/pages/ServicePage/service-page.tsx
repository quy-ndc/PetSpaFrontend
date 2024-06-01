import React from "react";
import "./service-page.css";


const ServicePage: React.FC = () => {


    return (
        <>
            <section className="service-display">
                <div className="service-display-header">
                    <h1>Our service</h1>
                    <p>Our establishment can provide you and your with all you need</p>
                </div>
                <div className="service-display-container">
                    <a href="" className="service-display-item">
                        <div className="service-item-image">
                            <img src="https://www.vetmed.com.au/wp-content/uploads/2018/02/golden-retriever-on-surgical-bench-min-1080x675.jpg" />
                        </div>
                        <div className="service-item-content">
                            <h3>Clinical</h3>
                            <div className="service-item-description">
                                Comprehensive clinical pet care service: diagnostics, treatments, wellness programs for your pets.
                            </div>
                            <span>→</span>
                        </div>
                    </a>
                    <a href="" className="service-display-item">
                        <div className="service-item-image">
                            <img src="https://lh4.googleusercontent.com/proxy/A7J3HnQXcZ9RL84RCvaS2gNnmjFZE9MFHvN6kOqkXWoZ-BM9jjO2g_9Ad2G4m6jjrmbbyDFxv9eE48bX0y1XVZML6_TfSxHq0Sl8ug-0a3KUfd6-BQLQRAJug-Y" />
                        </div>
                        <div className="service-item-content">
                            <h3>Surgical</h3>
                            <div className="service-item-description">
                                Expert surgical pet care: precision procedures, post-op care, and recovery support for pets.
                            </div>
                            <span>→</span>
                        </div>
                    </a>
                    <a href="" className="service-display-item">
                        <div className="service-item-image">
                            <img src="https://theanimaldoctors.org/wp-content/uploads/2023/05/IMG_2038-scaled.jpg" />
                        </div>
                        <div className="service-item-content">
                            <h3>Hoslistic therapy</h3>
                            <div className="service-item-description">
                                Holistic pet therapy: natural treatments, stress relief, and wellness for your pets.
                            </div>
                            <span>→</span>
                        </div>
                    </a>
                    <a href="" className="service-display-item">
                        <div className="service-item-image">
                            <img src="https://vuanem.com/blog/wp-content/uploads/2023/03/grooming-nghia-la-gi.jpg" />
                        </div>
                        <div className="service-item-content">
                            <h3>Grooming</h3>
                            <div className="service-item-description">
                                Professional pet grooming: baths, haircuts, nail trims, and styling for your pets.
                            </div>
                            <span>→</span>
                        </div>
                    </a>
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
                    <button>Pricing</button>
                </div>
                <div className="service-page-extra-right">
                    <img src="https://cdn.discordapp.com/attachments/923178092644687882/1246132584769912842/sitting-sweety-cat-looking-aside-600nw-2323092103-removebg-preview.png?ex=665b46e8&is=6659f568&hm=5a5a54c814bcfa7d3ec01005299f5b4949d69dc4ab5ba8b8a50ff5f75767c70d&" />
                </div>
            </section>
        </>
    );
};

export default ServicePage;
