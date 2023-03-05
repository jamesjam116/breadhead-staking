import React, { useState } from "react";
import Frame from "../components/Frame";
import "../styles/globals.css"

function StakingApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
  );
}

export default StakingApp;
