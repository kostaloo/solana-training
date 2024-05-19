import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { mintTo, getMint } from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const signer1 = getKeypairFromEnvironment("SECRET_KEY");
const signer2 = getKeypairFromEnvironment("SECRET_KEY_2");
const payer = signer1;

const multisigKey = new PublicKey("DvNcMwH5R3Numpv5696hgfC1ZrUwcfbeB4FeAFER9Jae");

const multisigMint = new PublicKey("7GGcMnCBQX9vZCXNidVKkjRjrPXnoK9fM8KUEerDnV9F");

const multisigTokenAccount = new PublicKey("G3faxiDykEZtEpEp5GUXtvENe1M1XaczWnAhRJiqyPDF");

// const transSig = await mintTo(
//   connection,
//   payer,
//   multisigMint,
//   multisigTokenAccount,
//   multisigKey,
//   1001,
//   [
//     signer1,
//     signer2
//   ]
// )

// const link = getExplorerLink("transaction", transSig, "devnet");

// console.log(`✅ Success! Check explorer: ${link}`);

const mintInfo = await getMint(
  connection,
  multisigMint
)

console.log(`✅ Success! Minted ${mintInfo.supply} token on mint ${multisigMint}`);

