import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const payer = getKeypairFromEnvironment("SECRET_KEY");

const multisigMint = new PublicKey("7GGcMnCBQX9vZCXNidVKkjRjrPXnoK9fM8KUEerDnV9F");

const recipient = new PublicKey("KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL");

const multisigAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  payer,
  multisigMint,
  recipient
);

console.log(`Created multisig token account ${multisigAccount.address.toBase58()}`);

const link = getExplorerLink("address", multisigAccount.address.toBase58(), "devnet");

console.log(`✅ Check explorer: ${link}`);