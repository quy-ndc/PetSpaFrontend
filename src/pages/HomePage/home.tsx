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
                    <a href="/booking" className="introduction__content-button">
                        Book now
                    </a>
                </div>
            </section>
            <section id="aboutus" className="aboutus">
                <div className="aboutus__title">
                    TẠI SAO NÊN CHỌN TROPICPET? (About Us)
                </div>
                <div className="aboutus__content">
                    <img width="705px" height="600" src="https://tropicpet.vn/wp-content/uploads/2024/02/about-tropicpet.jpg" alt="" />
                    <div className="description">
                        <p>Tropicpet là hệ thống bệnh viện thú y chất lượng, uy tín TOP đầu Hà Nội. Với 4 chi nhánh đang hoạt động, hệ thống của chúng tôi đã phục vụ hơn 30.000 khách hàng với sự tín nhiệm và tin tưởng rất lớn.

                        </p><p>Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng. Nhân viên của Tropicpet sẽ luôn duy trì kênh liên lạc với bạn để cập nhật thường xuyên, liên tục tình hình của các bạn thú cưng, chắc chắn rằng bạn sẽ an tâm khi gửi gắm thú cưng của cho chúng tôi.

                        </p><p>Tropicpet có đội ngũ bác sĩ thú y tay nghề cao, chuyên môn tốt, giàu kinh nghiệm, luôn đề cao lương tâm, tính trách nhiệm trong công việc và rất yêu thương thú cưng. Cùng với hệ thống máy móc thiết bị hiện đại phục vụ cho chẩn đoán và điều trị bệnh.
                        </p><p>
                            Với slogan “Healing From The Heart” chúng tôi chăm sóc thú cưng của bạn tận tâm với tất cả trái tim mình.</p>
                        <h4 >ĐIỂM NHẤN ẤN TƯỢNG:
                        </h4>
                        <p>
                            Với slogan “Healing From The Heart” chúng tôi chăm sóc thú cưng của bạn tận tâm với tất cả trái tim mình.</p>

                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="services__title">
                    Our Doctors & Staffs
                </div>

                <Carousel className="cara"
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
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
                        <p>BÁC SĨ ĐA KHOA </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-Hiep-1-600x519-1-600x519.jpg" alt="" />
                        <h1>Dr. Hiệp Đỗ </h1>
                        <p>GIÁM ĐỐC HỆ THỐNG </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
                        <h1>Dr. Huy Nguyễn </h1>
                        <p>BÁC SĨ ĐA KHOA </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
                        <h1>Dr. Nam Nguyễn </h1>
                        <p>BÁC SĨ ĐA KHOA </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-Tinh-600x519-1-1-600x519.jpg" alt="" />
                        <h1>Dr. Thảo Vũ </h1>
                        <p>BÁC SĨ ĐA KHOA </p>
                    </div>
                </Carousel>;
            </section>
            <section id="services" className="services">
                <div className="services__title">
                    News
                </div>
                <Carousel className="cara"
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
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
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
                        <h1>Mổ đẻ cho mèo hết bao nhiêu tiền</h1>
                        <p>Trong quá trình chăm sóc mèo, việc đảm bảo sức khỏe và an toàn cho chúng là điều vô cùng quan trọng. Đặc biệt, trong trường hợp mèo mang thai, việc...</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
                        <h1>Chụp X-Quang cho chó mèo: Quy trình, lợi ích và những điều cần biết</h1>
                        <p>Chụp X-quang cho chó mèo là một phương pháp quan trọng trong việc chẩn đoán và điều trị các vấn đề gặp phải ở thú cưng. Đặc biệt, với chó mèo, việc...</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
                        <h1>Cấp cứu chó mèo: Những điều bạn cần biết </h1>
                        <p>Sự hiểu biết về cách cấp cứu chó mèo có thể giúp bạn bảo vệ người bạn nhỏ bốn chân của mình trong những tình huống nguy cấp. Tropicpet sẽ chỉ cho bạn...</p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
                        <h1>Ưu đãi hàng tuần "Thứ 4 vui vẻ, Thứ 5 sức khỏe"</h1>
                        <p>BẠN BIẾT GÌ CHƯA??? ƯU ĐÃI HÀNG TUẦN TẠI PETSPA </p>
                    </div>
                    <div className="cara__item">
                        <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
                        <h1>Bệnh nấm chó mèo là gì? Giải đáp cho bệnh nấm chó mèo </h1>
                        <p>Nấm chó mèo ở thú cưng là một loại bệnh khá phổ biến. Khi vị trí bị nấm mới xuất hiện sẽ không có ảnh hưởng mấy nhưng thời gian lâu dài, khi mà nấm...</p>
                    </div>
                </Carousel>;
            </section>

        </div>
    );
}

export default HomePage;