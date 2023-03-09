/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Card from "../components/Ucard";
import { solConnection, withdrawNft } from "../context/transaction";
import { getUserPoolState } from "../context/transaction"
import { web3 } from '@project-serum/anchor';
import { useWallet } from "@solana/wallet-adapter-react";
import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
import { CREATOR_ADDRESS } from "../config";
import { programs } from '@metaplex/js';
import Skeleton from '@mui/material/Skeleton';
import {
    TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
export interface NFTType {
    imgUrl: string;
    tokenId: string;
    description: string;
    mint: string
}
function Ustaking() {
    const [isPageLoading, setIsPageLoading] = useState(false);
    const wallet = useWallet();
    const [totalStaked, setTotalStaked] = useState(0);
    const [nftList, setNftList] = useState<NFTType[]>([]);





    const getStakedNfts = async () => {
        setIsPageLoading(true);
        const data: { mint: string; stakedTime: number; }[] = [];
        const userData = await getUserPoolState(wallet);
        if (userData) {
            const cnt = userData.itemCount.toNumber();
            setTotalStaked(cnt);
            if (cnt !== 0) {
                for (let i = 0; i < cnt; i++) {
                    data.push({
                        mint: userData.items[i].nftAddr.toBase58(),
                        stakedTime: userData.items[i].stakedTime.toNumber()
                    })
                }
            }
            //initialize metadata
            let {
                metadata: { Metadata },
            } = programs;
            //create a list that contains data uri to fetch
            const list = [];
            for (let i = 0; i < cnt; i++) {

                let metadataAccount =
                    await Metadata.getPDA(data[i].mint);
                const metadata = await Metadata.load(
                    solConnection,
                    metadataAccount
                );
                list.push(metadata.data.data.uri)
            }
            console.log(list);
            //create an array of nftlist
            let nft_list: NFTType[] = [];

            for (let i = 0; i < cnt; i++) {
                const response = await fetch(list[i], {
                    method: "GET",
                });
                const resdata = await response.json();
                console.log('resdata----------->', resdata);

                nft_list.push(
                    {
                        imgUrl: resdata.image,
                        tokenId: resdata.name,
                        description: resdata.description,
                        mint: data[i].mint
                    }
                )
            }
            setNftList(nft_list);
            console.log(nft_list);

            setIsPageLoading(false);

            return list;
        }
    }

    useEffect(() => {
        if (wallet.publicKey) getStakedNfts();
        // eslint-disable-next-line
    }, [wallet.publicKey, wallet.connected]);

    return (
        <section className="justify-between overflow-hidden flex flex-col ml-[1px] w-full  mb-6 rounded-[10px] mr-4">
            <div className="flex justify-between pb-3">
                <h4 className="text-[14px] text-black-100 pt-3 pl-3 font-bold">Staking</h4>
            </div>
            <div className="ml-3 mr-3 mb-4 flex flex-col justify-center items-center ">
                <section className=" flex flex-col w-[704px] mb-6 rounded-[10px] mr-4 ml-[15px]">
                    <div className="flex flex-col pb-3">
                        <div className="flex justify-between pl-3 pr-3 pt-4">
                            <div className="flex flex-row">
                                <button className="flex justify-center rounded-[8px] bg-[#0074CC1A] text-[12px] font-semibold text-[#0074CC] text-center pt-[5px] pb-[7px] pl-4 pr-4 mr-2 items-center"><p>Current Multiplier: 2.5x</p> </button>
                                <button className="flex flex-row justify-center rounded-[8px] bg-[#0074CC1A] text-[12px] font-semibold text-[#0074CC] text-center pt-[5px] pb-[7px] pl-4 pr-4 mr-2 items-center"><p className="flex"><img className="top-[10px] px-1" src="/img/baicai.svg" alt="" />Breadhead badge</p> </button>

                            </div>
                            <button className="rounded-[8px] bg-black-10 text-[12px] font-bold text-[#00000059] text-center pt-[5px] pb-[7px] pl-4 pr-4 border-[#0000001A] border-[1px]">Stake all</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 ml-3">
                        {isPageLoading ? <div className="flex flex-row justify-between gap-4 m-auto">

                            <Skeleton sx={{ bgcolor: '#aba540' }} variant="rectangular" width={210} height={300} />
                            <Skeleton sx={{ bgcolor: '#aba540' }} variant="rectangular" width={210} height={300} />
                            <Skeleton sx={{ bgcolor: '#aba540' }} variant="rectangular" width={210} height={300} />
                        </div> :
                            nftList.length > 0 && nftList.map((data, key) => (
                                <Card imgUrl={data.imgUrl} name={data.tokenId} description={data.description} key={key} mint={data.mint} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Ustaking;