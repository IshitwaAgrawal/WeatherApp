import React from 'react'
import WeatherComponent from '../../components/WeatherComponent/WeatherComponent';
import Slider from "react-slick";
import {connect} from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HourlyWeather({hourlyData}) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
    };

    return (
        <div className="dailyweather hourlyweather">
            <h1>Hourly</h1>
            {/* <div className="dailyweather__items"> */}
                <Slider className="dailyweather__items" {...settings}>
                    {
                        hourlyData?.map(hour => {
                            return (
                                <div key={hour.dt} >
                                    <WeatherComponent hourly icon={hour.weather[0].icon} temp={hour.temp} weather={hour.weather[0].main} humidity={hour.humidity} windSpeed={hour.wind_speed} time={hour.dt}/>
                                </div>
                            )
                        })
                    }
                </Slider>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        hourlyData:state.hourly,
    }
}

export default connect(mapStateToProps,null)(HourlyWeather)
