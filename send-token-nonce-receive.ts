import "dotenv/config";
import { Connection, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

const encodedTransaction = "AUOg+5zzZLb+S6XHNVtfLeCZAuqVNst89NufK094ZZKTqwtshQT5onFMNfOF4jfrOiCFJ7mL6/wZeGgvvvZoawcBAAMHBNX+5sVXqh71+pIINty+07jImgM1pBrLTAbxj4IBl1NLWjP7wT/F+ZPInSllOimkkkr9kI+3Fp/bkckMhmqH2N+OGCSEaJsg0WlFRLbcf42U9bU3fkUnDdvlBoPNlep++1AH3ZeecvEQ/KymltjlnQz+C6BW4xVrJUQgtBcsXtIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAan1RcZLFaO4IqEX3PSl4jPA1wxRbIas0TYBi6pQAAABt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKmuldOMpIoueTjKu76DLv6Z5tGFKOZNc+j2HBawYdLKqAIEAwMFAAQEAAAABgMCAQAJAxIAAAAAAAAA";

const signature = await connection.sendEncodedTransaction(encodedTransaction);

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
