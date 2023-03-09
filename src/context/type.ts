import * as anchor from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

export interface GlobalPool {
    totalAmount: anchor.BN,
}

export interface StakedNFT {
    nftAddr: PublicKey,
    stakedTime: anchor.BN
}

export interface UserPool {
    owner: PublicKey,
    itemCount: anchor.BN,
    items: StakedNFT[],
    xpGained: anchor.BN,
}

export const JACKPOT_PROGRAM_ID = new PublicKey("8QEYpGm6kZFnY8MhPjgJKzwQqRgU3yihYgGr7o2iQQo6");