import React from 'react'
import './Carousal.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousal() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} onClick={onClick} >
                <img src="/images/arrowright.png" alt="" className='arrow' />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} onClick={onClick} >
                <img src="/images/arrowleft.png" alt="" className='arrow' />
            </div>
        );
    }


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div>
            <div className='carousalcontainer'>
                <div>

                    <Slider {...settings}>
                        <div className='card'>

                            <div>
                                <img src="/images/car1.png" alt="" />
                                <h1>Title</h1>
                            </div>


                            <div className="features">
                                <div className="list">
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Air conditioned</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Bluetooth sound system</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Sunroof available</p>
                                    </div>
                                </div>
                                <button className="check">
                                    <p>RENT NOW</p>
                                </button>
                            </div>

                        </div>
                        <div className='card'>
                            <div>
                                <img src="/images/car2.png" alt="" />
                                <h1>Title</h1>
                            </div>


                            <div className="features">
                                <div className="list">
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Air conditioned</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Bluetooth sound system</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Sunroof available</p>
                                    </div>
                                </div>
                                <button className="check">
                                    <p>RENT NOW</p>
                                </button>
                            </div>


                        </div>
                        <div className='card'>
                            <div>
                                <img src="/images/car3.png" alt="" />
                                <h1>Title</h1>
                            </div>


                            <div className="features">
                                <div className="list">
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Air conditioned</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Bluetooth sound system</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Sunroof available</p>
                                    </div>
                                </div>
                                <button className="check">
                                    <p>RENT NOW</p>
                                </button>
                            </div>


                        </div>
                        <div className='card'>
                            <div>
                                <img src="/images/car4.png" alt="" />
                                <h1>Title</h1>
                            </div>


                            <div className="features">
                                <div className="list">
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Air conditioned</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Bluetooth sound system</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Sunroof available</p>
                                    </div>
                                </div>
                                <button className="check">
                                    <p>RENT NOW</p>
                                </button>
                            </div>


                        </div>
                        <div className='card'>
                            <div>
                                <img src="/images/car5.png" alt="" />
                                <h1>Title</h1>
                            </div>


                            <div className="features">
                                <div className="list">
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Air conditioned</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Bluetooth sound system</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Sunroof available</p>
                                    </div>
                                </div>
                                <button className="check">
                                    <p>RENT NOW</p>
                                </button>
                            </div>

                        </div>


                        <div className='card'>
                            <div>
                                <img src="/images/car6.png" alt="" />
                                <h1>Title</h1>
                            </div>


                            <div className="features">
                                <div className="list">
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Air conditioned</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Bluetooth sound system</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Sunroof available</p>
                                    </div>
                                </div>
                                <button className="check">
                                    <p>RENT NOW</p>
                                </button>
                            </div>

                        </div>



                        <div className='card'>
                            <div>
                                <img src="/images/car7.png" alt="" />
                                <h1>Title</h1>
                            </div>


                            <div className="features">
                                <div className="list">
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Air conditioned</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Bluetooth sound system</p>
                                    </div>
                                    <div className="item">
                                        <img src="/images/check.png" alt="" />
                                        <p>Sunroof available</p>
                                    </div>
                                </div>
                                <button className="check">
                                    <p>RENT NOW</p>
                                </button>
                            </div>

                        </div>

                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Carousal