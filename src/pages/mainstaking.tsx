import Image from "next/image";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { PublicKey } from "@solana/web3.js";
import {
    WalletModalProvider,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
import { CREATOR_ADDRESS } from "../config";

import { web3 } from '@project-serum/anchor';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
export interface NFTType {
    imgUrl: string;
    tokenId: string;
    description: string;
    mint: string
}
function Mainstaking() {
    const wallet = useWallet();
    const [nftList, setNftList] = useState<NFTType[]>([]);
    const [myBalance, setMyBalance] = useState<Number>(0);
    const [selectState, setSlectState] = useState<boolean>(false);
    const [isPageLoading, setIsPageLoading] = useState(false);
    useEffect(() => {
        getAllNfts();
        // eslint-disable-next-line
    }, [wallet.publicKey, wallet.connected]);
    const getAllNfts = async () => {
        setIsPageLoading(true);
        const solConnection = new web3.Connection(web3.clusterApiUrl("devnet"));
        if (wallet?.publicKey) {
            let balance = await solConnection.getBalance(wallet.publicKey)
            setMyBalance(balance)
        }

        if (wallet.publicKey === null) return;
        try {
            const nftList = await getParsedNftAccountsByOwner({
                publicAddress: wallet.publicKey.toBase58(),
                connection: solConnection,
            });
            console.log(nftList);

            let list: NFTType[] = [];
            if (nftList.length > 0) {
                for (let item of nftList) {
                    if (item.data?.creators)
                        if (item.data?.creators[0].address === CREATOR_ADDRESS) {
                            {
                                console.log(item);

                                try {
                                    const response = await fetch(item?.data.uri, {
                                        method: "GET",
                                    });

                                    const responsedata = await response.json();
                                    //console.log(responsedata)
                                    list.push({
                                        imgUrl: responsedata.image,
                                        tokenId: item?.data.name,
                                        description: responsedata.description,
                                        mint: item.mint

                                    });

                                } catch (error) {
                                    console.error("Unable to fetch data:", error);
                                }
                            }
                        }
                }
            }

            console.log("nftList =>", list)
            setNftList(list);
            setIsPageLoading(false);
        } catch (error) {
            console.log(error);
            setIsPageLoading(false);
        }
    };

    return (
        <section className="justify-between overflow-hidden flex flex-col ml-[1px] w-full mb-6 rounded-[10px] mr-4">
            <div className="flex justify-between pb-3">
                <h4 className="text-[14px] text-black-100 pt-3 pl-3 font-bold">Staking</h4>
            </div>
            <div className="ml-3 mr-3 mb-4 flex flex-col justify-center items-center ">
                <section className=" flex flex-col w-[704px] mb-6 rounded-[10px] mr-4 ml-[15px]">
                    <div className="flex flex-col pb-3">
                        <div className="flex justify-between pl-3 pr-3 pt-4">
                            <div className="flex flex-row">
                                <button className="flex justify-center rounded-[8px] bg-[#0074CC1A] text-[12px] font-semibold text-[#0074CC] text-center pt-[5px] pb-[7px] pl-4 pr-4 mr-2 items-center"><p>Current Multiplier: 2.5x</p> </button>
                                <button className="flex flex-row justify-center rounded-[8px] bg-[#0074CC1A] text-[12px] font-semibold text-[#0074CC] text-center pt-[5px] pb-[7px] pl-4 pr-4 mr-2 items-center"><p className="flex">No badge</p> </button>

                            </div>
                            <button className="rounded-[8px] bg-black-10 text-[12px] font-bold text-[#00000059] text-center pt-[5px] pb-[7px] pl-4 pr-4 border-[#0000001A] border-[1px]">Stake all</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap ml-1">
                        {isPageLoading ?
                            <div className="flex flex-row justify-between gap-4 m-auto">

                                <Skeleton sx={{ bgcolor: '#c1bccc' }} variant="rectangular" width={210} height={300} />
                                <Skeleton sx={{ bgcolor: '#c1bccc' }} variant="rectangular" width={210} height={300} />
                                <Skeleton sx={{ bgcolor: '#c1bccc' }} variant="rectangular" width={210} height={300} />
                            </div>
                            : nftList.length > 0 && nftList.map((data, key) => (
                                <Card imgUrl={data.imgUrl} name={data.tokenId} description={data.description} key={key} mint={data.mint} />
                            ))}

                    </div>

                </section>
            </div>
        </section>)
}

export default Mainstaking;