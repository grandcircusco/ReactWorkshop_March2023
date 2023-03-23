import "./Votes.css";

const Votes = () => {
  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button>Chocolate</button>
        <button>Vanilla</button>
        <button>Strawberry</button>
      </div>
      <p className="vote-info">Chocolate: 2 (33.3%)</p>
      <div>
        <div className="chocolate bar"></div>
      </div>
      <p className="vote-info">Vanilla: 2 (33.3%)</p>
      <div>
        <div className="vanilla bar"></div>
      </div>
      <p className="vote-info">Strawberry: 2 (33.3%)</p>
      <div>
        <div className="strawberry bar"></div>
      </div>
    </section>
  );
};

export default Votes;
