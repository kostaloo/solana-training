// This uses "@metaplex-foundation/mpl-token-metadata@2" to create tokens
import "dotenv/config";
import {
  getKeypairFromEnvironment,
  getExplorerLink,
} from "@solana-developers/helpers";
import {
  Connection,
  PublicKey,
  clusterApiUrl
} from "@solana/web3.js";
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";

const user = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"));

const metaplex = Metaplex.make(connection).use(keypairIdentity(user));

const tokenMintAccount = new PublicKey("GrcM8n7cxqEiXa2QxYZSk9sr2RT73X9a8fScjZbNo6t5");

const metadata = await metaplex.nfts().findByMint({ mintAddress: tokenMintAccount });

const signature = await metaplex.nfts().update({
    nftOrSft: metadata,
    uri: "https://harlequin-raw-reptile-458.mypinata.cloud/ipfs/QmQ1cgjQmVPNHPamtnwTQ6CXsJRy1MtaW6vfA6kJ4qMbce"
})

const link = getExplorerLink("address", metadata.address.toString(), "devnet");

console.log(`✅ Token metadata updated: ${link}`);
