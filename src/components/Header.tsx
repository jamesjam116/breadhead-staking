
import React, { useState } from "react"
import Image from "next/image"
import { useDate } from "./Time"
export default function Header() {
    const { date, time, wish } = useDate();
    const [isFullscreen, setFullscreen] = useState(true);
    function handleFullScreenClick() {
        if (isFullscreen) {
            document.body.requestFullscreen();
            setFullscreen(!isFullscreen);
        } else {
            document.exitFullscreen();
            setFullscreen(!isFullscreen);

        }
    }
    return (
        <header className="fixed top-0 w-full p-4 z-[100]">
            <div className="rounded-[10px] bg-[#fafafa] flex justify-between items-center">
                <div className="flex items-center">
                    <div className="flex items-center ml-[12px] mt-[5px] mb-[5px]">
                        <Image
                            width={30}
                            height={30}
                            src="/img/logo.png"
                            alt=""
                        />
                    </div>
                    <p className="ml-[10px] text-[#1e1e1e] text-[12px] font-bold">ranger392</p>
                </div>
                <div className="flex items-center">
                    <p className="flex items-center text-[12px] font-bold mr-[30px]">
                        <span className="text-[#1e1e1e59] text-[12px]">
                            Volume 24h
                        </span>
                        <span className="text-[#1e1e1e] text-[12px]">
                            111,335SOL
                        </span>
                    </p>
                    <p className="flex items-center text-[12px] font-bold mr-[30px]">
                        <span className="text-[#1e1e1e59] text-[12px]">
                            Volume total
                        </span>
                        <span className="text-[#1e1e1e] text-[12px]">
                            19962949SOL
                        </span>
                    </p>
                    <p className="flex items-center text-[12px] font-bold mr-[30px]">
                        <span className="text-[#1e1e1e59] text-[12px]">
                            SOL/USD
                        </span>
                        <span className="text-[#1e1e1e] text-[12px]">
                            $38.65
                        </span>
                    </p>
                    <p className="flex items-center text-[12px] font-bold">
                        <span className="text-[#1e1e1e59] text-[12px]">
                            Solana Network
                        </span>
                        <span className="text-[#1e1e1e] text-[12px]">
                            3023TPS
                        </span>
                        <div className="bg-[#61BF1E] w-[7px] h-[7px] ml-1 rounded-full">

                        </div>
                    </p>
                </div>
                <div className="flex items-center">
                    <span className="text-[#1e1e1e] font-bold text-[12px]">
                        {date}{time}

                    </span>
                    <button className="flex items-center ml-[12px] mt-[5px] mb-[5px] p-3" onClick={handleFullScreenClick}>
                        <Image
                            width={16}
                            height={16}
                            src="/img/Vector.png"
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}
