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

// BEGIN CURRENCY MODULE

const token = sdk.getCurrencyModule("0x26378472I8293827b0f390293829381283F3FF56");

// SET THE AMOUNT OF CURRENY YOU WANT TO MINT
// PARAMETERS : ACTUAL AMOUNT AND NUMBER OF DECIMALS

const amount = ethers.utils.parseUnits("1000", 18);

// MINTING THE CURRENCY / 1000 NOMAD COIN

async function mintCurrency() {
    console.log(await token.mint(amount));
}

// RUN THE FUNCTION

mintCurrency();