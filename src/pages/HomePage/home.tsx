import "./home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import bgvideo from "../../assets/pet-care.mp4";
import image from "../../assets/images/clinical-image.jpg";


const HomePage: React.FC = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    useEffect(() => {
        const avatar = document.querySelector('.user-pic') as HTMLElement | null;
        const subMenuWrap = document.querySelector('.sub-menu-wrap') as HTMLElement | null;

        if (!avatar || !subMenuWrap) return;

        const handleAvatarClick = (event: MouseEvent) => {
            event.stopPropagation();
            if (subMenuWrap.style.display === 'flex') {
                subMenuWrap.style.display = 'none';
                subMenuWrap.style.maxHeight = '0px';
            } else {
                subMenuWrap.style.display = 'flex';
                subMenuWrap.style.maxHeight = '400px';
            }
        };

        const handleDocumentClick = (event: MouseEvent) => {
            if (!avatar.contains(event.target as Node) && !subMenuWrap.contains(event.target as Node)) {
                subMenuWrap.style.display = 'none';
                subMenuWrap.style.maxHeight = '0px';
            }
        };

        avatar.addEventListener('click', handleAvatarClick);
        document.addEventListener('click', handleDocumentClick);

        return () => {
            avatar.removeEventListener('click', handleAvatarClick);
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (

        <div className="main">

            <section className="introduction">
                <video className="introvideo" src={bgvideo} autoPlay loop muted />
                <div className="introduction__content">
                    <div className="introduction__content-title">
                        PETSPA
                    </div>
                    <div className="introduction__content-subtitle">
                        WHERE ANIMALS
                        <div> COME FIRST</div>
                    </div>
                    <a href="/booking" className="introduction__content-button">
                        Book now
                    </a>
                </div>
            </section>
            <section id="aboutus" className="aboutus">
                <div className="aboutus__title">
                    About Us
                </div>
                <div className="aboutus__content">
                    <img width="705px" height="600" src={image} alt="" />
                    <div className="description">
                        <p>At PETSPA, we know our pets are more than just animals; they are cherished members of our families. That’s why our passionate team is dedicated to providing them with the highest quality of care, infused with love and expertise.</p>
                        <p>We established PETSPA to deliver world-class veterinary services and preventative care in Southeast Asia. When it comes to pet healthcare, we hold ourselves to the same standards of excellence you will find at the best animal hospitals in North America, Europe and Australia.</p>
                        <p>Our commitment goes beyond clinical excellence. We focus on building trust with pet owners through clear and empathetic communication. Understanding your pet’s health is essential, and we are here to support you every step of the way. </p>
                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="services__title">
                    Meets our team
                </div>

                <Carousel className="cara"
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} 
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={"desktop"}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/05/team-trang-tran-600x519.jpg" alt="" />
                        <h1>Dr. Trang Trần </h1>
                        <p>Veterinary </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-Hiep-1-600x519-1-600x519.jpg" alt="" />
                        <h1>Dr. Hiệp Đỗ </h1>
                        <p>Veterinary </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Dr. Huy Nguyễn </h1>
                        <p>Veterinary </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
                        <h1>Dr. Nam Nguyễn </h1>
                        <p>Veterinary </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-Tinh-600x519-1-1-600x519.jpg" alt="" />
                        <h1>Dr. Thảo Vũ </h1>
                        <p>Veterinary </p>
                    </div>
                </Carousel>
            </section>
        </div>
    );
}

export default HomePage;