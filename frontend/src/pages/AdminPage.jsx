import { useState, useEffect } from "react";
import { addCandidate, getCandidates, } from "../blockchain/contract";

function AdminPage() {
    const [candidateName, setCandidateName] = useState("");
    const [candidateAge, setCandidateAge] = useState("");
    const [candidateParty, setCandidateParty] = useState("");
    const [candidateImage, setCandidateImage] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [candidates, setCandidates] = useState([]);

    const handleAddCandidate = async () => {
        try {
            setLoading(true);
            setMessage("");

            if (
                !candidateName ||
                !candidateAge ||
                !candidateParty ||
                !candidateImage
            ) {
                setMessage("Please fill in all fields.");
                return;
            }

            await addCandidate(
                candidateName,
                candidateImage,
                candidateAge,
                candidateParty
            );

            await loadCandidates();

            setMessage("Candidate added successfully!");

            setCandidateName("");
            setCandidateAge("");
            setCandidateParty("");
            setCandidateImage("");
        } catch (error) {
            console.error(error);
            const errorMsg = error.reason || error.shortMessage || "Failed to add candidate.";
            setMessage(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    const loadCandidates = async () => {
        try {
            const data = await getCandidates();

            setCandidates(data);
        } catch (error) {
            console.error("Failed to load candidates:", error);
        }
    };

    useEffect(() => {
        loadCandidates();
    }, []);


    return (
        <div className="admin-page">
            <header className="admin-header">
                <div>
                    <p className="admin-label">ADMINISTRATION</p>
                    <h1>Election Dashboard</h1>
                    <p>Manage candidates and control the election.</p>
                </div>

                <div className="election-status">
                    <span></span>
                    Election Not Started
                </div>
            </header>

            <section className="stats">
                <div className="stat-card">
                    <p>Total Candidates</p>
                    <h2>0</h2>
                </div>

                <div className="stat-card">
                    <p>Election Status</p>
                    <h2>Inactive</h2>
                </div>

                <div className="stat-card">
                    <p>Election</p>
                    <h2>2027</h2>
                </div>
            </section>

            <section className="admin-content">
                <div className="candidate-form">
                    <h2>Add Candidate</h2>
                    <p>Add a new candidate to the election.</p>

                    <form>
                        <label>Candidate Name</label>
                        <input
                            type="text"
                            placeholder="Enter candidate name"
                            value={candidateName}
                            onChange={(e) => setCandidateName(e.target.value)}
                        />

                        <label>Age</label>
                        <input
                            type="number"
                            placeholder="Enter candidate age"
                            value={candidateAge}
                            onChange={(e) => setCandidateAge(e.target.value)}
                        />

                        <label>Political Party</label>
                        <input
                            type="text"
                            placeholder="Enter political party"
                            value={candidateParty}
                            onChange={(e) => setCandidateParty(e.target.value)}
                        />

                        <label>Candidate Image URL</label>
                        <input
                            type="text"
                            placeholder="Paste image URL"
                            value={candidateImage}
                            onChange={(e) => setCandidateImage(e.target.value)}
                        />

                        <button
                            type="button"
                            onClick={handleAddCandidate}
                            disabled={loading}
                        >
                            {loading ? "Adding Candidate..." : "Add Candidate"}
                        </button>

                        {message && <p className="message">{message}</p>}
                    </form>
                </div>

                <div className="election-controls">
                    <h2>Election Controls</h2>
                    <p>Control the current election state.</p>

                    <button className="start-button">
                        Start Election
                    </button>

                    <button className="end-button">
                        End Election
                    </button>
                </div>
            </section>

            <section className="candidate-management">
                <div className="section-header">
                    <div>
                        <p className="admin-label">CANDIDATES</p>
                        <h2>Candidate Management</h2>
                        <p>
                            Candidates currently registered for this election.
                        </p>
                    </div>

                    <div className="candidate-count">
                        {candidates.length} Candidates
                    </div>
                </div>

                {candidates.length === 0 ? (
                    <p>No candidates have been added yet.</p>
                ) : (
                    <div className="candidate-list">
                        {candidates.map((candidate) => (
                            <div className="candidate-card" key={candidate.id}>
                                <img
                                    src={candidate.image}
                                    alt={candidate.name}
                                />

                                <div>
                                    <h3>{candidate.name}</h3>

                                    <p>Age: {candidate.age}</p>

                                    <p>Party: {candidate.party}</p>

                                    <p>
                                        Votes: {candidate.voteCount}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default AdminPage;