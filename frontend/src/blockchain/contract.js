import { BrowserProvider, JsonRpcProvider, Contract } from "ethers";
import { VOTING_ADDRESS, VOTING_ABI } from "../contracts/voting";

const LOCAL_RPC_URL = "http://127.0.0.1:8545";

export async function checkAndSwitchNetwork() {
  if (!window.ethereum) return;
  const HARDHAT_CHAIN_ID = "0x7a69";
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: HARDHAT_CHAIN_ID }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: HARDHAT_CHAIN_ID,
              chainName: "Hardhat Localhost",
              rpcUrls: [LOCAL_RPC_URL],
              nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
              },
            },
          ],
        });
      } catch (addError) {
        console.error("Failed to add Hardhat network:", addError);
      }
    }
  }
}

export function getReadOnlyContract() {
  const provider = new JsonRpcProvider(LOCAL_RPC_URL);
  return new Contract(VOTING_ADDRESS, VOTING_ABI, provider);
}

export async function getVotingContract() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed.");
  }

  await checkAndSwitchNetwork();

  const provider = new BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  return new Contract(VOTING_ADDRESS, VOTING_ABI, signer);
}

export async function getCandidates() {
  try {
    const contract = getReadOnlyContract();
    const count = await contract.getCandidateCount();
    const candidatesList = [];

    for (let i = 0; i < count; i++) {
      const candidate = await contract.candidates(i);
      candidatesList.push({
        id: candidate.id.toString(),
        name: candidate.name,
        image: candidate.image,
        age: candidate.age.toString(),
        party: candidate.party,
        voteCount: candidate.voteCount.toString()
      });
    }

    return candidatesList;
  } catch (error) {
    console.warn("Direct RPC read failed, falling back to window.ethereum contract:", error);
    const contract = await getVotingContract();
    const count = await contract.getCandidateCount();
    const candidatesList = [];

    for (let i = 0; i < count; i++) {
      const candidate = await contract.candidates(i);
      candidatesList.push({
        id: candidate.id.toString(),
        name: candidate.name,
        image: candidate.image,
        age: candidate.age.toString(),
        party: candidate.party,
        voteCount: candidate.voteCount.toString()
      });
    }

    return candidatesList;
  }
}

export async function getOwner() {
  try {
    const contract = getReadOnlyContract();
    return await contract.owner();
  } catch (error) {
    const contract = await getVotingContract();
    return await contract.owner();
  }
}

export async function addCandidate(name, image, age, party) {
  const contract = await getVotingContract();

  const transaction = await contract.addCandidate(
    name,
    image,
    Number(age),
    party
  );

  await transaction.wait();

  return transaction;
}