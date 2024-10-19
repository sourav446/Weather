// Weather App
import { useState } from "react";
import {Data} from "./Data";


function App() {
    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState("")

    const serchData = async (e) => {
        if (e.code === "Enter") {
            let data = await Data(query)
            setWeather(data)
            setQuery("")
        }

    }
    return (
      <div className="back">
        <center>
          <h1 className="h1"> Weather Information!</h1>
          <input className="btn btn-light"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyPress={serchData}
            type="text"
            placeholder="Enter City..."
          />
          {weather.main && (
            <div style={{ color: "white" }}>
              <div>{weather.name}</div>
              <div>{Math.round(weather.main.temp)} &deg; C</div>
              <div>{weather.main.pressure} hPa</div>
              <div>{weather.main.humidity} %</div>

              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  style={{ size: "10px" }}
                />
              </div>

              <div>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          )}
        </center>

        <footer className="foot">
          <center>
            <hr/>
            Here you can see the current weather information!
          </center>
          <center>
          <a href="https://www.instagram.com/__sourav11/">Instagram</a>
          <a
            href="https://www.youtube.com/@Indiametdept"
            className="ms-4"
          >
            YouTube
          </a>
          <a href="https://www.instagram.com/__sourav11/" className="ms-4">
            FaceBook
          </a>
          </center>
        </footer>
      </div>



    );
}

export default App;