/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Card from "../components/Ucard";

function Ustaking() {
    return (
        <section className="justify-between overflow-hidden flex flex-col ml-[1px] w-full h-[654px] mb-6 rounded-[10px] mr-4">
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
                        <Card imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/1927.png" name="#436" description="No stake level currently" />
                        <Card imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/1106.png" name="#436" description="No stake level currently" />
                        <Card imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/1107.png" name="#436" description="No stake level currently" />
                        <Card imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/1107.png" name="#436" description="No stake level currently" />
                        <Card imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/1107.png" name="#436" description="No stake level currently" />
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Ustaking;