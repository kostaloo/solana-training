import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `Public key: ${keypair.publicKey.toBase58()},
  Private key: ${keypair.secretKey}`
);
