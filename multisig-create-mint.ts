import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { createMint } from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const payer = getKeypairFromEnvironment("SECRET_KEY");

const multisigKey = new PublicKey("DvNcMwH5R3Numpv5696hgfC1ZrUwcfbeB4FeAFER9Jae");

const multisigMint = await createMint(
  connection,
  payer,
  multisigKey,
  multisigKey,
  2
);

console.log(`Created multisig token mint ${multisigMint.toString()}`);

const link = getExplorerLink("address", multisigMint.toString(), "devnet");

console.log(`✅ Check explorer: ${link}`);