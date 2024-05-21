import "dotenv/config";
import {
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { getOrCreateAssociatedTokenAccount, createTransferInstruction } from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const sender = getKeypairFromEnvironment("SECRET_KEY");

// Я точно маю токени

const senderTokenAccount = new PublicKey("G3faxiDykEZtEpEp5GUXtvENe1M1XaczWnAhRJiqyPDF");

// Мій мінт екаунт для мультисіг мінту попреднього завдання

const tokenMintAccount = new PublicKey("7GGcMnCBQX9vZCXNidVKkjRjrPXnoK9fM8KUEerDnV9F");

// Знаю про отримувача лише публічний ключ

const recipient = new PublicKey("LoLtS3XaUDr8QmEK8Fc3eiaE9iZrgWgTspNj6NisYWy");

// Знаю, що маю token account і баланс, але не впевнений, що має отримувач

const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  sender,
  tokenMintAccount,
  recipient
);

// Тепер маємо токен екаунт отримувача і надсилаємо 92 токени

const transaction = new Transaction().add(
  createTransferInstruction(
    senderTokenAccount,
    recipientTokenAccount.address,
    sender.publicKey,
    92
  ),
);

const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);

console.log(`✅ Transaction confirmed, signature: ${signature}`);