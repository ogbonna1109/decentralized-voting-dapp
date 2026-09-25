import { useEffect, useState } from "react";
import { BrowserProvider } from "ethers";

function useWallet() {
    const [account, setAccount] = useState(null);
    const [connecting, setConnecting] = useState(false);

    async function connectWallet() {
        if (!window.ethereum) {
            alert("Please install MetaMask.");
            return;
        }

        try {
            setConnecting(true);

            const provider = new BrowserProvider(window.ethereum);

            const accounts = await provider.send(
                "eth_requestAccounts",
                []
            );

            if (accounts.length > 0) {
                setAccount(accounts[0]);
            }
        } catch (error) {
            console.error("Wallet connection failed:", error);
        } finally {
            setConnecting(false);
        }
    }

    useEffect(() => {
        if (!window.ethereum) return;

        async function loadWallet() {
            try {
                const provider = new BrowserProvider(window.ethereum);

                const accounts = await provider.send(
                    "eth_accounts",
                    []
                );

                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                }
            } catch (error) {
                console.error("Could not load wallet:", error);
            }
        }

        loadWallet();
    }, []);

    useEffect(() => {
        if (!window.ethereum) return;

        function handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                setAccount(null);
            } else {
                setAccount(accounts[0]);
            }
        }

        window.ethereum.on(
            "accountsChanged",
            handleAccountsChanged
        );

        return () => {
            window.ethereum.removeListener(
                "accountsChanged",
                handleAccountsChanged
            );
        };
    }, []);

    return {
        account,
        connecting,
        connectWallet,
    };
}

export default useWallet;