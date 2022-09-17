import './current-weather.css'

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']

const MONTHS = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const CurrentWeather = ({ data, sun}) => {
   
    const getDay = new Date().getDay();
    const getMonth = new Date().getMonth();
    const getDate = new Date().getDate()

    const today = WEEK_DAYS[getDay] + " " + getDate + " " + MONTHS[getMonth - 1]

    return (
        <div className='weather'>
            <div className='city-date'>
                <h2 className='city'>{data.city}</h2>
                <p className='city'>{today}</p>
            </div>

            <div className='top-flex'>
                <div className='icon-flex'>
                    <div>
                        <img alt='icon' className='weather-icon' src={`/icons/${data.weather[0].icon}.png`} />
                    </div>
                    <div className='temp-desc'>
                        <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                        <p className='weather-description'>{data.weather[0].description}</p>
                    </div>
                </div>
                <div className='temp-line'></div>

                <div className='bottom'>
                    <div className=" param-flex">
                        <div className="parameter-row">
                            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span><br />
                            <span className="parameter-label">Feels like </span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-value">{data.wind.speed}m/s</span><br />
                            <span className="parameter-label">Wind </span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-value">{sun.results.sunrise}</span><br />
                            <span className="parameter-label">Sunrise</span>
                        </div>

                    </div>
                    <div className='param-flex'>
                        <div className="parameter-row">
                            <span className="parameter-value">{data.main.humidity}%</span><br />
                            <span className="parameter-label">Humidity </span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-value">{data.main.pressure}hPa</span><br />
                            <span className="parameter-label">Pressure </span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-value">{sun.results.sunset}</span><br />
                            <span className="parameter-label">Sunset</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;