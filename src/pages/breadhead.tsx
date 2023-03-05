import Tableline from "../components/Tableline";
import Attributecard from "../components/Attributecard";
import { LeftArrow } from "../components/SvgIcons";
import { Ringicon } from "../components/SvgIcons";
import { Downloadicon } from "../components/SvgIcons";
export default function Breadhead() {
    return (
        <>
            <section className="flex justify-between flex-col w-[full] mb-4 rounded-[10px] ">
                <div className="flex pb-3 items-center pt-4 pl-[10px] ">
                    <LeftArrow />
                    <h4 className="text-[14px] text-black-100 pl-1 font-bold ">#1234</h4>
                </div>

                <section className="flex flex-col rounded-[10px]">
                    <div className="flex justify-around ">
                        <div className="w-[302px] bg-white-100 rounded-[8px] h-[332px]">
                            <h4 className="text-[18px] text-black-100 font-bold pt-4 pl-4 pb-4">#1234</h4>
                            <div className="bg-[url('https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/2020.png')] w-[270px] h-[261px] bg-cover rounded-[10px] ml-auto mr-auto relative">
                                <div className="w-7 h-7 bg-white-100 rounded-full flex justify-center items-center absolute right-3 top-3">
                                    <Downloadicon />
                                </div>
                            </div>
                        </div>
                        <div className="w-[366px] h-[332px] flex flex-col">
                            <div className="flex flex-col   bg-white-100 mb-[10px]">
                                <p className="text-[14px] text-black-100 font-bold pl-4 pt-[18px] pb-2">Resting level</p>
                                <div className="flex flex-row rounded-[8px] pt-2">
                                    <div className="relative">
                                        <Ringicon />

                                        <img src="/img/cat.png" alt="" className=" absolute left-[-14px] top-[2px] w-[36px] rounded-[10px] ml-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[14px] text-[#0074CC] font-bold pl-4 pb-2">Supreme Baker</p>
                                        <p className="text-[13px] text-black-60 pl-4 pb-1">Time staked:69 days</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between rounded-[8px]   bg-white-100 pt-3 pb-3 mb-[10px]">

                                <p className="text-[14px] text-black-100 font-semibold  pl-4 ">Owner</p>

                                <div className="flex">
                                    <img src="/img/sol.png" className="w-5" alt="" />
                                    <p className="text-[14px] text-black-60 font-semibold  pl-3 pr-3">3cd... YEQ</p>
                                </div>
                            </div>
                            <div className="rounded-[8px] bg-white-100 mb-[10px]">
                                <ul className="mt-[14px] ml-4 mr-3 mb-[14px]">
                                    <li className="mb-2">
                                        <div className="flex flex-row justify-between">
                                            <div className="text-[14px] text-black-100 font-semibold">Listed price</div>
                                            <div className="text-[14px] text-[#0074CC] font-semibold">1.8SOL</div>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div className="flex flex-row justify-between">
                                            <div className="text-[14px] text-black-100 font-semibold">Market Place fee</div>
                                            <div className="text-[14px] text-[#0074CC] font-semibold">1.5%</div>
                                        </div>
                                    </li>
                                    <li className="mb-4">
                                        <div className="flex flex-row justify-between">
                                            <div className="text-[14px] text-black-100 font-semibold">Royalty</div>
                                            <div className="text-[14px] text-[#0074CC] font-semibold">5%</div>
                                        </div>
                                    </li>
                                    <li>
                                        <button className="bg-[#0074CC] w-full text-white-100 text-[12px] font-semibold text-center pt-[5px] pb-[7px] rounded-[8px]">Buy now on Magic Eden</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-[14px] text-black-100 font-bold mt-7 mb-3 ml-3">&nbsp;&nbsp;Attributes</div>
                    <div className="flex flex-wrap ml-1.5">
                        <Attributecard body={1.3} brave={12.23} />
                        <Attributecard body={1.3} brave={12.23} />
                        <Attributecard body={1.3} brave={12.23} />
                        <Attributecard body={1.3} brave={12.23} />
                        <Attributecard body={1.3} brave={12.23} />
                        <Attributecard body={1.3} brave={12.23} />
                    </div>
                </section>

            </section>
        </>
    );
}
