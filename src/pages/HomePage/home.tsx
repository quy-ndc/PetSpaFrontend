import "./home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import bgvideo from "../../assets/pet-care.mp4"

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
                        Hệ thống thú y TROPICET
                    </div>
                    <div className="introduction__content-subtitle">
                        Tận tâm
                        <div>chăm sóc</div>
                    </div>
                    <div className="introduction__content-button">
                        Book now
                    </div>
                </div>
            </section>
            <section id="aboutus" className="aboutus">
                <div className="aboutus__title">
                    TẠI SAO NÊN CHỌN TROPICPET? (About Us)
                </div>
                <div className="aboutus__content">
                    <img width="705px" height="600" src="https://tropicpet.vn/wp-content/uploads/2024/02/about-tropicpet.jpg" alt="" />
                    <div className="description">
                        <p>Tropicpet là hệ thống bệnh viện thú y chất lượng, uy tín TOP đầu Hà Nội. Với 4 chi nhánh đang hoạt động, hệ thống của chúng tôi đã phục vụ hơn 30.000 khách hàng với sự tín nhiệm và tin tưởng rất lớn.</p>
                        <Carousel
                            className="cara"
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
                                <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                                <h1>Xét nghiệm</h1>
                                <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                            </div>
                            <div className="cara__item">
                                <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                                <h1>Xét nghiệm</h1>
                                <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                            </div>
                            <div className="cara__item">
                                <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                                <h1>Xét nghiệm</h1>
                                <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                            </div>
                            <div className="cara__item">
                                <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                                <h1>Xét nghiệm</h1>
                                <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                            </div>
                            <div className="cara__item">
                                <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                                <h1>Xét nghiệm</h1>
                                <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="services__title">
                    Đội ngũ nhân viên bác sĩ
                </div>
                <Carousel
                    className="cara"
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
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                </Carousel>
            </section>
            <section id="news" className="news">
                <div className="news__title">
                    Tin tức sự kiện
                </div>
                <Carousel
                    className="cara"
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
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Xét nghiệm</h1>
                        <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
                    </div>
                </Carousel>
            </section>

        </div>
    );
}

export default HomePage;