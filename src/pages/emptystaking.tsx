import Image from "next/image";
import { useState } from "react";
function Emptystaking() {
    const [loading, setLoading] = useState(false);
    const emptyArray = {};
    return (
        <div className="flex flex-col">
            <div className="p-4">
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
                            Jan.15 11:04 AM
                        </span>
                        <div className="flex items-center ml-[12px] mt-[5px] mb-[5px] p-3">
                            <Image
                                width={16}
                                height={16}
                                src="/img/Vector.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <main className="mr-auto flex ml-4 flex-col w-[960px] h-[654px] mt-8 bg-[#FFFFFF60] mb-[118px] rounded-[12px]">
                <div className="h-10">
                </div>
                <main className="flex flex-grow">
                    <section className="flex flex-col w-[928px] ml-auto bg-white-60 mb-6 rounded-[10px] mr-4">
                        <div className="flex justify-between pb-3">
                            <h4 className="text-[14px] text-black-100 pl-3 font-bold mt-3">Staking</h4>
                            <div className="flex items-center mt-2 mr-7 justify-center">
                                <p className="text-[12px] text-[#00000040] font-semibold pt-[6px] pb-[7px] pr-[6px]">Filter by:</p>
                                <p className="w-[71px] text-[12px] flex border-[1px] rounded-[6px] border-[#0000001A] text-neutral-8 font-semibold pt-[5px] pl-[10px] pb-[7px] pr-[5px]">Rank&nbsp;
                                    <svg className="mt-auto mb-auto" width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.53284 6.15505L10.7703 1.91005C10.8406 1.84033 10.8964 1.75737 10.9345 1.66598C10.9726 1.57459 10.9922 1.47656 10.9922 1.37755C10.9922 1.27854 10.9726 1.18051 10.9345 1.08911C10.8964 0.99772 10.8406 0.91477 10.7703 0.845047C10.6298 0.705359 10.4397 0.626953 10.2416 0.626953C10.0434 0.626953 9.85336 0.705359 9.71284 0.845047L5.96284 4.55755L2.25034 0.845047C2.10982 0.705359 1.91973 0.626953 1.72159 0.626953C1.52345 0.626953 1.33336 0.705359 1.19284 0.845047C1.12197 0.914509 1.06559 0.997342 1.02697 1.08875C0.98835 1.18016 0.968251 1.27832 0.967839 1.37755C0.968251 1.47678 0.98835 1.57494 1.02697 1.66635C1.06559 1.75775 1.12197 1.84059 1.19284 1.91005L5.43034 6.15505C5.50057 6.23118 5.58581 6.29193 5.68068 6.33349C5.77556 6.37504 5.87801 6.3965 5.98159 6.3965C6.08516 6.3965 6.18762 6.37504 6.28249 6.33349C6.37737 6.29193 6.46261 6.23118 6.53284 6.15505V6.15505Z" fill="#637694" />
                                    </svg>
                                </p>

                            </div>
                        </div>
                        <div className="ml-3 mr-3 mb-4 flex flex-col justify-center items-center mt-[200px] ">
                            <p className=" font-bold text-black-100 text-[20px]">You don't have any breadheads</p>
                            <div className="mt-3 rounded-[8px] w-[300px] flex border-[1px] relative border-[#0000001A] justify-center items-center">
                                <img className=" absolute left-0 top-1" src="/img/logo.png" alt="" />
                                <p className="pt-2 pb-2 font-medium text-black-100 text-[14px] ">Buy on Magic Eden</p>
                            </div>
                        </div>
                    </section>
                </main>
            </main>
        </div>
    );
}

export default Emptystaking;