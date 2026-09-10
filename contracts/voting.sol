//SPDX-License-Identifie: UNLICENSED

pragma solidity ^0.8.20;

contract voting {
    string public electionName;

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

    address public owner;

    constructor(string memory _electionName) {
        electionName = _electionName;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can add candidate");
        _;
    }

    function addCandidate(
        string memory _name,
        string memory _image,
        uint _age,
        string _party
    ) public onlyOwner {
        uint candidateId = candidates.length + 1;
        candidates.push(Candidate(candidateId, _name, _image, _age, _party, 0));
    }

    function vote(uint _candidateId) public {
        require(!hasVoted[msg.sender], "you have already voted");

        require(
            _candidateId > 0 && _candidateId <= candidates.length,
            "invalid candidate"
        );
        candidates[_candidateId - 1].voteCount++;
        hasVoted[msg.sender] = true;
    }
}
