// third-party
import Slider from 'react-slick';
// import { BASE_URL } from "./config";
import location from 'assets/images/landing/location.png';
import 'assets/scss/style.css'
// ==============================|| PRODUCT DETAILS - SLIDER ||============================== //

const ProductSlider = () => {
    const BASE_URL = 'assets/images/landing';

    const images = [
        { src: 'https://www.simpcar.ch/uploads/banner_photo/2952401683825957skodaschwarz_1.png' },
        { src: 'https://www.simpcar.ch/uploads/banner_photo/5286081683825957skodaschwarz_2.png' },
        { src: 'https://www.simpcar.ch/uploads/banner_photo/8889381683825957skodaschwarz_3.png' },
        { src: 'https://www.simpcar.ch/uploads/banner_photo/4341601683825957skodaschwarz_4.png' }
    ];

    const settings = {
        customPaging: (i) => (
            <a >

                <img src={images[i].src} alt=" " style={{ width: '120px',marginLeft:"-130px" }} />
            </a>
        ),
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider  {...settings}>
                {images.map((img) => (
                    <div>
                        <img src={img.src} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductSlider;
