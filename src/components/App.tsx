import React from 'react';
import Logo from "src/assets/svg/logo.svg"
import "src/styles/App.css"

// import Logo from "@svg/logo.svg"
// import "@style/App.css"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
                <p>
                    We're currently building SkyPier, the future of web3 VPN.
                </p>
                <a
                    className="App-link"
                    href="https://skypier.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Whitepaper
                </a>
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </header>
        </div>
    );
}

export default App;