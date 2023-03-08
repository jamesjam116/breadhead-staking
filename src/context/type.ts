import * as anchor from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

export interface GlobalPool {
    total_amount: anchor.BN,
}

export interface StakedNFT {
    nft_addr: PublicKey,
    staked_time: anchor.BN
}

export interface UserPool {
    owner: PublicKey,
    item_count: anchor.BN,
    items: StakedNFT[],
    xp_gained: anchor.BN,
}

export const JACKPOT_PROGRAM_ID = new PublicKey("8QEYpGm6kZFnY8MhPjgJKzwQqRgU3yihYgGr7o2iQQo6");