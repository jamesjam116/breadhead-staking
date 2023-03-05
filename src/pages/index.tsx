import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';
// import { ToastContainer } from "react-toastify";
// import PageLoading from "../components/PageLoading";
import Nft from '../components/Nft';

function Gallery() {
    return (
        <div className=" flex flex-wrap justify-center items-center">
            <Link href="/gallery"><a className="w-[400px] h-[300px] bg-cover bg-no-repeat bg-gallery text-[#4b09ff] text-[40px]"></a></Link>
            <Link href="/ustaking"><a className="w-[400px] h-[300px] bg-cover bg-no-repeat bg-ustaking text-[#4b09ff] text-[40px]"></a></Link>
            <Link href="/mainstaking"><a className="w-[400px] h-[300px] bg-cover bg-no-repeat bg-mainstaking text-[#4b09ff] text-[40px]"></a></Link>
            <Link href="/emptystaking"><a className="w-[400px] h-[300px] bg-cover bg-no-repeat bg-emptystaking text-[#4b09ff] text-[40px]"></a></Link>
            <Link href="/staking"><a className="w-[400px] h-[300px] bg-cover bg-no-repeat bg-staking text-[#4b09ff] text-[40px]"></a></Link>
            <Link href="/breadhead"><a className="w-[400px] h-[300px] bg-cover bg-no-repeat bg-breadhead text-[#4b09ff] text-[40px]"></a></Link>
            <Link href="/leaderboard"><a className="w-[400px] h-[300px] bg-cover bg-no-repeat bg-leaderboard text-[#4b09ff] text-[40px]"></a></Link>
        </div>
    );
}

export default Gallery;