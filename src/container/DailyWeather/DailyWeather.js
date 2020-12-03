import React from 'react'
import WeatherComponent from '../../components/WeatherComponent/WeatherComponent';
import {connect} from 'react-redux'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Caraousel } from 'react-responsive-carousel'

function DailyWeather({daily}) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
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
        <div className="dailyweather">
            <h1>Daily</h1>
            <Slider className="dailyweather__items" {...settings}>
                {
                    daily?.map(day => {
                        return <WeatherComponent key={day.dt} time={day.dt} max={day.temp.max} min={day.temp.min} weather={day.weather[0].main} icon={day.weather[0].icon} />
                    })
                }
            </Slider>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        daily:state.daily,
    }
}

export default connect(mapStateToProps,null)(DailyWeather)
