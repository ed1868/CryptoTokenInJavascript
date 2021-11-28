// IMPORT NEEDED LIBRARIES 
import { thirdWebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

// CREATE A .ENV FILE AND STORE PRIVATE KEY

// IMPORT PRIVATE KEY
require('dotnev').config()

// BEGIN INSTANCE OF 3RDWEB SDK

const sdk = new thirdWebSDK(
    new ethers.Wallet(
        // YOUR WALLET PRIVATE KEY 
        process.env.PRIVATE_KEY as string,

        // RPC URL
        ethers.getDefaultProvider('https://rinkeby-light.eth.linkpool.io/')

    )
);
