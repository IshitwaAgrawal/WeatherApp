import React from 'react'
import WeatherComponent from '../../components/WeatherComponent/WeatherComponent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HourlyWeather() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="dailyweather hourlyweather">
            <h1>Hourly</h1>
            {/* <div className="dailyweather__items"> */}
                <Slider className="dailyweather__items" {...settings}>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                    <div>
                        <WeatherComponent hourly />
                    </div>
                </Slider>

                {/* <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly /> */}
            {/* </div> */}
        </div>
    )
}

export default HourlyWeather
