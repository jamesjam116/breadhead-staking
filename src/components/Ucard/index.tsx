import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useState } from "react"
import { withdrawNft } from "../../context/transaction"
/* eslint-disable @next/next/no-img-element */
export default function Card(props: { imgUrl: string, name: string, description: string, mint: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const wallet = useWallet();
    const handleStake = async () => {
        try {
            await withdrawNft(wallet, new PublicKey(props.mint), setIsLoading)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex flex-col">
            <div className="relative">
                <img className="w-[216px] h-[216px] rounded-t-[8px]" src={props.imgUrl} alt="" />
                <div className="">

                    <img className="absolute top-[10px] left-2" src="/img/baicai.svg" alt="" />
                    <h1 className="pl-2 font-bold flex justify-center rounded-[8px] text-center absolute top-[6px] left-[32px] text-[#0074CC] text-[12px] bg-[#DEEAF4] pt-[3px] pb-[5px] pr-[6px]">2.5x</h1>
                </div>
                <input className="absolute w-[14px] h-[14px] border-[1px] border-[#0000004D] rounded-[3px] top-[11px] right-[11px]" type={"checkbox"} />
            </div>
            <div className="flex flex-col bg-white-100 pl-2 pr-2 rounded-b-lg">
                <div className="flex justify-between">
                    <p className=" text-black-100 text-[14px] bg-white-100 font-bold pt-2 pr-2 pb-[10px]">{props.name}</p>
                    <div className="flex justify-center items-center flex-row">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75008 5.41663H6.58342V3.08329C6.58342 2.92858 6.52196 2.78021 6.41256 2.67081C6.30317 2.56142 6.15479 2.49996 6.00008 2.49996C5.84537 2.49996 5.697 2.56142 5.5876 2.67081C5.47821 2.78021 5.41675 2.92858 5.41675 3.08329V5.99996C5.41675 6.15467 5.47821 6.30304 5.5876 6.41244C5.697 6.52183 5.84537 6.58329 6.00008 6.58329H7.75008C7.90479 6.58329 8.05317 6.52183 8.16256 6.41244C8.27196 6.30304 8.33342 6.15467 8.33342 5.99996C8.33342 5.84525 8.27196 5.69688 8.16256 5.58748C8.05317 5.47808 7.90479 5.41663 7.75008 5.41663ZM6.00008 0.166626C4.84636 0.166626 3.71854 0.508745 2.75926 1.14972C1.79997 1.79069 1.0523 2.70174 0.610787 3.76764C0.169276 4.83354 0.0537561 6.00643 0.278837 7.13799C0.503917 8.26954 1.05949 9.30894 1.87529 10.1247C2.6911 10.9406 3.7305 11.4961 4.86206 11.7212C5.99361 11.9463 7.1665 11.8308 8.2324 11.3893C9.29831 10.9477 10.2093 10.2001 10.8503 9.24079C11.4913 8.2815 11.8334 7.15368 11.8334 5.99996C11.8334 5.23391 11.6825 4.47537 11.3894 3.76764C11.0962 3.05991 10.6665 2.41684 10.1249 1.87517C9.5832 1.33349 8.94014 0.903814 8.2324 0.610662C7.52467 0.31751 6.76613 0.166626 6.00008 0.166626ZM6.00008 10.6666C5.0771 10.6666 4.17485 10.3929 3.40742 9.88015C2.63999 9.36737 2.04186 8.63854 1.68865 7.78581C1.33544 6.93309 1.24302 5.99478 1.42309 5.08954C1.60315 4.18429 2.04761 3.35277 2.70025 2.70013C3.3529 2.04748 4.18442 1.60303 5.08966 1.42296C5.99491 1.2429 6.93322 1.33531 7.78594 1.68852C8.63866 2.04173 9.36749 2.63987 9.88027 3.4073C10.3931 4.17473 10.6667 5.07698 10.6667 5.99996C10.6667 7.23764 10.1751 8.42462 9.29992 9.29979C8.42475 10.175 7.23776 10.6666 6.00008 10.6666Z" fill="black" fillOpacity="0.6" />
                        </svg>
                        <p className="text-[12px] text-black-60 ml-[5px] mr-2">31 days</p>
                    </div>
                </div>
                <div className=" text-black-100 ml-0 mr-2 bg-[#F0F2F5] font-normal pt-[10px] pb-[10px] text-[12px] rounded-[8px] flex flex-col">
                    <p className="text-black-60 text-[10px] pl-[10px] pb-1">Level 5</p>
                    <p className="text-black-100 font-semibold text-[10px] pl-[10px] pb-1">Straw Nest</p>
                    <svg className=" pl-[10px]" width="167" height="6" viewBox="0 0 167 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="166.667" height="6" rx="3" fill="#CDD4DE" />
                        <rect width="95" height="6" rx="3" fill="#0074CC" />
                    </svg>
                    <p className="text-black-60 text-[10px] font-medium pt-1 pl-[10px]">Bronze nest in 4 days</p>
                </div>
                <button onClick={handleStake} className="border-[1px] border-[#0000001A] text-[#0074CC] text-[12px] bg-white-100 ml-2 mr-2 text-center pt-[5px] pb-[7px] rounded-[8px] mt-[10px] mb-[8px]">Unstake</button>
            </div>

        </div>

    )
}