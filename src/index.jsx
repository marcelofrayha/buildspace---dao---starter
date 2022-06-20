import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import thirdweb provider and Rinkeby ChainId
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;

// Wrap your app with the thirdweb provider
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
const PRIVATE_KEY = process.env['PRIVATE_KEY']
const WALLET_ADDRESS = process.env['WALLET_ADDRESS']
const ALCHEMY_API_URL = process.env['ALCHEMY_API_URL']
