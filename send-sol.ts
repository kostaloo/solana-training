import "dotenv/config";
import bs58 from "bs58";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  Connection,
  sendAndConfirmTransaction
} from "@solana/web3.js";

const sender = getKeypairFromEnvironment("SECRET_KEY");

console.log(sender);

// const sender = new Uint8Array([23,110,133,243,153,160,77,80,192,160,173,214,1,242,100,143,247,33,201,119,201,71,147,242,224,104,176,168,230,250,241,214,4,213,254,230,197,87,170,30,245,250,146,8,54,220,190,211,184,200,154,3,53,164,26,203,76,6,241,143,130,1,151,83]);

// const sender = 'UAxAZgbg5CBycgsrpLNyPUcc3tfG4HH1EjKss9rykmEbu58WuafUYG19JTvo8fkBF5muBAAZVAKaD7zZp1ehxdY';

const connection = new Connection(clusterApiUrl("devnet"));

console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${sender.publicKey.toBase58()}`
);

const recipient = new PublicKey("LoLtS3XaUDr8QmEK8Fc3eiaE9iZrgWgTspNj6NisYWy");

const amount = .05

console.log(`💸 Attempting to send ${amount} SOL to ${recipient.toBase58()}...`);

const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender.publicKey,
  toPubkey: recipient,
  lamports: amount * LAMPORTS_PER_SOL,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  sender,
]);

console.log(`✅ Transaction confirmed, signature: ${signature}!`);