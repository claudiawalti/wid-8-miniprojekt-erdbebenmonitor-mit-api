import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [focussedEarthquake, setFocussedEarthquake] = useState({});
  const [size, setSize] = useState(1);
  const [quakes, setQuakes] = useState({});
  const [mag, setMag] = useState("1.0");
  const [time,setTime] = useState("week")
  const BASEURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/";
  // Die URLs der Feeds findest du auf dieser Webseite (rechte Seitenleiste):  https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php



  useEffect(() => {
    fetch(BASEURL + `${mag}_${time}.geojson`)
      .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
      .then((res) => setQuakes(res)).catch(err => console.error("Fetch failed:", err)) ;
  },
  [mag, time]  // Abhängigkeitsliste, hier leer
  );

  return (
    <div className="app">
      <Header 
      setMag = {setMag}
      setTime = {setTime}
      />
      <Sidebar earthquake={focussedEarthquake} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map
          size={size}
          setSize={setSize}
          setFocussedEarthquake={setFocussedEarthquake}
          quakes = {quakes}
        />
      </div>
    </div>
  );
}

export default App;
