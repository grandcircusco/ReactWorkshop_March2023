import { useState } from "react";
import "./Votes.css";

interface IceCreamVotes {
  chocolate: number;
  vanilla: number;
  strawberry: number;
}

const Votes = () => {
  const [iceCreamVotes, setIceCreamVotes] = useState<IceCreamVotes>({
    chocolate: 0,
    strawberry: 0,
    vanilla: 0
  });

  const getVotesAsPercentage = (numOfVotes: number): string | undefined => {
    const allVotes = iceCreamVotes.chocolate + iceCreamVotes.vanilla + iceCreamVotes.strawberry;
    if (allVotes === 0) {
      return "0%";
    }
    return (100 / (allVotes / numOfVotes)).toFixed(1) + "%"
  }

  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        {/* // spread operator copies all values, function parameters | arrays | objects */}
        <button onClick={() => setIceCreamVotes({ ...iceCreamVotes, chocolate: iceCreamVotes.chocolate + 1 })}>Chocolate</button>
        <button onClick={() => setIceCreamVotes({ ...iceCreamVotes, vanilla: iceCreamVotes.vanilla + 1 })}>Vanilla</button>
        <button onClick={() => setIceCreamVotes({ ...iceCreamVotes, strawberry: iceCreamVotes.strawberry + 1 })}>Strawberry</button>
      </div>
      <p className="vote-info">Chocolate: {iceCreamVotes.chocolate} {getVotesAsPercentage(iceCreamVotes.chocolate)}</p>
      <div>
        <div className="chocolate bar" style={{ width: getVotesAsPercentage(iceCreamVotes.chocolate)}}></div>
      </div>
      <p className="vote-info">Vanilla: {iceCreamVotes.vanilla} {getVotesAsPercentage(iceCreamVotes.vanilla)}</p>
      <div>
        <div className="vanilla bar" style={{ width: getVotesAsPercentage(iceCreamVotes.vanilla)}}></div>
      </div>
      <p className="vote-info">Strawberry: {iceCreamVotes.strawberry} {getVotesAsPercentage(iceCreamVotes.strawberry)}</p>
      <div>
        <div className="strawberry bar" style={{ width: getVotesAsPercentage(iceCreamVotes.strawberry)}}></div>
      </div>
    </section>
  );
};

export default Votes;
