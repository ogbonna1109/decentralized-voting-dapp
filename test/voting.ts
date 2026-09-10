const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting", function () {

    let voting;
    let owner;
    let voter;

    beforeEach(async function () {

        [owner, voter] = await ethers.getSigners();

        const Voting = await ethers.getContractFactory("Voting");

        voting = await Voting.deploy("2026 FUTO Student Election");

        await voting.waitForDeployment();
    });

    it("should set the election name correctly", async function () {

        expect(await voting.electionName())
            .to.equal("2026 FUTO Student Election");

    });

});