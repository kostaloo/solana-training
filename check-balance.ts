import "dotenv/config";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

const PUBLIC_KEY = 'KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL';

const connection = new Connection(clusterApiUrl("devnet"));

console.log(`⚡️ Connected to devnet`);

const publicKey = new PublicKey(PUBLIC_KEY);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
