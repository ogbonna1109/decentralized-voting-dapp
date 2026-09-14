import { useState } from "react";
import { getVotingContract } from "./blockchain/contract";

function App() {
  const [electionName, setElectionName] = useState("");

  const connectToVoting = async () => {
    try {
      const contract = await getVotingContract();

      const name = await contract.electionName();

      setElectionName(name);

      console.log("Connected to Voting contract:", contract);
      console.log("Election:", name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Voting DApp</h1>

      <button onClick={connectToVoting}>
        Connect to Voting Contract
      </button>

      {electionName && (
        <h2>{electionName}</h2>
      )}
    </div>
  );
}

export default App;