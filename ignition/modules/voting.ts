import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VotingModule = buildModule("VotingModule", (m) => {
    const voting = m.contract("voting", [
        "2027 Nigerian Presidential General Election"
    ]);

    return {
        voting,
    };
});

export default VotingModule;