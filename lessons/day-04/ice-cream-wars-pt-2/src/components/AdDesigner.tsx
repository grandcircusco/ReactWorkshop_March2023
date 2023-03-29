import { useState } from "react";
import Ad from "./Ad";
import "./AdDesigner.css";


// type alias, instead of hard coding the type we can abstract into this to make reusable
type IceCreamName = 'Strawberry' | 'Vanilla' | 'Chocolate';
type AdTheme = 'light' | 'dark';

const AdDesigner = () => {
  const [iceCreamName, setIceCreamName] = useState<IceCreamName>("Strawberry");
  const [adTheme, setAdTheme] = useState<AdTheme>('light');
  // when i set an initial value, the type is implied to the compiler. Its type value is number.
  const [fontSize, setFontSize] = useState(40);

  // dynamic class name based on state
  const getAdClassName = (): string => {
    let returnValue = 'ad';
    if (adTheme === 'dark') {
      returnValue += ' dark'
    }
    return returnValue;
  }

  const incrementFontSize = () => {
    setFontSize(fontSize + 1);
  }

  const decrementFontSize = () => {
    setFontSize(fontSize - 1);
  }

  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <Ad className={getAdClassName()} iceCreamName={iceCreamName} fontSize={fontSize}/>
      <h3 style={{ color: "purple" }}>What to Support</h3>
      <div>
        <button onClick={() => setIceCreamName('Chocolate')}>Chocolate</button>
        <button onClick={() => setIceCreamName('Vanilla')}>Vanilla</button>
        <button onClick={() => setIceCreamName('Strawberry')}>Strawberry</button>
      </div>
      <h3>Color Theme</h3>
      <div>
        <button onClick={() => setAdTheme('light')}>Light</button>
        <button onClick={() => setAdTheme('dark')}>Dark</button>
      </div>
      <h3>Font Size</h3>
      <div style={{ display: "flex" }}>
        <button onClick={decrementFontSize}>Down</button>
        <p>{fontSize}</p>
        <button onClick={incrementFontSize}>Up</button>
      </div>
    </section>
  );
};

export default AdDesigner;
