import "dotenv/config";
import {
  getKeypairFromEnvironment
} from "@solana-developers/helpers";
import { getOrCreateAssociatedTokenAccount, createTransferInstruction } from "@solana/spl-token";
import {
  Connection,
  PublicKey,
  Keypair,
  SystemProgram,
  clusterApiUrl,
  Transaction,
  sendAndConfirmTransaction,
  NonceAccount,
  NONCE_ACCOUNT_LENGTH
} from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const onlineAccount = getKeypairFromEnvironment("SECRET_KEY");

const onlineTokenAccount = new PublicKey("G3faxiDykEZtEpEp5GUXtvENe1M1XaczWnAhRJiqyPDF");

const offlineTokenAccount = new PublicKey("659MVksAZLgHrGPuUGzsw4cAofoWqwCHQQkr9mFwXHpb");

const nonceAccount = Keypair.generate();

const minimumAmount = await connection.getMinimumBalanceForRentExemption(
  NONCE_ACCOUNT_LENGTH,
);

const nonceTransaction = new Transaction()
  .add(
  SystemProgram.createNonceAccount({
    fromPubkey: onlineAccount.publicKey,
    noncePubkey: nonceAccount.publicKey,
    authorizedPubkey: onlineAccount.publicKey,
    lamports: minimumAmount,
  }),
);

await sendAndConfirmTransaction(connection, nonceTransaction, [onlineAccount, nonceAccount])

const nonceAccountData = await connection.getNonce(
  nonceAccount.publicKey,
  'confirmed',
);

console.log(`✅ Nonce account created: ${nonceAccountData}`);

const nonceAccountInfo = await connection.getAccountInfo(
  nonceAccount.publicKey,
  'confirmed'
);

console.log(`✅ Nonce account info: ${nonceAccountInfo}`);

if (nonceAccountInfo !== null) {

  const nonceAccountFromInfo = NonceAccount.fromAccountData(nonceAccountInfo.data);

  console.log(`✅ Nonce account from info: ${nonceAccountFromInfo}`);

  const nonceInstruction = SystemProgram.nonceAdvance({
    authorizedPubkey: onlineAccount.publicKey,
    noncePubkey: nonceAccount.publicKey
  });

  const sendTokenInstruction = createTransferInstruction(
    onlineTokenAccount,
    offlineTokenAccount,
    onlineAccount.publicKey,
    18
  );

  const nonce = nonceAccountFromInfo.nonce;

  const sendTokenTransaction = new Transaction();

  // sendTokenTransaction.recentBlockhash = nonce;
  sendTokenTransaction.nonceInfo = {nonce, nonceInstruction};
  sendTokenTransaction.feePayer = onlineAccount.publicKey;

  sendTokenTransaction.add(nonceInstruction);
  sendTokenTransaction.add(sendTokenInstruction);

  sendTokenTransaction.sign(onlineAccount);

  // const signedSendTokenTransaction = await signTransaction(sendTokenTransaction); // це ще куди?

  const serialisedSendTokenTransaction = sendTokenTransaction.serialize({ requireAllSignatures: false }).toString("base64");

  console.log(`✅ Signed durable nonce transaction: ${serialisedSendTokenTransaction}`);
}

else {
  console.log("⛔ Cannot get nonce account info or null");
}