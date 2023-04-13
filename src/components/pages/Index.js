import { useState, useEffect } from 'react';
//import { Helmet } from "react-helmet-async";
//import { HashLink as Link } from 'react-router-hash-link';

// Components
//import ConnectToWallets from '../common/ConnectToWallets';
//import RamenWallet from './RamenWallet';

const Index = ({AppName, AppUrl, setCurrentPage}) => {

    useEffect(() => {
		setCurrentPage('index');
	}, [setCurrentPage]);

    return (
        <div className="container">

            <div className="terminal">
                    <div className='header'>
                        <img src="/img/logo.png" alt="logo" />
                        <h1>Resource Grinder Game</h1>
                    </div> 
            </div>
        </div>
    )
}

export default Index