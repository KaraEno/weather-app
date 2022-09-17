import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './forecast.css'
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const foreCastDay = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    // console.log(foreCastDay);

    return (
        <>
            <h2>Daily Forecast</h2>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                  <div className="label-div">
                                        <label>{foreCastDay[idx]}</label>
                                  </div>
                                    <div className="label-div"><img alt='weather' className='icon-small' src={`icons/${item.weather[0].icon}.png`} /></div>
                                   <div className="label-div">
                                        <label>{item.weather[0].description}</label>
                                   </div>
                                    <div className="label-div">
                                        <label>{Math.floor(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>{item.main.pressure}hPa</label><br />
                                    <label>Pressure</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>{item.main.humidity}%</label><br />
                                    <label>Humidity</label>
                                </div> 
                               
                                <div className="daily-details-grid-item">
                                    <label>{item.clouds.all}%</label><br />
                                    <label>Clouds</label>
                                </div> 
                                <div className="daily-details-grid-item">
                                    <label>{item.wind.speed}m/s</label><br />
                                    <label>Wind speed</label>
                                </div> 
                                
                                <div className="daily-details-grid-item">
                                    <label>{item.main.sea_level}m</label><br/>
                                    <label>Sea Level</label>
                                </div> 
                                <div className="daily-details-grid-item">
                                    <label>{item.main.feels_like}°C</label><br/>
                                    <label>Feels like</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast