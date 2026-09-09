//SPDX-License-Identifie: MIT

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

    constructor(string memory _electionName) {
        electionName = _electionName;
    }

    function addCandidate(
        string memory _name,
        string memory _image,
        uint _age,
        string _party
    ) public {
        uint candidateId = candidates.length + 1;
        candidates.push(Candidate(candidateId, _name, _image, _age, _party, 0));
    }
}
