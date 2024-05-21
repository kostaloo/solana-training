import "dotenv/config";
import {
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { getOrCreateAssociatedTokenAccount, createTransferInstruction } from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl, Transaction } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

// blockhash це типу таймстемпу в концепції PoH, а lastValidBlockHeight визначає останній блок, яким має бути підтверджена транза
// якщо не подбати про це, матимемо помилку Transaction recentBlockhash required

const { lastValidBlockHeight, blockhash } = await connection.getLatestBlockhash("finalized");

const sender = getKeypairFromEnvironment("SECRET_KEY");

const senderTokenAccount = new PublicKey("G3faxiDykEZtEpEp5GUXtvENe1M1XaczWnAhRJiqyPDF");

const tokenMintAccount = new PublicKey("7GGcMnCBQX9vZCXNidVKkjRjrPXnoK9fM8KUEerDnV9F");

const recipient = new PublicKey("LoLtS3XaUDr8QmEK8Fc3eiaE9iZrgWgTspNj6NisYWy");

const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  sender,
  tokenMintAccount,
  recipient
);

// Маємо намір надіслати 35 токенів, але тепер отримувач платить фі, а також включимо в транзу останній блокхеш

const transaction = new Transaction({
  feePayer: recipient,
  blockhash,
  lastValidBlockHeight
});

transaction.add(
  createTransferInstruction(
    senderTokenAccount,
    recipientTokenAccount.address,
    sender.publicKey,
    35
  ),
);

// Підписуємо транзу частково, серіалізуємо і кодуємо в base64, щоб можна було віднести хоч куди

transaction.partialSign(sender);

const encodedTransaction = transaction.serialize({
  requireAllSignatures: false // default true
  // verifySignatures: true, // default true
}).toString("base64");

console.log(`✅ Transaction created: ${encodedTransaction}`);