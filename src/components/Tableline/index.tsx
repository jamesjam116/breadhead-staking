/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import { Bluecircle } from "../SvgIcons";
import { Yellowcircle } from "../SvgIcons";
import { Greycircle } from "../SvgIcons";
export default function Tableline(props: { rank: number, point: number }) {
    const walletAddress = "A8rgsJecHutEamvb7e8p1a14LQH3vGRPr796CDaESMeu";
    return (
        <tr className=" text-center text-[14px]">
            <td className="flex items-center py-[12px]">
                <div className="ml-[10px] relative">
                    {props.rank == 1 && <Bluecircle />}
                    {props.rank == 2 && <Yellowcircle />}
                    {props.rank == 3 && <Greycircle />}
                    <p className="absolute left-[8.25px] bottom-[5.25px] text-[9.75px] text-white-100">{props.point}</p>
                </div>
                <img src="/img/cat.png" alt="" className="w-7 h-7 ml-4" />
                <span className="ml-2 text-[14px] text-black-100 leading-[18px]">
                    {walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4)}
                </span>
            </td>
            <td className="">{(1231).toLocaleString()}</td>
            <td className="">9932</td>
            <td className="">120400</td>
            <td className="">120x</td>
        </tr>
    )
}