// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.20;

contract voting {
    //State variables
    string public electionName;

    address public owner;

    bool public electionActive;

    //CANDIDATE STRUCT
    struct Candidate {
        uint id;
        string name;
        string image;
        uint age;
        string party;
        uint voteCount;
    }

    Candidate[] public candidates;

    mapping(address => bool) public hasVoted;

    constructor(string memory _electionName) {
        electionName = _electionName;
        owner = msg.sender;
    }

    //only owner can add candidate
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can add candidate");
        _;
    }

    //add candidate function
    function addCandidate(
        string memory _name,
        string memory _image,
        uint _age,
        string memory _party
    ) public onlyOwner {
        uint candidateId = candidates.length + 1;
        candidates.push(Candidate(candidateId, _name, _image, _age, _party, 0));
    }

    //vote function
    function vote(uint _candidateId) public {
        require(!hasVoted[msg.sender], "you have already voted");

        require(
            _candidateId > 0 && _candidateId <= candidates.length,
            "invalid candidate"
        );
        candidates[_candidateId - 1].voteCount++;
        hasVoted[msg.sender] = true;
    }

    //start election function
    function startElection() public onlyOwner {
        require(candidates.length > 0, "Add at least one candidate");

        require(!electionActive, "Election is already active");
        electionActive = true;
    }

    //end election function
    function endElection() public onlyOwner {
        require(electionActive, "Election is not active");

        electionActive = false;
    }

    //get Candidate Count

    function getCandidateCount() public view returns (uint) {
        return candidates.length;
    }

    //get winner

    function getWinner() public view returns (Candidate memory) {
        require(candidates.length > 0, "No candidates available");

        require(!electionActive, "Election is still active");

        Candidate memory winner = candidates[0];

        for (uint i = 1; i < candidates.length; i++) {
            if (candidates[i].voteCount > winner.voteCount) {
                winner = candidates[i];
            }
        }

        return winner;
    }
}
