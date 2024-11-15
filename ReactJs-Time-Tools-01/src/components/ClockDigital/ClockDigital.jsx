/**
 * https://codesandbox.io/p/sandbox/digital-clock-in-reactjs-bew6u?file=%2Fsrc%2FApp.js%3A12%2C3-12%2C26

https://codesandbox.io/p/sandbox/digital-clock-in-reactjs-bew6u?file=%2Fsrc%2FApp.js%3A12%2C3-12%2C26

 * 
 * 
 */
import { useState } from "react"

const ClockDigital = () => { 
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    const updateTime = () => { 
        setCurrentTime(time => new Date().toLocaleTimeString())
     }

     setInterval(updateTime)

    return (
        <>
            <h2>Clock - Digital</h2>
            <p>Comming Soon...</p>
            <hr />
            {currentTime}

        </>
    )
 }
 export default ClockDigital