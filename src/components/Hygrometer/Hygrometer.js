import ReactSlider from 'react-slider';
import './Hygrometer.css';
// Humidity has a default value of 40%
import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

function Hygrometer() {
  const [humidity, setHumidity] = useState(40);
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className='actual-humid'>Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={val => {
          setHumidity(val);
        }}
        className='hygrometer-slider'
        thumbClassName='hygrometer-thumb'
        trackClassName='hygrometer-track'
        ariaLabel={'Hygrometer'}
        orientation='vertical'
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
