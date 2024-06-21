// import "./home.css";
// import { faFacebook, faInstagram, faYoutube, faTiktok, faEmpire } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faClock, faCopyright } from '@fortawesome/free-solid-svg-icons';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// export default function Home() {

//     const responsive = {
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3,
//             slidesToSlide: 3 // optional, default to 1.
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2,
//             slidesToSlide: 2 // optional, default to 1.
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1,
//             slidesToSlide: 1 // optional, default to 1.
//         }
//     };
//     return (

//         <div className="main">
//             <header className="header">
//                 <div className="header__breadcrumb">
//                     <div className="header__breadcrumb-left">
//                         <div className="header__breadcrumb-title">
//                             <FontAwesomeIcon icon={faEmpire} /> Cấp cứu 24/24
//                         </div>
//                         <div className="header__breadcrumb-time">
//                             <FontAwesomeIcon icon={faClock} /> Mở cửa 08:00 - 20:00 (T2 - CN)
//                         </div>
//                     </div>
//                     <div className="header__breadcrumb-right">
//                         <div className="header__breadcrumb-subtitle">
//                             <FontAwesomeIcon icon={faCopyright} /> Hệ thống chăm sóc thú cưng toàn diện
//                         </div>
//                         <div className="header__breadcrumb-socials">
//                             <FontAwesomeIcon className="socialicon" icon={faFacebook} />
//                             <FontAwesomeIcon className="socialicon" icon={faInstagram} />
//                             <FontAwesomeIcon className="socialicon" icon={faYoutube} />
//                             <FontAwesomeIcon className="socialicon" icon={faTiktok} />
//                             <FontAwesomeIcon className="socialicon" icon={faEnvelope} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="header__container">
//                     <div className="header__container-logo">
//                         <img src="https://tropicpet.vn/wp-content/uploads/2022/11/tropicpet-logo-header.png" alt="" />
//                     </div>
//                     <div className="header__container-menu">
//                         <ul>
//                             <a href="#"><li>home</li></a>
//                             <a href="#aboutus"><li>About us</li></a>

//                             <li>Services</li>
//                             <li>News</li>
//                         </ul>
//                     </div>
//                     <div className="header__container-actions">
//                         <div className="header__container-login">Login</div>
//                         <div className="header__container-register">Register</div>
//                     </div>
//                 </div>
//             </header>
//             <section className="introduction">
//                 <div className="introduction__content">
//                     <div className="introduction__content-title">
//                         Hệ thống thú y TROPICET
//                     </div>
//                     <div className="introduction__content-subtitle">
//                         Tận tâm
//                         <div>chăm sóc</div>
//                     </div>
//                     <div className="introduction__content-button">
//                         Book now
//                     </div>
//                 </div>
//             </section>
//             <section id="aboutus" className="aboutus">
//                 <div className="aboutus__title">
//                     TẠI SAO NÊN CHỌN TROPICPET? (About Us)
//                 </div>
//                 <div className="aboutus__content">
//                     <img width="705px" height="600" src="https://tropicpet.vn/wp-content/uploads/2024/02/about-tropicpet.jpg" alt="" />
//                     <div className="description">
//                         <p>Tropicpet là hệ thống bệnh viện thú y chất lượng, uy tín TOP đầu Hà Nội. Với 4 chi nhánh đang hoạt động, hệ thống của chúng tôi đã phục vụ hơn 30.000 khách hàng với sự tín nhiệm và tin tưởng rất lớn.

//                         </p><p>Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng. Nhân viên của Tropicpet sẽ luôn duy trì kênh liên lạc với bạn để cập nhật thường xuyên, liên tục tình hình của các bạn thú cưng, chắc chắn rằng bạn sẽ an tâm khi gửi gắm thú cưng của cho chúng tôi.

//                         </p><p>Tropicpet có đội ngũ bác sĩ thú y tay nghề cao, chuyên môn tốt, giàu kinh nghiệm, luôn đề cao lương tâm, tính trách nhiệm trong công việc và rất yêu thương thú cưng. Cùng với hệ thống máy móc thiết bị hiện đại phục vụ cho chẩn đoán và điều trị bệnh.
//                         </p><p>
//                             Với slogan “Healing From The Heart” chúng tôi chăm sóc thú cưng của bạn tận tâm với tất cả trái tim mình.</p>
//                         <h4 >ĐIỂM NHẤN ẤN TƯỢNG:
//                         </h4>
//                         <p>
//                             Với slogan “Healing From The Heart” chúng tôi chăm sóc thú cưng của bạn tận tâm với tất cả trái tim mình.</p>

//                     </div>
//                 </div>
//             </section>
//             <section id="services" className="services">
//                 <div className="services__title">
//                     Các dịch vụ chúng tôi cung cấp
//                 </div>

//                 <Carousel className="cara"
//                     swipeable={false}
//                     draggable={false}
//                     showDots={true}
//                     responsive={responsive}
//                     ssr={true} // means to render carousel on server-side.
//                     infinite={true}
//                     autoPlay={true }
//                     autoPlaySpeed={3000}
//                     keyBoardControl={true}
//                     customTransition="all .5"
//                     transitionDuration={500}
//                     containerClass="carousel-container"
//                     removeArrowOnDeviceType={["tablet", "mobile"]}
//                     deviceType={"desktop"}
//                     dotListClass="custom-dot-list-style"
//                     itemClass="carousel-item-padding-40-px"
//                 >
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2022/06/chup-x-quang-425x313.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                 </Carousel>;
//             </section>
//             <section id="services" className="services">
//                 <div className="services__title">
//                     Đội ngũ nhân viên bác sĩ
//                 </div>
//                 <Carousel className="cara"
//                     swipeable={false}
//                     draggable={false}
//                     showDots={true}
//                     responsive={responsive}
//                     ssr={true} // means to render carousel on server-side.
//                     infinite={true}
//                     autoPlay={true }
//                     autoPlaySpeed={3000}
//                     keyBoardControl={true}
//                     customTransition="all .5"
//                     transitionDuration={500}
//                     containerClass="carousel-container"
//                     removeArrowOnDeviceType={["tablet", "mobile"]}
//                     deviceType={"desktop"}
//                     dotListClass="custom-dot-list-style"
//                     itemClass="carousel-item-padding-40-px"
//                 >
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                     <div className="cara__item">
//                         <img width="425" height="313" decoding="async" src="https://tropicpet.vn/wp-content/uploads/2021/05/team-huy-2-600x519-1-600x519.jpg" alt="" />
//                         <h1>Xét nghiệm</h1>
//                         <p>Dịch vụ chụp X - Quang chất lượng cao, phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả, an toàn.</p>
//                     </div>
//                 </Carousel>;
             
//             </section>
//         </div>
//     );
// }


