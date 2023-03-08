import React, { useState } from "react";
import Frame from "../components/Frame";
import "../styles/globals.css"
import Wallet from "../components/wallet/Wallet"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { AppProps } from "next/app";

function StakingApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wallet>
      <Frame
        isSidebar={isOpen}
        setIsSidebar={setIsOpen}
      >
        <Component
          isSidebar={isOpen}
          setIsSidebar={setIsOpen}
          {...pageProps}
        />
      </Frame>
    </Wallet>

  );
}

export default StakingApp;
