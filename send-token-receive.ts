import "dotenv/config";
import {
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { Connection, clusterApiUrl, Transaction } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

// Той кому ми відправили хеш транзи

const recipient = getKeypairFromEnvironment("SECRET_KEY_2");

const encodedTransaction = "AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACL+r2lMYf+xRWl/6xiOYD9EpoVPyMM/xzsenLxj8HHT46NTOploi31zufaxZr1YtEvy+YzV/47jP5FVPc7EEUGAgEBBQUSb3g7SU3HdHsRyJH/T9Md3pfbVSLDDxjh9FL2qNLmBNX+5sVXqh71+pIINty+07jImgM1pBrLTAbxj4IBl1NLWjP7wT/F+ZPInSllOimkkkr9kI+3Fp/bkckMhmqH2N+OGCSEaJsg0WlFRLbcf42U9bU3fkUnDdvlBoPNlep+Bt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKkKJTprDLeKsaD+uzKc214Jl9QgD4iKY8K06lxKSeaAIQEEAwMCAQkDIwAAAAAAAAA=!";

// Розкодовуємо і підписуємо отримувачем

const transaction = Transaction.from(Buffer.from(encodedTransaction, "base64"));

transaction.partialSign(recipient);

// Тепер серіалізуємо і кодуємо транзу знову, бо інакше ми її не відправимо на виконання

const encodedNextTransaction = transaction.serialize({
  requireAllSignatures: true,
  verifySignatures: true,
}).toString("base64");

// Відправляємо транзу і чекаємо на опрацювання

const signature = await connection.sendEncodedTransaction(encodedNextTransaction);

console.log(`✅ Transaction sent: ${signature}`);

const { lastValidBlockHeight, blockhash } =  await connection.getLatestBlockhash();

await connection.confirmTransaction(
  {
    blockhash,
    lastValidBlockHeight,
    signature,
  },
  "confirmed",
);

console.log(`✅ Transaction confirmed, signature: ${signature}`);
