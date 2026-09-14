import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("Voting", function () {

    let voting: any;
    let owner: any;
    let voter: any;

    beforeEach(async function () {

        [owner, voter] = await ethers.getSigners();

        voting = await ethers.deployContract("voting", ["2027 Nigerian Presidential General Election"]);
    });

    // =========================================================
    // TEST 1: Election name
    // =========================================================

    it("should set the election name correctly", async function () {

        expect(await voting.electionName())
            .to.equal("2027 Nigerian Presidential General Election");

    });


    // =========================================================
    // TEST 2: Owner
    // =========================================================

    it("should set the deployer as the owner", async function () {

        expect(await voting.owner())
            .to.equal(owner.address);

    });


    // =========================================================
    // TEST 3: Owner can add candidate
    // =========================================================

    it("should allow the owner to add a candidate", async function () {

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        const candidate = await voting.candidates(0);

        expect(candidate.id).to.equal(1n);
        expect(candidate.name).to.equal("John Doe");
        expect(candidate.image).to.equal(
            "https://example.com/john.jpg"
        );
        expect(candidate.age).to.equal(25n);
        expect(candidate.party).to.equal("APC");
        expect(candidate.voteCount).to.equal(0n);

    });


    // =========================================================
    // TEST 4: Non-owner cannot add candidate
    // =========================================================

    it("should prevent a non-owner from adding a candidate", async function () {

        await expect(
            voting.connect(voter).addCandidate(
                "Jane Smith",
                "https://example.com/jane.jpg",
                23,
                "PDP"
            )
        ).to.be.revertedWith(
            "Only owner can add candidate"
        );

    });


    // =========================================================
    // TEST 5: Multiple candidates can be added
    // =========================================================

    it("should allow the owner to add multiple candidates", async function () {

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        await voting.addCandidate(
            "Jane Smith",
            "https://example.com/jane.jpg",
            23,
            "PDP"
        );

        await voting.addCandidate(
            "Mike Johnson",
            "https://example.com/mike.jpg",
            28,
            "LP"
        );

        const candidate1 = await voting.candidates(0);
        const candidate2 = await voting.candidates(1);
        const candidate3 = await voting.candidates(2);

        expect(candidate1.id).to.equal(1n);
        expect(candidate2.id).to.equal(2n);
        expect(candidate3.id).to.equal(3n);

        expect(candidate1.name).to.equal("John Doe");
        expect(candidate2.name).to.equal("Jane Smith");
        expect(candidate3.name).to.equal("Mike Johnson");

    });


    // =========================================================
    // TEST 6: Candidate starts with zero votes
    // =========================================================

    it("should initialize a candidate with zero votes", async function () {

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        const candidate = await voting.candidates(0);

        expect(candidate.voteCount).to.equal(0n);

    });


    // =========================================================
    // TEST 7: Voter can vote
    // =========================================================

    it("should allow a voter to vote for a candidate", async function () {

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        await voting.connect(voter).vote(1);

        const candidate = await voting.candidates(0);

        expect(candidate.voteCount).to.equal(1n);

        expect(
            await voting.hasVoted(voter.address)
        ).to.equal(true);

    });


    // =========================================================
    // TEST 8: Same voter cannot vote twice
    // =========================================================

    it("should prevent a voter from voting twice", async function () {

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        await voting.connect(voter).vote(1);

        await expect(
            voting.connect(voter).vote(1)
        ).to.be.revertedWith(
            "you have already voted"
        );

    });


    // =========================================================
    // TEST 9: Invalid candidate ID
    // =========================================================

    it("should reject an invalid candidate ID", async function () {

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        await expect(
            voting.connect(voter).vote(2)
        ).to.be.revertedWith(
            "invalid candidate"
        );

    });


    // =========================================================
    // TEST 10: Candidate receives multiple votes
    // =========================================================

    it("should correctly count votes from different voters", async function () {

        const [owner, voter1, voter2] = await ethers.getSigners();

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        await voting.connect(voter1).vote(1);

        await voting.connect(voter2).vote(1);

        const candidate = await voting.candidates(0);

        expect(candidate.voteCount).to.equal(2n);

    });


    // =========================================================
    // TEST 11: Different voters can vote for different candidates
    // =========================================================

    it("should allow different voters to vote for different candidates", async function () {

        const [owner, voter1, voter2] = await ethers.getSigners();

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        await voting.addCandidate(
            "Jane Smith",
            "https://example.com/jane.jpg",
            23,
            "PDP"
        );

        await voting.connect(voter1).vote(1);

        await voting.connect(voter2).vote(2);

        const candidate1 = await voting.candidates(0);
        const candidate2 = await voting.candidates(1);

        expect(candidate1.voteCount).to.equal(1n);
        expect(candidate2.voteCount).to.equal(1n);

    });


    // =========================================================
    // TEST 12: hasVoted starts as false
    // =========================================================

    it("should initially mark a voter as not having voted", async function () {

        expect(
            await voting.hasVoted(voter.address)
        ).to.equal(false);

    });


    // =========================================================
    // TEST 13: Voting changes hasVoted to true
    // =========================================================

    it("should mark the voter as having voted after voting", async function () {

        await voting.addCandidate(
            "John Doe",
            "https://example.com/john.jpg",
            25,
            "APC"
        );

        expect(
            await voting.hasVoted(voter.address)
        ).to.equal(false);

        await voting.connect(voter).vote(1);

        expect(
            await voting.hasVoted(voter.address)
        ).to.equal(true);

    });


});
