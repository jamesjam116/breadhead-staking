type Staking = {
    "version": "0.1.0",
    "name": "staking",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initializeFixedPool",
            "accounts": [
                {
                    "name": "userFixedPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": []
        },
        {
            "name": "stakeNftToFixed",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userFixedPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "nftMint",
                    "isMut": false,
                    "isSigner": false,
                    "docs": [
                        "CHECK"
                    ]
                },
                {
                    "name": "mintMetadata",
                    "isMut": false,
                    "isSigner": false,
                    "docs": [
                        "CHECK"
                    ]
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenMetadataProgram",
                    "isMut": false,
                    "isSigner": false,
                    "docs": [
                        "CHECK"
                    ]
                }
            ],
            "args": []
        },
        {
            "name": "withdrawNftFromFixed",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userFixedPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "nftMint",
                    "isMut": false,
                    "isSigner": false,
                    "docs": [
                        "CHECK"
                    ]
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "GlobalPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "totalAmount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "UserPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "owner",
                        "type": "publicKey"
                    },
                    {
                        "name": "itemCount",
                        "type": "u64"
                    },
                    {
                        "name": "items",
                        "type": {
                            "array": [
                                {
                                    "defined": "StakedNFT"
                                },
                                50
                            ]
                        }
                    },
                    {
                        "name": "xpGained",
                        "type": "u64"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "StakedNFT",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "nftAddr",
                        "type": "publicKey"
                    },
                    {
                        "name": "stakedTime",
                        "type": "i64"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidUserPool",
            "msg": "Invalid User Pool"
        },
        {
            "code": 6001,
            "name": "InvalidCollection",
            "msg": "Invalid Collection"
        },
        {
            "code": 6002,
            "name": "InvalidAdmin",
            "msg": "Invalid User Pool"
        },
        {
            "code": 6003,
            "name": "InvalidPoolError",
            "msg": "Invalid pool number"
        },
        {
            "code": 6004,
            "name": "InvalidNFTAddress",
            "msg": "No Matching NFT to withdraw"
        },
        {
            "code": 6005,
            "name": "InvalidOwner",
            "msg": "NFT Owner key mismatch"
        },
        {
            "code": 6006,
            "name": "InvalidWithdrawTime",
            "msg": "Staking Locked Now"
        },
        {
            "code": 6007,
            "name": "IndexOverflow",
            "msg": "Withdraw NFT Index OverFlow"
        },
        {
            "code": 6008,
            "name": "BeforeLockTime",
            "msg": "You can't Unstake Before LockTime"
        },
        {
            "code": 6009,
            "name": "LackLamports",
            "msg": "Insufficient Lamports"
        },
        {
            "code": 6010,
            "name": "MetadataCreatorParseError",
            "msg": "Can't Parse The NFT's Creators"
        },
        {
            "code": 6011,
            "name": "InvalidMetadata",
            "msg": "Invalid Metadata Address"
        }
    ],
    "metadata": {
        "address": "8QEYpGm6kZFnY8MhPjgJKzwQqRgU3yihYgGr7o2iQQo6"
    }
}

export const IDL: Staking = {
    "version": "0.1.0",
    "name": "staking",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initializeFixedPool",
            "accounts": [
                {
                    "name": "userFixedPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": []
        },
        {
            "name": "stakeNftToFixed",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userFixedPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "nftMint",
                    "isMut": false,
                    "isSigner": false,
                    "docs": [
                        "CHECK"
                    ]
                },
                {
                    "name": "mintMetadata",
                    "isMut": false,
                    "isSigner": false,
                    "docs": [
                        "CHECK"
                    ]
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenMetadataProgram",
                    "isMut": false,
                    "isSigner": false,
                    "docs": [
                        "CHECK"
                    ]
                }
            ],
            "args": []
        },
        {
            "name": "withdrawNftFromFixed",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userFixedPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "nftMint",
                    "isMut": false,
                    "isSigner": false,
                    "docs": [
                        "CHECK"
                    ]
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "GlobalPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "totalAmount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "UserPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "owner",
                        "type": "publicKey"
                    },
                    {
                        "name": "itemCount",
                        "type": "u64"
                    },
                    {
                        "name": "items",
                        "type": {
                            "array": [
                                {
                                    "defined": "StakedNFT"
                                },
                                50
                            ]
                        }
                    },
                    {
                        "name": "xpGained",
                        "type": "u64"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "StakedNFT",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "nftAddr",
                        "type": "publicKey"
                    },
                    {
                        "name": "stakedTime",
                        "type": "i64"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidUserPool",
            "msg": "Invalid User Pool"
        },
        {
            "code": 6001,
            "name": "InvalidCollection",
            "msg": "Invalid Collection"
        },
        {
            "code": 6002,
            "name": "InvalidAdmin",
            "msg": "Invalid User Pool"
        },
        {
            "code": 6003,
            "name": "InvalidPoolError",
            "msg": "Invalid pool number"
        },
        {
            "code": 6004,
            "name": "InvalidNFTAddress",
            "msg": "No Matching NFT to withdraw"
        },
        {
            "code": 6005,
            "name": "InvalidOwner",
            "msg": "NFT Owner key mismatch"
        },
        {
            "code": 6006,
            "name": "InvalidWithdrawTime",
            "msg": "Staking Locked Now"
        },
        {
            "code": 6007,
            "name": "IndexOverflow",
            "msg": "Withdraw NFT Index OverFlow"
        },
        {
            "code": 6008,
            "name": "BeforeLockTime",
            "msg": "You can't Unstake Before LockTime"
        },
        {
            "code": 6009,
            "name": "LackLamports",
            "msg": "Insufficient Lamports"
        },
        {
            "code": 6010,
            "name": "MetadataCreatorParseError",
            "msg": "Can't Parse The NFT's Creators"
        },
        {
            "code": 6011,
            "name": "InvalidMetadata",
            "msg": "Invalid Metadata Address"
        }
    ],
    "metadata": {
        "address": "8QEYpGm6kZFnY8MhPjgJKzwQqRgU3yihYgGr7o2iQQo6"
    }
}