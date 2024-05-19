import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { createMultisig } from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const payer = getKeypairFromEnvironment("SECRET_KEY");

const signer1 = new PublicKey("KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL");
const signer2 = new PublicKey("LoLtS3XaUDr8QmEK8Fc3eiaE9iZrgWgTspNj6NisYWy");

const multisigKey = await createMultisig(
  connection,
  payer,
  [
    signer1,
    signer2
  ],
  2
);

console.log(`Created 2/2 multisig ${multisigKey.toBase58()}`);

const link = getExplorerLink(
  "address",
  multisigKey.toBase58(),
  "devnet"
);

console.log(`✅ Check explorer: ${link}`);