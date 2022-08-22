import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";
import CustomCard from "./components/card";
import MySlider from "./components/slider";
import MySwitch from "./components/switch";
import MySelect from "./components/select";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isMaxVolume, setIsMaxValue] = useState(30);
  const [quality, setQuality] = useState(2);

  useEffect(() => {
    console.log(isToggled, "TOGGLEDd");
  }, [isToggled]);

  useEffect(() => {
    console.log(isMaxVolume, "VOLUME");
  }, [isMaxVolume]);

  return (
    <main>
      <Header title="Music Dashboard" />
      <div className={`App`}>
        {isLoggedIn === false ? (
          <form className="form" action="">
            <Input label="Username" />
            <Input type="password" label="Password" />
            <Button
              className="button"
              variant="contained"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
          </form>
        ) : (
          <div className="dashboard-container">
            <h2>Welcome User!</h2>
            {/* // This is where we will put our cards */}
            <div className="cards">
            <CustomCard
              state={isToggled}
              setState={setIsToggled}
              title="Online Mode"
              body="Is this application connected to the internet?"
              component={MySwitch}
            />
            <CustomCard
              state={isMaxVolume}
              setState={setIsMaxValue}
              title="Volume Slider"
              body="Override all other sound settings in this application with minute precision"
              component={MySlider}
            />

            <CustomCard
              state={quality}
              setState={setQuality}
              title="Master Volume"
              body="Override all other sound settings in this application"
              component={MySelect}
            />
            </div>
            <h4>System Notifications:</h4>
            {isToggled === true && (
              <span>
                Your application is offline. You wont be able to share or stream
                music to other devices.
              </span>
            )}
            {isMaxVolume >= 80 && (
              <span>
                Listening to music at a high volume could cause long-term
                hearing loss.
              </span>
            )}
            {quality < 2 && (
              <span>
                Music quality is degraded. Increase quality if your connection
                allows it.
              </span>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;