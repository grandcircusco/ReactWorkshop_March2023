import "./AdDesigner.css";

const AdDesigner = () => {
  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className="ad">
        <p>Vote for</p>
        <p className="flavor">Strawberry</p>
      </div>
      <h3 style={{ color: "purple" }}>What to Support</h3>
      <div>
        <button>Chocolate</button>
        <button>Vanilla</button>
        <button>Strawberry</button>
      </div>
      <h3>Color Theme</h3>
      <div>
        <button>Light</button>
        <button>Dark</button>
      </div>
      <h3>Font Size</h3>
      <div style={{ display: "flex" }}>
        <button>Down</button>
        <p>44</p>
        <button>Up</button>
      </div>
    </section>
  );
};

export default AdDesigner;
